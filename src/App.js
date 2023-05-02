import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/join" element={<JoinPage />} />
            </Routes>
        </div>
    );
};

export default App;
