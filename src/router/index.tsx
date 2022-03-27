import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/layout/Layout";
import { Home } from "pages/home/index";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/*<Route path="/search/:query" element={<SearchResults />} />
        <Route path="/item/:id" element={<SearchResult />} /> */}
      </Route>
    </Routes>
  );
};

export { MyRoutes };
