import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import instance from "../../../api/fetch";
import requests from "../../../api/requests";
import { allEmployeesState } from "../../../hooks/recoil/atoms";
import "../Subnav/SubNav.css";

export default function EmployeeSubNav({ subTitle, isAdmin }) {
    const [empTitle, setEmpTitle] = useState([
        { title: "전체", total: "", name: "all" },
        { title: "개발자", total: "", name: "developer" },
        { title: "기타", total: "", name: "noDeveloper" },
    ]);
    const [activeIndex, setActiveIndex] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams({
        status: "0",
    });

    const [allEmployees, setAllEmployees] = useRecoilState(allEmployeesState);

    useEffect(() => {
        const fetchData = async () => {
            const count = await fetchEmployeeCount();
            setEmpTitle((prevSubTitle) =>
                prevSubTitle.map((item, index) => ({
                    ...item,
                    total: count[item.name],
                }))
            );
            const employees = await fetchGetAllEmployee();
            setAllEmployees(employees);
            // setAllProjects(data);
            // setSelectedEmployee([]);
            // console.log(allEmployees);
        };
        fetchData();
    }, []);

    const fetchEmployeeCount = async () => {
        try {
            const request = await fetch(
                instance.baseURL + requests.fetchEmployeeCount,
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

    const handleButtonClick = async (sub, index) => {
        // Create the query parameter string
        if (sub.title === "개발자") {
            const all = await fetchEmployeeDeveloper();
            setAllEmployees(all);
        }
        if (sub.title === "기타") {
            const all = await fetchEmployeeElse();
            setAllEmployees(all);
        }
        if (sub.title === "전체") {
            const all = await fetchGetAllEmployee();
            setAllEmployees(all);
        }
        setActiveIndex(index);

        setSearchParams({ status: sub.searchTerm });
    };
    const fetchGetAllEmployee = async () => {
        try {
            const request = await fetch(
                instance.baseURL + requests.fetchEmployeeList,
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
            console.log("sdf", response);
            setAllEmployees(response.employees);
            return response.employees;
        } catch (error) {
            console.log("error", error);
        }
    };

    const fetchEmployeeDeveloper = async () => {
        try {
            const request = await fetch(
                instance.baseURL + requests.fetchEmployeeDeveloper,
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
            console.log("개발자", response.employees);
            setAllEmployees(response.employees);
            return response.employees;
        } catch (error) {
            console.log("error", error);
        }
    };
    const fetchEmployeeElse = async () => {
        try {
            const request = await fetch(
                instance.baseURL + requests.fetchEmployeeElse,
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
            console.log("기타", response.employees);
            setAllEmployees(response.employees);
            return response.employees;
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <section className="subNav bg-white w-6/7 grid grid-cols-5 border border-gray-300 drop-shadow-md rounded pl-7">
            {empTitle.map((sub, index) => (
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
