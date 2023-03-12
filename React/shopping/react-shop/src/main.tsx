import { RecoilRoot } from "recoil";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </RecoilRoot>
);
