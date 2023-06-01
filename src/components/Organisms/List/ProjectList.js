import React, { useEffect, useState } from "react";
import Header from "../../Molecules/Header/Header";
import Main from "../../Organisms/Main";
import Sidebar from "../../Molecules/Sidebar/Sidebar";
import instance from "../../../api/fetch";
import requests from "../../../api/requests";
import { useRecoilState } from "recoil";
import { adminState } from "../../../hooks/recoil/atoms";
import ManagerMain from "../ManagerMain";

export default function ProjectList() {
    const [subTitle, setSubTitle] = useState([
        { title: "전체", total: "", name: "all", searchTerm: 0 },
        { title: "준비", total: "", name: "ready", searchTerm: 1 },
        { title: "진행", total: "", name: "progress", searchTerm: 2 },
        { title: "완료", total: "", name: "finish", searchTerm: 3 },
        { title: "취소", total: "", name: "delete", searchTerm: 4 },
    ]);
    const [employeeTitle, setEmployeeTItle] = useState([
        { title: "전체", total: "", name: "all" },
        { title: "진행", total: "", name: "progress" },
        { title: "완료", total: "", name: "finish" },
    ]);

    const [isAdmin, setIsAdmin] = useRecoilState(adminState);
    useEffect(() => {
        const fetchData = async () => {
            if (isAdmin) {
                const projectCount = await fetchProjectCount();
                setSubTitle((prevSubTitle) =>
                    prevSubTitle.map((item, index) => ({
                        ...item,
                        total: projectCount[item.name],
                    }))
                );
            } else {
                const projectCount = await fetchProjectCount();
                setEmployeeTItle((prevSubTitle) =>
                    prevSubTitle.map((item, index) => ({
                        ...item,
                        total: projectCount[item.name],
                    }))
                );
            }
        };
        fetchData();
    }, []);

    const fetchProjectCount = async () => {
        try {
            const request = await fetch(
                instance.baseURL + requests.fetchProjectCount,
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
            return response;
        } catch (error) {
            console.log("error is", error);
        }
    };

    const cols = ["발주처명", "프로젝트명"];

    return (
        <div>
            <Header></Header>

            <div className="grid grid-cols-6 mx-auto">
                <Sidebar className="col-span-1"></Sidebar>
                {isAdmin && (
                    <ManagerMain
                        subTitle={subTitle}
                        employeeTitle={employeeTitle}
                        cols={cols}
                    ></ManagerMain>
                )}
                {!isAdmin && (
                    <Main
                        subTitle={subTitle}
                        employeeTitle={employeeTitle}
                        cols={cols}
                    ></Main>
                )}
            </div>
        </div>
    );
}
