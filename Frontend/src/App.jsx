import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

import DashBoard from "./components.part/DashBoard.jsx";
import Teacher from "./components.part/Teacher.jsx";
import Notes from "./components.part/Notes.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/teachers" element={<Teacher />}></Route>
          <Route path="/Dashboard" element={<DashBoard />}></Route>
          <Route path="/Notes" element={<Notes />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
