import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  </Router>
);

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <h2>Home Router</h2>
      </div>
    </div>
  );
}

reportWebVitals();
