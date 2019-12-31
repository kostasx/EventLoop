(function(){

  // Look for sections that have a fullscreen-img attribute and set this image as the body background image whenever this section is displayed.
  let BGR;
  let attrName = "fullscreen-img";

  function fullscreen(event) {

    let url = event.currentSlide.getAttribute( attrName );

    if ( !url && event.currentSlide.getElementsByClassName( attrName ).length > 0) {
      // Hack to allow us to specify fullscreen bleed images in Markdown
      url = event.currentSlide.getElementsByClassName( attrName )[0].getAttribute("src");
    }

    // Also allow just setting an initial image with no alt tag to set fullscreen bg
    if ( !url && event.currentSlide.querySelectorAll('img[alt="Fullscreen"]').length > 0) {
      url = event.currentSlide.querySelectorAll('img[alt="Fullscreen"]')[0].getAttribute("src");
    }

    if ( url ) {
      if ( typeof BGR == "undefined"){
        BGR = document.body.style.background;
      }

      // Set image from fullscreen-img attribute as body background
      document.body.style.backgroundImage = "url('" + url + "')";
      let size = event.currentSlide.getAttribute("fullscreen-size");
      if ( size !== "contain" ) {
        document.body.style.backgroundSize = "cover";
      } else {
        document.body.style.backgroundColor = "#000000";
        document.body.style.backgroundSize  = "contain";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundPosition = "center center";
      }
    } else { 
      if ( typeof BGR !== "undefined" ) { 
        document.body.style.backgroundImage = "none";
        document.body.style.background      = BGR;
      } 
    }
  }

  Reveal.addEventListener( 'ready', fullscreen.bind( event ) );
  Reveal.addEventListener( 'slidechanged', fullscreen.bind( event ) );

}());
