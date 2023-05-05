import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";

import { faFolderClosed } from "@fortawesome/free-regular-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import "react-datepicker/dist/react-datepicker.css";

import Table from "../../components/Table";

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

    // const [subNav, setSubNav] = useState[""];

    // const [startDate, setStartDate] = useState(new Date("2021/08/27"));

    // *** 이런식으로 진행예정
    // useEffect(() => {
    //     if (debouncedSearchTerm) {
    //         fetchSearchProject(debouncedSearchTerm);
    //     }
    // }, [debouncedSearchTerm]);

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
