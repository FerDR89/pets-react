import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/layout/Layout";
import { Home } from "pages/home/index";
import { PetsAround } from "pages/pets-around/index";
import { Login } from "pages/login/login";
import { Auth } from "pages/login/auth";
import { Test } from "pages/test";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pets-around" element={<PetsAround />} />
        <Route path="login" element={<Login />} />
        <Route path="auth" element={<Auth />} />
        <Route path="/test" element={<Test />} />
      </Route>
    </Routes>
  );
};

export { MyRoutes };
