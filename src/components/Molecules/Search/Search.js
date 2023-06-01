import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useLocation } from "react-router";

import "./Search.css";
import { useRecoilState } from "recoil";
import {
    allEmployeesState,
    allProjectsState,
    projectStatusState,
    setSendEndState,
    setSendStartState,
} from "../../../hooks/recoil/atoms";
import { useSearchParams } from "react-router-dom";
import instance from "../../../api/fetch";
import requests from "../../../api/requests";

export default function Search({ cols }) {
    const [searchCondition, setSearchCondition] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const [status, setStatus] = useRecoilState(projectStatusState);

    const [type, setType] = useState("");
    const [typeList, setTypeList] = useState([
        "employeeNumber",
        "name",
        "skill",
        "rank",
    ]);

    const [searchClientParams, setSearchClientParams] = useSearchParams({
        status: status,
        client: searchTerm,
    });

    const [searchNameParams, setSearchNameParams] = useSearchParams({
        status: status,
        name: searchTerm,
    });

    const [searchEmployeeParams, setSearchEmployeeParams] = useSearchParams({
        type: type,
        keyword: searchTerm,
    });

    const location = useLocation();
    const now = location.pathname.split("/");
    const path = now[2];

    // console.log(location.pathname);

    const [sendStart, setSendStart] = useRecoilState(setSendStartState);
    const [sendEnd, setSendEnd] = useRecoilState(setSendEndState);

    const [allEmployees, setAllEmployees] = useRecoilState(allEmployeesState);
    const [allProjects, setAllProjects] = useRecoilState(allProjectsState);

    useEffect(() => {
        if (path === "projectList") {
            setTypeList(["client", "name"]);
        }
        // console.log("searchCondition", searchCondition);
        // console.log("searchTerm", searchTerm);
        // console.log("types", typeList[0]);
    }, []);

    const handleSearch = () => {
        searchClientParams.set("status", status);

        if (path === "projectList") {
            if (type === "client") {
                fetchProjectClientSearch();
            } else {
                fetchProjectNameSearch();
            }
        }
        if (path === "employeeList") {
            fetchEmployeeSearch();
        }

        if (sendStart !== null) {
            fetchProjectDateSearch();
        }
    };

    const fetchProjectClientSearch = async () => {
        try {
            const url = `${instance.baseURL}${
                requests.fetchProjectList
            }?status=${status}&client=${searchClientParams.get("client")}`;

            const request = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        `Bearer ` + localStorage.getItem("login-token"),
                },
            });
            const response = await request.json();
            // console.log("제대루 되냐", url);
            setAllProjects(response.projectList);
            // console.log("왔다 장보리", response.projectList);
        } catch (error) {
            console.log(error);
        }
    };
    const fetchProjectNameSearch = async () => {
        try {
            const url = `${instance.baseURL}${
                requests.fetchProjectList
            }?status=${status}&name=${searchNameParams.get("name")}`;

            const request = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        `Bearer ` + localStorage.getItem("login-token"),
                },
            });
            const response = await request.json();
            console.log("제대루 되냐", url);
            setAllProjects(response.projectList);
            console.log("왔다 장보리", response.projectList);
        } catch (error) {
            console.log(error);
        }
    };
    const fetchEmployeeSearch = async () => {
        try {
            setSearchEmployeeParams(searchEmployeeParams);
            const url = `${instance.baseURL}${
                requests.fetchEmployeeSearch
            }?type=${searchEmployeeParams.get(
                "type"
            )}&keyword=${searchEmployeeParams.get("keyword")}`;
            const request = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        `Bearer ` + localStorage.getItem("login-token"),
                },
            });
            const response = await request.json();
            setAllEmployees(response.employees);
            // console.log("왔다 직원", response.employees);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchProjectDateSearch = async () => {
        try {
            const request = await fetch(
                instance.baseURL +
                    requests.fetchProjectList +
                    `?status=${searchClientParams.get(
                        "status"
                    )}&startDate=${sendStart}&endDate=${sendEnd}`,
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
            setAllProjects(response.projectList);
            // return response.projectList;
            // console.log("sdfsdfsdf", response);
            // console.log("날짜 응답 왔다", response);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="search">
            <select
                onChange={(e) => {
                    setSearchCondition(e.target.value);
                    searchEmployeeParams.set(
                        "type",
                        e.target.options[e.target.selectedIndex].getAttribute(
                            "name"
                        )
                    );
                    setType(
                        e.target.options[e.target.selectedIndex].getAttribute(
                            "name"
                        )
                    );
                }}
                placeholder="검색조건"
                className="p-1 rounded border-2 border-sub-color flex-1/2"
            >
                <option>-- 선택 --</option>
                {cols.map((col, index) => (
                    <option key={index} name={typeList[index]}>
                        {col}
                    </option>
                ))}
            </select>

            <input
                onChange={(e) => {
                    searchClientParams.set("client", e.target.value);
                    searchNameParams.set("name", e.target.value);

                    searchEmployeeParams.set("keyword", e.target.value);
                }}
                className="mx-3 p-0.5 rounded border-2 border-sub-color flex-1"
                type="text"
            ></input>
            <button onClick={handleSearch}>
                <FontAwesomeIcon
                    className="search-icon"
                    icon={faMagnifyingGlass}
                />
            </button>
        </div>
    );
}
