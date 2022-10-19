import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.scss";

import { setCurrentUser, logoutUser } from "./store/user/actions";

import Third from "./pages/Georgi/Third";
import First from "./pages/Georgi/First";
import Second from "./pages/Georgi/Second";
import Modal from "./pages/Georgi/Fourth";

import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Header from "./components/Georgi/Header";
import setAuthToken from "./utils/setAuthToken";

import jwt_decode from "jwt-decode";
import { Dispatch } from "redux";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";



const App = () => {
  const dispatch: Dispatch<any> = useDispatch();
  // const navigate = useNavigate();

  if (sessionStorage.token) {
    // Set auth token header auth
    var token = sessionStorage.token;

    // token = token.replace("Bearer ", "");
    setAuthToken(token);

    // Decode token and get user info and exp
    const decoded: any = jwt_decode(token);

    // Set user and isAuthenticated
    dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      dispatch(logoutUser());

      // Redirect to login
      // navigate("/signin");
      window.location.href = "./signin";
    }
  }

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
