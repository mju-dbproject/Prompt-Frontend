import React, { useEffect, useState } from "react";

import EmployeeTable from "../../Atoms/Table/EmployeeTable";
import Header from "../../Molecules/Header/Header";
import ApprovalRequestList from "../../Organisms/List/ApprovalRequestList";

import Search from "../../Molecules/Search/Search";
import Sidebar from "../../Molecules/Sidebar/Sidebar";
import EmployeeSubNav from "../../Molecules/EmployeeSubNav/EmployeeSubNav";
import { useRecoilState } from "recoil";
import { adminState, allEmployeesState } from "../../../hooks/recoil/atoms";
import requests from "../../../api/requests";
import instance from "../../../api/fetch";

export default function EmployeeList() {
    const [isAdmin, setIsAdmin] = useRecoilState(adminState);
    const [allEmployees, setAllEmployees] = useRecoilState(allEmployeesState);

    const cols = ["사번", "이름", "스킬", "직급"];
    const handleSearch = (searchTerm) => {
        //
    };

    const [empTitle, setEmpTitle] = useState([
        { title: "전체", total: "", name: "all" },
        { title: "개발자", total: "", name: "developer" },
        { title: "기타", total: "", name: "noDeveloper" },
    ]);

    useEffect(() => {
        const fetchData = async () => {
            // const employeeCount = await fetchEmployeeCount();
            // setEmpTitle((prevSubTitle) =>
            //     prevSubTitle.map((item, index) => ({
            //         ...item,
            //         total: employeeCount[item.name],
            //     }))
            // );
            const allEmployees = await fetchGetAllEmployee();
            setAllEmployees(allEmployees);
        };
        fetchData();
    }, []);
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
            console.log(response, "sdfwsdfsdf");
            console.log("다 오는지", response.employees);
            // setAllEmployees(response.employees);
            return response.employees;
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <div>
            <Header></Header>

            <div className="grid grid-cols-6 mx-auto">
                <Sidebar className="col-span-1"></Sidebar>

                <div className="col-span-5 h-screen px-16 py-10 bg-gray-100 ">
                    <EmployeeSubNav subTitle={empTitle}></EmployeeSubNav>
                    <section className="flex justify-end bg-white drop-shadow-md items-center place-content-between h-16 mt-3 px-5 border border-slate-200 rounded">
                        <Search onChange={handleSearch} cols={cols} />
                    </section>
                    <ApprovalRequestList />
                    <div>
                        <EmployeeTable cols={cols} />
                    </div>
                </div>
            </div>
        </div>
    );
}
