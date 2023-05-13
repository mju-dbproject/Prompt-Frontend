import {
    faChartSimple,
    faFolderClosed,
    faHouse,
    faPen,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { useNavigate } from "react-router";

export default function Sidebar({ admin }) {
    const navigate = useNavigate();
    let menus = [
        { name: "프로젝트 조회", path: "/employee" },
        { name: "평가", path: "/evaluation" },
        { name: "마이페이지", path: "/mypage" },
    ];

    let icons = [
        {
            name: faFolderClosed,
        },
        { name: faChartSimple },
        { name: faHouse },
    ];

    console.log(admin);

    if (admin === "manager") {
        menus = [
            { name: "직원 관리", path: "/" },
            { name: "프로젝트 관리", path: "/manager" },
            { name: "프로젝트 생성", path: "/mypage" },
            { name: "평가 관리", path: "/evaluation" },
            { name: "마이페이지", path: "/mypage" },
        ];

        icons = [
            { name: faUser },
            { name: faFolderClosed },
            { name: faPen },
            { name: faChartSimple },
            { name: faHouse },
        ];
    }

    return (
        <div className="border-r-2 border-gray-300 h-screen">
            {menus.map((name, index) => (
                <div key={index} className="mb-3 pt-10 px-8">
                    <button
                        onClick={() => {
                            navigate(`${menus[index].path}`);
                        }}
                    >
                        <FontAwesomeIcon
                            icon={icons[index].name}
                            size="2xl"
                            style={{ color: "#292929" }}
                        />
                        <span className="ml-5">{menus[index].name}</span>
                    </button>
                </div>
            ))}
        </div>
    );
}
