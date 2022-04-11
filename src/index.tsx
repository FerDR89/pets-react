import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "router";
import { DiamonLoading } from "react-loadingg";

ReactDOM.render(
  <RecoilRoot>
    <Suspense fallback={<DiamonLoading color={"violet"} />}>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </Suspense>
  </RecoilRoot>,

  document.querySelector(".root")
);
