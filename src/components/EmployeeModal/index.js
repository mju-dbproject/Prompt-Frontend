import React, { useRef, useState, useEffect } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import "./EmployeeModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ModalTable from "../Atoms/Table/ModalTable";
import {
    allEmployeesState,
    allNewAddEmployeeState,
    searchState,
    selectedEmployeesState,
} from "../../hooks/recoil/atoms";
import { useRecoilState } from "recoil";
import instance from "../../api/fetch";
import requests from "../../api/requests";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router";

export default function EmployeeModal({ setModalOpen, id }) {
    const ref = useRef();
    useOnClickOutside(ref, () => {
        setModalOpen(false);
    });

    const [newAddEmployee, setNewAddEmployee] = useRecoilState(
        allNewAddEmployeeState
    );

    useEffect(() => {
        console.log("현재경로", path);
        const fetchData = async () => {
            if (path === "project") {
                const allEmployees = await fetchManpowerPossibleListEdit();
                setAllEmployees(allEmployees);
                setNewAddEmployee([]);
            }
            if (path === "newProject") {
                const allEmployees = await fetchManpowerPossibleListNew();
                setAllEmployees(allEmployees);
                console.log("데이터는 오는감 ?", allEmployees);
                setNewAddEmployee([]);
            }
        };
        fetchData();
    }, []);

    const [searching, setSearching] = useRecoilState(searchState);
    const [selectedEmployees, setSelectedEmployees] = useRecoilState(
        selectedEmployeesState
    );

    const [type, setType] = useState("");

    const [typeList, setTypeList] = useState([
        "employeeNumber",
        "name",
        "skill",
        "rank",
    ]);

    const [searchTerm, setSearchTerm] = useState("");

    const [searchEmployeeParams, setSearchEmployeeParams] = useSearchParams({
        type: type,
        keyword: searchTerm,
    });

    const [allEmployees, setAllEmployees] = useRecoilState(allEmployeesState);

    const location = useLocation();
    const now = location.pathname.split("/");
    const path = now[2];
    console.log(id);

    const fetchManpowerPossibleListEdit = async () => {
        try {
            const request = await fetch(
                instance.baseURL +
                    requests.fetchManpowerPossibleListEdit +
                    `/${id}`,
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
            console.log("응답 옴", response);
            return response.employees;
        } catch (error) {
            console.log("error", error);
        }
    };

    const fetchManpowerPossibleListNew = async () => {
        try {
            const request = await fetch(
                instance.baseURL + requests.fetchManpowerPossibleListNew,
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
            console.log("응답이 제대로 왔나?", response);
            return response.employees;
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleSelectedEmployee = (employee) => {
        setSelectedEmployees((prev) => [...prev, employee]);
        console.log(selectedEmployees);
        // onEmployeeSelect(updatedSelectedEmployee);
    };

    const tasks = ["사번", "이름", "스킬", "직급", "포지션"];
    const [task, setTask] = useState("");

    const handleSearch = () => {
        fetchManpowerSearch();
    };

    const fetchManpowerSearch = async () => {
        try {
            const request = await fetch(
                instance.baseURL +
                    requests.fetchManpowerSearch +
                    `?type=${searchEmployeeParams.get(
                        "type"
                    )}&keyword=${searchEmployeeParams.get("keyword")}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization:
                            `Bearer ` + localStorage.getItem("login-token"),
                    },
                }
            );
            const response = await request.json();
            console.log("응답왔숑!!!!!!!!!!", response.employees);
            setAllEmployees(response.employees);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="presentation">
            <div className="wrapper-modal">
                <div className="modal flex" ref={ref}>
                    <div className="px-5 mt-3 flex justify-between">
                        <div className="text-2xl font-medium mt-4">
                            직원 검색
                        </div>
                        <div
                            onClick={() => setModalOpen(false)}
                            className="modal-close"
                        >
                            X
                        </div>
                    </div>

                    <div className="flex justify-end mr-10">
                        <select
                            onChange={(e) => {
                                searchEmployeeParams.set(
                                    "type",
                                    e.target.options[
                                        e.target.selectedIndex
                                    ].getAttribute("name")
                                );
                            }}
                            className="px-2 mt-2 rounded-md border-1.5 border-gray-300 py-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            id="type"
                            name="type"
                        >
                            {tasks.map((item, index) => (
                                <option
                                    value={item}
                                    key={index}
                                    name={typeList[index]}
                                >
                                    {item}
                                </option>
                            ))}
                        </select>
                        <input
                            onChange={(e) => {
                                searchEmployeeParams.set(
                                    "keyword",
                                    e.target.value
                                );
                            }}
                            type="text"
                            name="search"
                            id="search"
                            className="w-40 ml-3 px-2 mt-2 rounded-md border-0.5 border-gray-300  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                        ></input>{" "}
                        <button>
                            <FontAwesomeIcon
                                className="ml-2 mt-3"
                                icon={faMagnifyingGlass}
                                onClick={handleSearch}
                            />
                        </button>
                    </div>
                    <ModalTable
                        allEmployees={allEmployees}
                        setAllEmployees={setAllEmployees}
                        selectedEmployees={selectedEmployees}
                        setSelectedEmployees={setSelectedEmployees}
                        onEmployeeSelect={handleSelectedEmployee}
                        id={id}
                    />
                </div>
            </div>
        </div>
    );
}
