import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/layout/Layout";
import { Home } from "pages/home/index";
import { PetsAround } from "pages/pets-around/index";
import { Login } from "pages/login/login";
import { Auth } from "pages/login/auth";
import { MyDates } from "pages/my-dates/index";
import { MyPets } from "pages/my-pets";
import { Test } from "pages/test";
import { ReportedPets } from "pages/reported-pets";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pets-around" element={<PetsAround />} />
        <Route path="login" element={<Login />} />
        <Route path="auth" element={<Auth />} />
        <Route path="my-dates" element={<MyDates />} />
        <Route path="my-pets" element={<MyPets />} />
        <Route path="reported-pets" element={<ReportedPets />} />
        {/* <Route path="/test" element={<Test />} /> */}
      </Route>
    </Routes>
  );
};

export { MyRoutes };
