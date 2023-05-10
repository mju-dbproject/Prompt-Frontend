import {
    faChartSimple,
    faFolderClosed,
    faHouse,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Sidebar from "../../components/Sidebar";

export default function MyPage() {
    const menus = [
        { name: "프로젝트 조회", path: "/project" },
        { name: "평가", path: "/evaluation" },
        { name: "마이페이지", path: "/mypage" },
    ];

    const icons = [
        { name: faFolderClosed },
        { name: faChartSimple },
        { name: faHouse },
    ];
    return (
        <div>
            <Header></Header>

            <div className="grid grid-cols-5 mx-auto">
                <Sidebar
                    className="col-span-1"
                    menus={menus}
                    icons={icons}
                ></Sidebar>
                <div className="col-span-4 h-screen px-20 pt-10">
                    <div className="container w-5/6 h-5/6 mx-40 rounded bg-slate-300">
                        <div className="text-2xl font-medium pt-3 text-center">
                            마이페이지
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
