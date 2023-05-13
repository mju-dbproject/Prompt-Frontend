import {
    faChartSimple,
    faHouse,
    faPen,
    faUser,
    faFolderClosed,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Sidebar from "../../components/Sidebar";

export default function ManagerPage() {
    const menus = [
        { name: "직원 관리", path: "/" },
        { name: "프로젝트 관리", path: "/manager" },
        { name: "프로젝트 생성", path: "/mypage" },
        { name: "평가 관리", path: "/evaluation" },
        { name: "마이페이지", path: "/mypage" },
    ];

    const icons = [
        { name: faUser },
        { name: faFolderClosed },
        { name: faPen },
        { name: faChartSimple },
        { name: faHouse },
    ];

    return (
        <div>
            <Header></Header>

            <div className="grid grid-cols-6 mx-auto">
                <Sidebar
                    className="col-span-1"
                    menus={menus}
                    icons={icons}
                ></Sidebar>
                <Main></Main>
            </div>
        </div>
    );
}
