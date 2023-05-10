import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useLocation } from "react-router";

import { useDebounce } from "../hooks/useDebounce";

import "./Search.css";

export default function Search() {
    const [startDate, setStartDate] = useState(new Date());

    const [endDate, setEndDate] = useState(new Date());

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

    let query = useQuery();
    const searchTerm = query.get("q");

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const [searchResults, setSearchResults] = useState([]);
    return (
        <section className="flex items-center place-content-between h-16 mt-3 px-5 border-2 border-slate-200 rounded">
            <div className="period mr-44">
                <div className="flex items-center w-1/2">
                    <div className="whitespace-nowrap mr-5 w-10">기간</div>

                    <DatePicker
                        dateFormat="yyyy년 MM월 dd일"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        locale={ko}
                        className="rounded text-center w-40 py-1 px-3 border-2 border-blue-400"
                    />
                    <span>&nbsp;~&nbsp;</span>
                    <DatePicker
                        dateFormat="yyyy년 MM월 dd일"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        locale={ko}
                        className="rounded text-center w-40 py-1 px-3 border-2 border-blue-400"
                    />
                </div>
            </div>
            <div className="search w-1/2 justify-self-stretch lg:hidden xl:inline-block xl:max-w-xl">
                <select
                    placeholder="검색조건"
                    className="p-1 rounded border-2 border-blue-400"
                >
                    <option>발주처명</option>
                    <option>프로젝트명</option>
                    <option>시작일자</option>
                    <option>종료일자</option>
                    <option>상태</option>
                </select>

                <input
                    className="mx-3 p-0.5 rounded border-2 border-blue-400"
                    type="text"
                ></input>
                <FontAwesomeIcon
                    className="search-icon"
                    icon={faMagnifyingGlass}
                />
            </div>
        </section>
    );
}
