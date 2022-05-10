import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardDetail } from "../Pages/CardDetail";
import { Home } from "../Pages/Home";
import { NotFound } from "../Pages/NotFound";

export function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:prdNo" element={<CardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
