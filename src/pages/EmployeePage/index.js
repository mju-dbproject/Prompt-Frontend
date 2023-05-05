import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderClosed } from "@fortawesome/free-regular-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

import "react-datepicker/dist/react-datepicker.css";
import { useLocation } from "react-router";

import { useDebounce } from "../../hooks/useDebounce";

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

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

    let query = useQuery();
    const searchTerm = query.get("q");

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const [searchResults, setSearchResults] = useState([]);

    // *** 이런식으로 진행예정
    // useEffect(() => {
    //     if (debouncedSearchTerm) {
    //         fetchSearchProject(debouncedSearchTerm);
    //     }
    // }, [debouncedSearchTerm]);

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
                    <section className="flex items-center w-6/7 h-16 mt-5 pl-5 bg-gray-300 rounded">
                        <div className="period">
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
                        </div>
                        <div className="search ml-44">
                            <select placeholder="검색조건">
                                <option>발주처명</option>
                                <option>프로젝트명</option>
                                <option>시작일자</option>
                                <option>종료일자</option>
                                <option>상태</option>
                            </select>

                            <input
                                className="mx-3"
                                value={searchTerm}
                                type="text"
                            ></input>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
