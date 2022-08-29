import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.scss";

import Third from "./pages/Georgi/Third";
import First from "./pages/Georgi/First";
import Second from "./pages/Georgi/Second";
import Modal from "./pages/Georgi/Fourth";

import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Header from "./components/Georgi/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />

          <Route path="/third" element={<Third />} />
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/fourth" element={<Modal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
