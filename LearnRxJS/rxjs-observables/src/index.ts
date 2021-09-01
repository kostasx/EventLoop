import { fromEvent } from "rxjs";
import { Subject, interval } from "rxjs";
import { map, filter, scan } from "rxjs";
console.clear();

// 1) Observable (from Event)
const observable = fromEvent(document, "keypress");
observable.subscribe(({ key }: { key: string }) => console.log(key));

// 2) Pipeable Operators + Creation Operators in Action
const ticker = interval(600);
const disposableTicker = ticker
  .pipe(
    map((v: number) => v * 100),
    filter((v: number) => v > 400),
    scan((acc: number, v: number) => {
      acc += v;
      if (acc > 2000) {
        disposableTicker.unsubscribe();
      }
      return acc;
    })
  )
  .subscribe((o: number) => console.log("Ticker:", o));

// 3) Subject
const subject = new Subject<string>();
const int = interval(1000);
const disposable = int.subscribe((v: number) => {
  // console.log({ v });
  subject.next(v.toString());
});

// 1st Subscriber
subject.subscribe((v: number) => console.log("Observer 1:", v));

// 2st Subscriber (after 5 seconds)
setTimeout(() => {
  subject.subscribe((v: number): void => {
    console.log("Observer 2:", v);
  });
}, 5000);

// Close Subject after 10 seconds
setTimeout(() => {
  subject.complete();
  disposable.unsubscribe(); // Always unsubscribe!
}, 10000);
