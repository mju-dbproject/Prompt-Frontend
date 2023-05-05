import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { faFolderClosed } from "@fortawesome/free-regular-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
export default function EmployeePage() {
    const menus = [
        { name: "프로젝트 조회", path: "/project" },
        { name: "평가", path: "/evaluation" },
        { name: "마이페이지", path: "/mypage" },
    ];

    const icons = [
        { name: faFolderClosed },
        { name: faChartSimple },
        { name: faUser },
    ];
    return (
        <div>
            <Header></Header>

            <div className="w-1/5 h-screen  border-r-2 border-gray-300 bg-gray-700">
                <Sidebar menus={menus} icons={icons}></Sidebar>
            </div>
            <div className="h-screen bg-blue-400">
                <div>안녕하세요 만나서 반가와요</div>
            </div>
        </div>
    );
}
