import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Welcome from "./Components/WelcomePage";
import AccountSetting from "./Components/AccountPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Signup />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/account" element={<AccountSetting/>}/>
      </Routes>
    </Router>
  );
}

export default App;

