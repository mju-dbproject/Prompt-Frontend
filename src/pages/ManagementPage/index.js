import React from "react";

import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faFolderClosed } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";

export default function ManagementPage() {
    const menus = [
        { name: "직원 조회", path: "/employee" },
        { name: "프로젝트 관리", path: "/manageproject" },
        { name: "프로젝트 생성", path: "/newproject" },
        { name: "평가 관리", path: "/evaluation" },
        { name: "마이페이지", path: "/mypage" },
    ];

    const icons = [
        { name: faUser },
        { name: faChartSimple },
        { name: faFolderClosed },
        { name: faPen },
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
                <Main></Main>
            </div>
        </div>
    );
}
