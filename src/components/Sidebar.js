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
        { name: "평가", path: `/${admin}/evaluation` },
        { name: "마이페이지", path: `/${admin}/mypage` },
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
            { name: "프로젝트 생성", path: `/${admin}/newProject` },
            { name: "평가 관리", path: `/${admin}/evaluation` },
            { name: "마이페이지", path: `/${admin}/mypage` },
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
        <div className="border-r border-gray-300 bg-main-color h-screen">
            {menus.map((name, index) => (
                <div key={index} className="mb-3 pt-10 px-8">
                    <button
                        onClick={() => {
                            navigate(`${menus[index].path}`);
                        }}
                    >
                        <FontAwesomeIcon
                            icon={icons[index].name}
                            size="xl"
                            style={{ color: "#fff" }}
                        />
                        <span className="ml-5 text-white font-semibold	">
                            {menus[index].name}
                        </span>
                    </button>
                </div>
            ))}
        </div>
    );
}
