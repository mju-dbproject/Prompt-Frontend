import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import JoinPageFirst from "./pages/JoinPage/first";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/join" element={<JoinPageFirst />} />
            </Routes>
        </div>
    );
};

export default App;
