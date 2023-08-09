import { fromEvent, scan } from "rxjs";

export function setupCounter(element) {
  let counter = 0;
  const observable$ = fromEvent(document, "click").pipe(
    scan((count) => count + 1, counter)
  );
  const observer = {
    next: (count) => {
      console.log(count);
    },
    complete: () => {
      console.log("complete");
    },
  };
  const subscript = observable$.subscribe(observer);

  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
