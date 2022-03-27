import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "router";

ReactDOM.render(
  <RecoilRoot>
    <Suspense fallback="null">
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </Suspense>
  </RecoilRoot>,

  document.querySelector(".root")
);
