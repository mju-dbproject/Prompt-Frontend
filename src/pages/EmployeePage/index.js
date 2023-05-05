import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { faFolderClosed } from "@fortawesome/free-regular-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Calendar from "short-react-calendar";

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

    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate({ date });
    };

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
                    <section className="w-6/7 h-16 mt-5 flex flex-col justify-center bg-gray-300 rounded">
                        <div>기간</div>
                        <Calendar
                            onChange={onChange}
                            value={date}
                            calendarType="US"
                            oneWeekCalendar={true}
                        />
                    </section>
                    <section></section>
                </div>
            </div>
        </div>
    );
}
