import React from "react";
import { Routes, Route } from "react-router";
import MainPage from "./pages/MainPage";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import EmployeePage from "./pages/EmployeePage";
import JoinPage from "./pages/JoinPage";
import MyPage from "./pages/MyPage";
import ManagerPage from "./pages/ManagerPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/join" element={<JoinPage />} />
                <Route path="/employee" element={<EmployeePage />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/manager" element={<ManagerPage />} />
            </Routes>
        </div>
    );
};

export default App;
