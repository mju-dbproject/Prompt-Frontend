import React, { useState, useEffect } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import instance from "../../../api/fetch";
import requests from "../../../api/requests";
import {
    adminState,
    allProjectsState,
    projectStatusState,
} from "../../../hooks/recoil/atoms";
import "./SubNav.css";

export default function SubNav({ subTitle, employeeTitle, emp }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams({
        status: "0",
    });
    const [isAdmin, setIsAdmin] = useRecoilState(adminState);

    const [status, setStatus] = useRecoilState(projectStatusState);

    const [allProjects, setAllProjects] = useRecoilState(allProjectsState);

    useEffect(() => {
        const fetchData = async () => {
            const searchTerm = searchParams.get("status");
            if (isAdmin) {
                const data = await fetchGetAllProjectType(searchTerm);
            }
        };
        fetchData();
    }, [searchParams]);

    const handleButtonClick = async (sub, index) => {
        // Create the query parameter string

        setActiveIndex(index);
        setStatus(sub.searchTerm);
        setSearchParams({ status: sub.searchTerm });
    };

    const fetchGetAllProjectType = async (searchTerm) => {
        try {
            const request = await fetch(
                instance.baseURL +
                    requests.fetchProjectList +
                    `?status=${searchTerm}`,
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
            console.log("응답 왔음", response);
            setAllProjects(response.projectList);
            // console.log(allProjects);
            // console.log("특정 검색 결과",);
            return response.projectList;
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <section className="subNav bg-white w-6/7 grid grid-cols-5 border border-gray-300 drop-shadow-md rounded pl-7">
            {subTitle.map((sub, index) => (
                <button
                    key={index}
                    className={
                        " bg-sub-color " +
                        (index === activeIndex ? "activeBtn" : "") +
                        " my-3 py-2.5 mr-5 rounded "
                    }
                    onClick={() => handleButtonClick(sub, index)}
                >
                    <div className="text-left pl-4 mt-0.5 text-white text-medium">
                        {sub.title}
                    </div>
                    <div className="text-2xl text-end mr-5 text-slate-50">
                        {sub.total}건
                    </div>
                </button>
            ))}
        </section>
    );
}
