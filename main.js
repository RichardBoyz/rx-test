import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { setMessage } from "./message";
import { setTestApi } from "./testApi";
import { setDetectClick } from "./detectClick";
import { simpleObservable } from "./simpleObservable";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <p id="message"></p>
      <p id="testApi"></p>
      <div id="detectClick">123</div>
      <div id="simpleObservable"></div>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
setMessage(document.querySelector("#message"));
setTestApi(document.querySelector("#testApi"));
setDetectClick(document.querySelector("#detectClick"));
simpleObservable(document.querySelector("#simpleObservable"));