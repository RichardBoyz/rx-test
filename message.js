import axios from "axios";
import { interval, withLatestFrom } from "rxjs";
import { filter } from "rxjs/internal/operators/filter";
import { switchMap, tap, catchError, takeWhile } from "rxjs/operators";
const intervalTime = 1000;
const apiUrl =
  "https://ef9d2f76-8f96-458f-9ae1-c94db2fe81a0.mock.pstmn.io/success"; // 成功的 API
const failApiUrl =
  "https://ef9d2f76-8f96-458f-9ae1-c94db2fe81a0.mock.pstmn.io/fail"; // 失敗的 API

export function setMessage(element) {
  const counter$ = interval(1000);

  const apiObervable = interval(intervalTime)
    .pipe(
      takeWhile((counterValue) => counterValue <= 3),
      switchMap((counterValue) => {
        if (counterValue == 3) {
          console.log("哪尼");
        }
        return axios.get(apiUrl);
      }),
      tap((response) => {
        console.log("Message : ", response.data.message);
      })
    )
    .subscribe({
      error: (error) => console.log("error occured"),
      complete: () => {
        console.log("結束ㄌ");
      },
    });
  const observer = {
    next: (value) => {
      console.log(`New counter value: ${value}`);
      element.innerHTML = value;
      if (value > 5) {
        subscription.unsubscribe();
      }
    },
  };

  // const subscription = counter$
  //   .pipe(filter((value) => value <= 5))
  //   .subscribe(observer);
}
