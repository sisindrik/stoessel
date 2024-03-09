import React from "react";
import Feeds from "./Feeds";
import Post from "./Post";
import Images from"./Images";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function App16() {
  return (
    <div>
      <Router>
        <Link to="/">Feeds</Link> | <Link to="/post">Post</Link>
        <Routes>
            <Route path="/" index element={<Feeds/>}></Route>
            <Route path="/post" element={<Post/>}></Route>
            <Route path="/Images" element={<Images/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}