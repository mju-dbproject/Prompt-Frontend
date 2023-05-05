import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { faFolderClosed } from "@fortawesome/free-regular-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

import "react-datepicker/dist/react-datepicker.css";

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
    const [startDate, setStartDate] = useState(new Date());

    const [endDate, setEndDate] = useState(new Date());

    return (
        <div>
            <Header></Header>

            <div className="grid grid-cols-5">
                <Sidebar menus={menus} icons={icons}></Sidebar>
                <div className="col-span-4 h-screen px-16 py-10">
                    <section className="subNav w-6/7 grid grid-cols-5 bg-gray-300 h-1/5 rounded pl-7">
                        <div className="bg-gray-100 m-5 rounded">
                            <div className="ml-5 mt-3">전체</div>
                            <div className="text-2xl text-center">12</div>
                        </div>
                        <div className="bg-gray-100 m-5 rounded"></div>
                        <div className="bg-gray-100 m-5 rounded"> </div>
                    </section>
                    <section className="flex w-6/7 h-16 mt-5 pl-5 bg-gray-300 rounded">
                        <div className="flex items-center">
                            <div className="whitespace-nowrap mr-5 w-10">
                                기간
                            </div>
                            <DatePicker
                                dateFormat="yyyy년 MM월 dd일"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                locale={ko}
                                className="rounded text-center w-40 py-1 px-3 border-2 border-blue-200"
                            />
                            <span>~&nbsp;</span>
                            <DatePicker
                                dateFormat="yyyy년 MM월 dd일"
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                locale={ko}
                                className="rounded text-center w-40 py-1 px-3 border-2 border-blue-200"
                            />
                        </div>
                    </section>
                    <section></section>
                </div>
            </div>
        </div>
    );
}
