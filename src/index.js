import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  NavLink,
  Outlet,
  useParams,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/myapps" element={<Navigate replace to="/learn" />}></Route>
      <Route path="/learn" element={<Learn />}>
        <Route path="courses" element={<Courses />}>
          <Route path=":courseid" element={<CourseId />} />
        </Route>
        <Route path="bundles" element={<Bundles />} />
      </Route>
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

function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <div>
        <h2>Learn List</h2>
        <Link className="btn btn-success" to="/learn/courses">
          Courses
        </Link>
        {" | "}
        <Link className="btn btn-primary" to="/learn/bundles">
          Bundle
        </Link>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

function Courses() {
  const courseList = ["React", "Angular", "Vue"];
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div>
      <h1>Courses</h1>
      <div>
        <h4>Courses List</h4>
        <p>More Infos</p>
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "white" : "black",
            };
          }}
          to={`/learn/courses/${randomCourseName}`}
        >
          {randomCourseName}
        </NavLink>
        {" | "}
        <NavLink className="btn btn-light" to={`/learn/courses/tests`}>
          Tests
        </NavLink>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

function Bundles() {
  return (
    <div>
      <h1>Bundles</h1>
      <div>
        <h4>Bundles Card</h4>
      </div>
    </div>
  );
}

function CourseId() {
  const { courseid } = useParams();
  return (
    <div>
      <h1>URL Param is: {courseid}</h1>
      <button className="btn btn-warning">Price</button>
    </div>
  );
}

reportWebVitals();
