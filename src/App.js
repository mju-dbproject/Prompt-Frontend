import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import JoinPageFirst from "./pages/JoinPage/first";
import JoinPageSecond from "./pages/JoinPage/second";
import EmployeePage from "./pages/EmployeePage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/join" element={<JoinPageFirst />} />
                <Route path="/join/step2" element={<JoinPageSecond />} />
                <Route path="/employee" element={<EmployeePage />} />
            </Routes>
        </div>
    );
};

export default App;
