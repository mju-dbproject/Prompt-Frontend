import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import instance from "../../../api/fetch";
import requests from "../../../api/requests";
import {
    allProjectsState,
    projectStatusState,
} from "../../../hooks/recoil/atoms";

export default function EmployeePjNav() {
    const [employeeTitle, setEmployeeTItle] = useState([
        { title: "전체", total: "", name: "all", searchTerm: 0 },
        { title: "진행", total: "", name: "progress", searchTerm: 2 },
        { title: "완료", total: "", name: "finish", searchTerm: 3 },
    ]);

    const [activeIndex, setActiveIndex] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams({
        status: "0",
    });

    const [status, setStatus] = useRecoilState(projectStatusState);

    const [allProjects, setAllProjects] = useRecoilState(allProjectsState);
    useEffect(() => {
        console.log("status", status);
        const fetchData = async () => {
            const searchTerm = searchParams.get("status");

            const count = await fetchEmployeeProjectCount();
            setEmployeeTItle((prevSubTitle) =>
                prevSubTitle.map((item, index) => ({
                    ...item,
                    total: count[item.name],
                }))
            );
            const projects = await fetchGetAllProjectType(searchTerm);
            setAllProjects(projects);
            // setAllProjects(data);
            // setSelectedEmployee([]);
            // console.log(allEmployees);
        };
        fetchData();
    }, [searchParams]);

    const handleButtonClick = async (sub, index) => {
        // const searchTerm = searchParams.get("status");
        // Create the query parameter string
        // if (sub.title === "전체") {
        //     const all = await fetchEmployeeProjectList();
        //     setAllProjects(all);
        // } else {
        //     const all = await fetchGetAllProjectType(sub.searchTerm);
        //     setAllProjects(all);
        // }

        setActiveIndex(index);
        setStatus(sub.searchTerm);
        setSearchParams({ status: sub.searchTerm });
    };

    const fetchEmployeeProjectCount = async () => {
        try {
            const request = await fetch(
                instance.baseURL + requests.fetchEmployeeProjectCount,
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
            console.log(response, "제대로 오는가 개수가..");
            return response;
        } catch (error) {
            console.log("error is", error);
        }
    };

    const fetchGetAllProjectType = async (searchTerm) => {
        try {
            const request = await fetch(
                instance.baseURL +
                    requests.fetchEmployeeProjectList +
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

    const fetchEmployeeProjectList = async () => {
        try {
            const request = await fetch(
                instance.baseURL + requests.fetchEmployeeProjectList,
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
            return response.projectList;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="subNav bg-white w-6/7 grid grid-cols-5 border border-gray-300 drop-shadow-md rounded pl-7">
            {employeeTitle.map((sub, index) => (
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
