import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useLocation } from "react-router";

import { useDebounce } from "../hooks/useDebounce";

import "./Search.css";

export default function Search() {
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

    let query = useQuery();
    const searchTerm = query.get("q");

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const [searchResults, setSearchResults] = useState([]);
    return (
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
            <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        </div>
    );
}
