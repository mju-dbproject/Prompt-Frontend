import React, { useState, useEffect } from "react";
import Search from "../Molecules/Search/Search";
import SubNav from "../Molecules/Subnav/SubNav";
import DatePick from "../Molecules/DatePick/DatePick";

import { useRecoilState } from "recoil";
import { allProjectsState, adminState } from "../../hooks/recoil/atoms";
import ProjectTable from "../Atoms/Table/ProjectTable";

import EmployeePjNav from "../Molecules/EmployeePjNav/EmployeePjNav";

export default function ManagerMain({ subTitle, employeeTitle, cols }) {
    const [selectedDate, setSelectedDate] = useState(null);

    const [allProjects, setAllProjects] = useRecoilState(allProjectsState);
    // const setProjects = useSetRecoilState(allProjectsState);
    const [isAdmin, setIsAdmin] = useRecoilState(adminState);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleSearch = (searchTerm) => {
        // 검색 단어랑 검색 날짜를 조합해서 검색
    };

    return (
        <div className="col-span-5 h-screen px-16 py-10 bg-gray-100 ">
            <SubNav subTitle={subTitle} isAdmin={isAdmin}></SubNav>
            {isAdmin && (
                <section className="relative z-10 flex bg-white drop-shadow-md items-center place-content-between h-16 mt-3 px-5 border border-slate-200 rounded">
                    <DatePick onChange={handleDateChange} />
                    <Search onChange={handleSearch} cols={cols} />
                </section>
            )}

            <div className="relative z-0">
                <ProjectTable cols={cols}></ProjectTable>
            </div>
        </div>
    );
}
