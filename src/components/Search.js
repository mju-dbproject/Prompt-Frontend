import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useLocation } from "react-router";

import { useDebounce } from "../hooks/useDebounce";

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
        <section className="flex items-center w-6/7 h-16 mt-3 pl-5 bg-gray-300 rounded">
            <div className="period">
                <div className="flex items-center">
                    <div className="whitespace-nowrap mr-5 w-10">기간</div>
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
            <div className="search ml-44 max-w-lg">
                <select placeholder="검색조건" className="p-1 rounded">
                    <option>발주처명</option>
                    <option>프로젝트명</option>
                    <option>시작일자</option>
                    <option>종료일자</option>
                    <option>상태</option>
                </select>

                <input
                    className="mx-3 p-0.5 rounded"
                    value={searchTerm}
                    type="text"
                ></input>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
        </section>
    );
}
