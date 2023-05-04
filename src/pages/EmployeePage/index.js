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

            <Sidebar menus={menus} icons={icons}></Sidebar>
        </div>
    );
}
