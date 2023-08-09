import { fromEvent } from "rxjs";
import { filter } from "rxjs/internal/operators/filter";
import { map } from "rxjs/operators";

export function setDetectClick(element) {
  const observer = fromEvent(document, "click")
    .pipe(
      filter((_, index) => {
        return index % 2 == 0;
      }),
      map((event) => ({ x: event.x, y: event.y }))
    )
    .subscribe((position) => {
      console.log(`x: ${position.x}, y: ${position.y}`);
    });
}
