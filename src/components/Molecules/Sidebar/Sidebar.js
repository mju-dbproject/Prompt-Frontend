import {
    faChartSimple,
    faFolderClosed,
    faHouse,
    faPen,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { adminState } from "../../../hooks/recoil/atoms";

export default function Sidebar() {
    const navigate = useNavigate();

    const [admin, setAdmin] = useRecoilState(adminState);

    let menus = [];
    let icons = [];
    if (admin) {
        menus = [
            { name: "직원 관리", path: "/manager/employeeList" },
            { name: "프로젝트 관리", path: "/manager/projectList" },
            { name: "프로젝트 생성", path: `/manager/newProject` },
            { name: "평가 관리", path: `/manager/evaluation` },
            { name: "마이페이지", path: `/manager/mypage` },
        ];

        icons = [
            { name: faUser },
            { name: faFolderClosed },
            { name: faPen },
            { name: faChartSimple },
            { name: faHouse },
        ];
    }
    if (!admin) {
        menus = [
            { name: "프로젝트 조회", path: "/employee/projectList" },
            { name: "평가", path: `/employee/evaluation` },
            { name: "마이페이지", path: `/employee/mypage` },
        ];

        icons = [
            {
                name: faFolderClosed,
            },
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
                    ;
                </div>
            ))}
        </div>
    );
}
