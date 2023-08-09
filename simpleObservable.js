import { Observable } from "rxjs";

export function simpleObservable(element) {
  const myObservable = new Observable((observer) => {
    // 發出數據事件
    observer.next("Data 1");

    // 模擬一個錯誤事件
    // observer.error('An error occurred');

    // 發出更多數據事件
    observer.next("Data 2");

    // 完成數據流
    observer.complete();
  });

  // 訂閱 Observable
  myObservable.subscribe({
    next: (data) => {
      console.log("Received data:", data);
    },
    error: (err) => {
      console.error("An error occurred:", err);
    },
    complete: () => {
      console.log("Observable completed.");
    },
  });
}
