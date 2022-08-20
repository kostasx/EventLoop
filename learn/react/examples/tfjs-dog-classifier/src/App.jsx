import React, { useState, useRef, useEffect } from "react";
import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";
import * as mobilenet from "@tensorflow-models/mobilenet";

// The MobileNet contains a huge list of classified objects
// We just need the dogs in this example, so this list will
// help us filter out other animals or objects.
// The available classes can be found here: https://github.com/tensorflow/tfjs-models/blob/master/mobilenet/src/imagenet_classes.ts
// Dog classes can be found in the range: 151~268
const dogs = [
  "Chihuahua",
  "Japanese spaniel",
  "Maltese dog, Maltese terrier, Maltese",
  "Pekinese, Pekingese, Peke",
  "Shih-Tzu",
  "Blenheim spaniel",
  "papillon",
  "toy terrier",
  "Rhodesian ridgeback",
  "Afghan hound, Afghan",
  "basset, basset hound",
  "beagle",
  "bloodhound, sleuthhound",
  "bluetick",
  "black-and-tan coonhound",
  "Walker hound, Walker foxhound",
  "English foxhound",
  "redbone",
  "borzoi, Russian wolfhound",
  "Irish wolfhound",
  "Italian greyhound",
  "whippet",
  "Ibizan hound, Ibizan Podenco",
  "Norwegian elkhound, elkhound",
  "otterhound, otter hound",
  "Saluki, gazelle hound",
  "Scottish deerhound, deerhound",
  "Weimaraner",
  "Staffordshire bullterrier, Staffordshire bull terrier",
  "American Staffordshire terrier, Staffordshire terrier, American pit bull terrier, pit bull terrier",
  "Bedlington terrier",
  "Border terrier",
  "Kerry blue terrier",
  "Irish terrier",
  "Norfolk terrier",
  "Norwich terrier",
  "Yorkshire terrier",
  "wire-haired fox terrier",
  "Lakeland terrier",
  "Sealyham terrier, Sealyham",
  "Airedale, Airedale terrier",
  "cairn, cairn terrier",
  "Australian terrier",
  "Dandie Dinmont, Dandie Dinmont terrier",
  "Boston bull, Boston terrier",
  "miniature schnauzer",
  "giant schnauzer",
  "standard schnauzer",
  "Scotch terrier, Scottish terrier, Scottie",
  "Tibetan terrier, chrysanthemum dog",
  "silky terrier, Sydney silky",
  "soft-coated wheaten terrier",
  "West Highland white terrier",
  "Lhasa, Lhasa apso",
  "flat-coated retriever",
  "curly-coated retriever",
  "golden retriever",
  "Labrador retriever",
  "Chesapeake Bay retriever",
  "German short-haired pointer",
  "vizsla, Hungarian pointer",
  "English setter",
  "Irish setter, red setter",
  "Gordon setter",
  "Brittany spaniel",
  "clumber, clumber spaniel",
  "English springer, English springer spaniel",
  "Welsh springer spaniel",
  "cocker spaniel, English cocker spaniel, cocker",
  "Sussex spaniel",
  "Irish water spaniel",
  "kuvasz",
  "schipperke",
  "groenendael",
  "malinois",
  "briard",
  "kelpie",
  "komondor",
  "Old English sheepdog, bobtail",
  "Shetland sheepdog, Shetland sheep dog, Shetland",
  "collie",
  "Border collie",
  "Bouvier des Flandres, Bouviers des Flandres",
  "Rottweiler",
  "German shepherd, German shepherd dog, German police dog, alsatian",
  "Doberman, Doberman pinscher",
  "miniature pinscher",
  "Greater Swiss Mountain dog",
  "Bernese mountain dog",
  "Appenzeller",
  "EntleBucher",
  "boxer",
  "bull mastiff",
  "Tibetan mastiff",
  "French bulldog",
  "Great Dane",
  "Saint Bernard, St Bernard",
  "Eskimo dog, husky",
  "malamute, malemute, Alaskan malamute",
  "Siberian husky",
  "dalmatian, coach dog, carriage dog",
  "affenpinscher, monkey pinscher, monkey dog",
  "basenji",
  "pug, pug-dog",
  "Leonberg",
  "Newfoundland, Newfoundland dog",
  "Great Pyrenees",
  "Samoyed, Samoyede",
  "Pomeranian",
  "chow, chow chow",
  "keeshond",
  "Brabancon griffon",
  "Pembroke, Pembroke Welsh corgi",
  "Cardigan, Cardigan Welsh corgi",
  "toy poodle",
  "miniature poodle",
  "standard poodle",
  "Mexican hairless",
];

function App() {

  const [results, setResults] = useState([]);
  const [imageURL, setImageURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [identifying, setIdentifying] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);

  const imageRef = useRef();
  const inputRef = useRef();

  useEffect(()=>{
    function onLoad(e){
      setImgLoading(false);
    }
    if ( imageRef.current ){
      imageRef.current.addEventListener("load", onLoad);
    } 
    return function cleanUp(){
      if ( imageRef.current ){
        imageRef.current.removeEventListener("load", onLoad);
      }
    }
  }, [imageURL]);

  const loadModel = async () => {
    setLoading(true);
    try {
      const model = await mobilenet.load();
      setModel(model);
    } catch (e){
      console.error("loadModel()", e);
    } finally {
      setLoading(false);
    }
  };

  const identify = async () => {
    setIdentifying(true);
    const results = await model.classify(imageRef.current);
    setIdentifying(false);
    const dogResults = results.filter((result) => {
      return dogs.includes(result.className);
    });
    setResults(dogResults);
  };

  const handleUpload = (event) => {
    const { files } = event.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(event.target.files[0]);
      setImageURL(url);
    }
  };

  const testImages = [
    "corgi.jpeg",
    "Afghan_hound.png",
    "Leonberg.png",
    "dhole.png",
    "yorkshire-terrier.png",
    "Great_Dane.png",
    "Mexican_hairless.png",
    "giant_schnauzer.png",
    "Irish_water_spaniel.png",
    "bluetick.png",
    "toy_poodle.png",
  ];

  const loadRandomImage = () => {
    setImgLoading(true);
    const randomImage =
      testImages[Math.floor(Math.random() * testImages.length)];
    setImageURL(`/test-images/${randomImage}`);
  };

  return (
    <main className="shadow w-1/2 m-auto mt-8 p-6 border border-black shadow-gray-400 shadow-lg">
      {/* While Model is not loaded... */}
      {!model && (
        <>
          <p>
            <strong className="text-red-700">Model has not been loaded.</strong>
          </p>
          <p className="mt-4">
            <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full" + (loading ? " bg-orange-600 hover:bg-orange-700" : "")} onClick={loadModel}>
              {loading ? "Loading... (it's going to take a while the first time)" : "Load Model"}
            </button>
          </p>
        </>
      )}
      {/* While Model is loaded... */}
      {model && (
        <section>
          <p>
            <strong>Model loaded.</strong>
          </p>
          <p className="mt-4">
            {imgLoading && <span>Image loading...</span>}
            {imageURL && (
              <img crossOrigin='anonymous' className="border border-black mb-4" src={imageURL} alt="upload-preview" ref={imageRef} />
            )}
            <input
              type="file"
              accept="image/*"
              capture="camera"
              onChange={handleUpload}
              ref={inputRef}
            />
          </p>
          <p className="mt-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full" onClick={identify}>Identify</button>
            <button className="ml-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full" onClick={loadRandomImage}>Load random test image</button>
          </p>
          {(results.length > 0) && (
            <ul className="border p-4 mt-4 shadow">
              {results.map(({ className, probability }) => (
                <li className="text-lg" key={className}>
                  <strong>{className}: </strong>%{(
                  probability * 100
                ).toFixed(2)}
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
      <p className="text-gray-500 mt-6">
        <em>By loading the model, we are fetching the sharded weight files (~17MB) and caching them in the browser. Thus a model is likely to load more quickly on subsequent occasions.</em>
        <em>To ensure that the cached files are used on subsequent reloads, make sure to turn off the <strong>Disable cache (while DevTools is open)</strong> setting in the DevTools.</em>
      </p>
    </main>
  );
}

export default App;
