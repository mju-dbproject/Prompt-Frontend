import React, { useState, useEffect } from "react";
import Search from "../Molecules/Search/Search";
import SubNav from "../Molecules/Subnav/SubNav";
import DatePick from "../Molecules/DatePick/DatePick";
import { useLocation } from "react-router";
import { useDebounce } from "../../hooks/useDebounce";

import { useRecoilState, useSetRecoilState } from "recoil";
import { allProjectsState } from "../../hooks/recoil/atoms";
import ProjectTable from "../Atoms/Table/ProjectTable";

import requests from "../../api/requests";
import instance from "../../api/fetch";

export default function Main({ subTitle, cols, isAdmin }) {
    const [selectedDate, setSelectedDate] = useState(null);

    const [allProjects, setAllProjects] = useRecoilState(allProjectsState);
    const setProjects = useSetRecoilState(allProjectsState);

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

    let query = useQuery();
    const searchTerm = query.get("q");
    // console.log("searchTerm", searchTerm);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    // useEffect(() => {
    //     if (debouncedSearchTerm) {
    //         fetchGetAllProject(debouncedSearchTerm);
    //     }
    // }, [debouncedSearchTerm]);

    useEffect(() => {
        const fetchData = async () => {
            const all = await fetchGetAllProject();
            setProjects(all);
            console.log(all);
        };
        fetchData();
    }, []);

    const fetchGetAllProject = async (searchTerm) => {
        try {
            const request = await fetch(
                instance.baseURL + requests.fetchProjectList,
                {
                    method: "GET",
                    headers: {
                        "content-type": "application/json",
                        Authorization:
                            `Bearer ` + localStorage.getItem("login-token"),
                    },
                }
            );
            const response = await request.json();
            console.log(response);
            if (!response.ok) {
                console.log("API 요청 실패");
            }
            return response.projects;
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleSearch = (searchTerm) => {
        // 검색 단어랑 검색 날짜를 조합해서 검색
    };

    return (
        <div className="col-span-5 h-screen px-16 py-10 bg-gray-100 ">
            <SubNav subTitle={subTitle}></SubNav>
            {isAdmin && (
                <section className="relative z-10 flex bg-white drop-shadow-md items-center place-content-between h-16 mt-3 px-5 border border-slate-200 rounded">
                    <DatePick onChange={handleDateChange} />
                    <Search onChange={handleSearch} cols={cols} />
                </section>
            )}

            <div className="relative z-0">
                <ProjectTable cols={cols} isAdmin={isAdmin}></ProjectTable>
            </div>
        </div>
    );
}
