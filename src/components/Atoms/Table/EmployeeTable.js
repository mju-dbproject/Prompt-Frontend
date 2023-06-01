import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import instance from "../../../api/fetch";
import posts from "../../../api/posts";
import requests from "../../../api/requests";
import { allEmployeesState } from "../../../hooks/recoil/atoms";

export default function EmployeeTable() {
    const [allEmployees, setAllEmployees] = useRecoilState(allEmployeesState);
    const navigate = useNavigate();
    const cols = ["사번", "이름", "스킬", "직급", "권한"];
    const [id, setId] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const allEmployees = await fetchGetAllEmployee();
            setAllEmployees(allEmployees);
            console.log(allEmployees);
            console.log("제대로 렌더링 되는지", allEmployees);
        };
        fetchData();
    }, []);

    const handlePromotion = (id) => {
        if (window.confirm("권한 변경하시겠습니까?")) {
            alert("변경되었습니다");
            fetchEmployeePromotion({ id });
        }
        console.log("아이디", id);
    };

    const handleDetail = (id) => {};

    const fetchEmployeePromotion = async (id) => {
        try {
            const request = await fetch(
                instance.baseURL + posts.fetchEmployeePromotion,
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        Authorization:
                            `Bearer ` + localStorage.getItem("login-token"),
                    },
                    body: JSON.stringify(id),
                }
            );
        } catch (error) {
            console.log(error);
        }
    };

    const handleClick = (e, row, id) => {
        e.preventDefault();
        // console.log("이거슨 아이디여,,", id);
        const tdArr = Array.from(row.cells).map((td) => td.textContent);
        console.log("클릭한 Row의 모든 데이터: ", tdArr);

        const newEmployee = {
            employeeNumber: tdArr[0],
            name: tdArr[1],
            skill: tdArr[2],
            rank: tdArr[3],
            role: tdArr[4],
        };
        console.log("가져와주나", newEmployee);
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
            console.log("다 오는지", response);
            // console.log("respnose", response);
            setAllEmployees(response.employees);
            return response.employees;
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <div className="flex flex-col h-max-screen">
            <section className="w-6/7 px-4 border border-slate-200 bg-white rounded p-3 mt-3 drop-shadow-md h-96 overflow-y-auto ">
                <table className="table-auto w-full whitespace-nowrap">
                    <thead>
                        <tr className="border-b-2 border-sub-color">
                            {cols.map((cols, index) => (
                                <th key={index}>{cols}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {allEmployees.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee.employeeNumber}</td>
                                <td>{employee.name}</td>
                                <td>{employee.skill}</td>
                                <td>{employee.rank}</td>
                                <td>{employee.role}</td>

                                <button
                                    className="button rounded-md border border-zinc-300 px-2 py-1.5 mr-3 my-1"
                                    onClick={() => {
                                        handlePromotion(employee.id);
                                    }}
                                >
                                    권한변경
                                </button>
                                <Link
                                    to={`/manager/employeeList/${employee.id}`}
                                    className="text-black"
                                    id={employee.id}
                                >
                                    <button
                                        className="button rounded-md border border-zinc-300 px-2 py-1.5  mr-2 my-1"
                                        onClick={handleDetail}
                                    >
                                        상세보기
                                    </button>
                                </Link>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
