import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useLocation } from "react-router";

import { useDebounce } from "../../../hooks/useDebounce";

import "./Search.css";

export default function Search({ cols }) {
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

    let query = useQuery();
    const searchTerm = query.get("q");

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const [searchResults, setSearchResults] = useState([]);
    return (
        <div className="search">
            <select
                placeholder="검색조건"
                className="p-1 rounded border-2 border-sub-color flex-1/2"
            >
                {cols.map((col, index) => (
                    <option key={index}>{col}</option>
                ))}
            </select>

            <input
                className="mx-3 p-0.5 rounded border-2 border-sub-color flex-1"
                type="text"
            ></input>
            <button>
                <FontAwesomeIcon
                    className="search-icon"
                    icon={faMagnifyingGlass}
                />
            </button>
        </div>
    );
}
