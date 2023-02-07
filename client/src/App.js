import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'antd/dist/antd.min.css';

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth"
import NavBar from "./components/views/NavBar/NavBar";

function App() {
  const AuthenticLandingPage  = Auth(LandingPage, null);
  const AuthenticLoginPage  = Auth(LoginPage, false);
  const AuthenticRegisterPage  = Auth(RegisterPage, false);
  return (
    <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<AuthenticLandingPage />} />
          <Route path="/login" element={<AuthenticLoginPage />} />
          <Route path="/register" element={<AuthenticRegisterPage />} />
        </Routes>
    </Router>
  );
}

export default App;