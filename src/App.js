import React from "react";
import { Routes, Route } from "react-router";
import MainPage from "./pages/MainPage";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import EmployeePage from "./pages/EmployeePage";
import JoinPage from "./pages/JoinPage";
import MyPage from "./pages/MyPage";
import ProjectCreatePage from "./pages/ProjectCreate";
import EvaluationPage from "./pages/EvaluationPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectManage from "./pages/ProjectManage";
import EmployeeManage from "./pages/EmployeeManage";
import NotApprovePage from "./pages/NotApprovePage";
import EmployeeDetailPage from "./pages/EmployeeDetailPage";
import FindIdPage from "./pages/FindIdPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import EvaluationManage from "./pages/EvaluationManage";

const App = () => {
    return (
        <div className="App">
            <Routes>
                {/* common */}
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/join" element={<JoinPage />} />
                <Route path="/notApprove" element={<NotApprovePage />} />
                <Route path="/findId" element={<FindIdPage />} />
                <Route path="/passwordReset" element={<PasswordResetPage />} />

                {/* employee */}

                <Route
                    path="/employee/projectList"
                    element={<EmployeePage />}
                />

                <Route path="/employee/mypage" element={<MyPage />} />
                <Route
                    path="/employee/evaluation"
                    element={<EvaluationPage />}
                />

                <Route
                    path="/employee/project/:id"
                    element={<ProjectDetailPage />}
                />

                <Route
                    path="/manager/projectList"
                    element={<ProjectManage />}
                />

                {/* manager */}
                <Route
                    path="/manager/employeeList"
                    element={<EmployeeManage />}
                />

                <Route
                    path="/manager/employeeList/:id"
                    element={<EmployeeDetailPage />}
                />
                <Route
                    path="/manager/projectList"
                    element={<ProjectManage />}
                />
                <Route
                    path="/manager/newProject"
                    element={<ProjectCreatePage />}
                />
                <Route
                    path="/manager/project/:id"
                    element={<ProjectDetailPage />}
                />
                <Route
                    path="/manager/evaluation"
                    element={<EvaluationManage />}
                />
                <Route path="/manager/mypage" element={<MyPage />} />
            </Routes>
        </div>
    );
};

export default App;
