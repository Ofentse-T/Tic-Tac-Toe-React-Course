import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Games";
import Details from "./pages/Details/Details";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ details" element={<Game />} />
        <Route path="/ game-on" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
