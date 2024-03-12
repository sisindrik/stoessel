import React from "react";
import Feeds from "./Feeds";
import Post from "./Postm";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Postm from "./Postm";
export default function App15m() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Feeds</Link> | <Link to="/postm">Post</Link>
        <Routes>
            <Route path="/postm" element={<Postm/>}></Route>
            <Route path="/" index element={<Feeds/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}