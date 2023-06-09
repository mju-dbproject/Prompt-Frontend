import React, { useState, useEffect } from "react";
import ButtonLists from "../../components/Atoms/Button/ButtonLists";
import EmployeeModal from "../../components/EmployeeModal";
import Header from "../../components/Molecules/Header/Header";
import Label from "../../components/Atoms/Label/Label";
import ShowTable from "../../components/Atoms/Table/ShowTable";

import Sidebar from "../../components/Molecules/Sidebar/Sidebar";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import {
    adminState,
    allManpowerEndState,
    allManpowerState,
    selectedEmployeesState,
} from "../../hooks/recoil/atoms";
import instance from "../../api/fetch";
import requests from "../../api/requests";

export default function ProjectDetailPage() {
    const [isAdmin, setIsAdmin] = useRecoilState(adminState);

    const [state, setState] = useState("");

    const [manpowerList, setManpowerList] = useRecoilState(allManpowerState);
    const [selectedEmployee, setSelectedEmployee] = useRecoilState(
        selectedEmployeesState
    );
    const [endManpowerList, setEndManpowerList] =
        useRecoilState(allManpowerEndState);

    const { id } = useParams();

    const role = isAdmin ? "경영인" : "직원";

    const cols = ["발주처명", "프로젝트명", "시작일자", "종료일자", "상태"];

    const [isEditing, setIsEditing] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const [detailProject, setDetailProject] = useState({
        name: "",
        description: "",
        client: "",
        startDate: "",
        budget: "",
        addEmployeeList: [],
        endManpowerList: [],
    });
    const handleValueChange = (e) => {
        setDetailProject({
            ...detailProject,
            [e.target.name]: e.target.value,
        });
    };

    const params = useParams();
    console.log("params : ", params);

    useEffect(() => {
        console.log({ id });

        const fetchData = async () => {
            const all = await fetchGetDetailProject();

            console.log("마지막 체크", detailProject);
        };
        fetchData();
    }, []);

    const fetchGetDetailProject = async () => {
        try {
            const request = await fetch(
                instance.baseURL + requests.fetchProjectDetail + `/${id}`,
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
            console.log("응답이왓소", response);
            if (response.status === "완료") {
                setState(3);
            }
            if (response.status === "준비") {
                setState(1);
            }
            if (response.status === "진행") {
                setState(2);
            }
            if (response.status === "취소") {
                setState(4);
            }
            setDetailProject(response);
            setManpowerList(response.manpowerList);
            setSelectedEmployee(response.manpowerList);
            setEndManpowerList([]);
            return response;
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleClick = () => {
        setModalOpen(true);
    };

    if (isEditing) {
        return (
            <div>
                <Header></Header>
                <div className="grid grid-cols-6 mx-auto">
                    <Sidebar className="col-span-1"></Sidebar>
                    <div className="bg-gray-100 col-span-5 h-screen px-20 pt-10 auto-rows-auto">
                        <div className="bg-white drop-shadow-md container w-5/6 h-5/6 mx-40 rounded border-2 border-slate-200 px-5 mb-20">
                            <div className="text-2xl font-medium pt-10 pb-4 text-start">
                                {detailProject.name}
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="grid grid-cols-1 gap-2 px-0">
                                    <div className="px-2 py-3">
                                        <Label value="상세 설명" />
                                        <input
                                            value={detailProject.name}
                                            onChange={handleValueChange}
                                            type="text"
                                            name="description"
                                            id="description"
                                            className="w-5/6 rounded-md border-0.5 border-gray-300  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                        ></input>{" "}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 pt-2 px-0">
                                    <div className="px-2 py-3">
                                        <Label value="발주처" />
                                        <input
                                            value={detailProject.client}
                                            onChange={handleValueChange}
                                            type="text"
                                            name="client"
                                            id="client"
                                            autocomplete="given-phone-number"
                                            className="w-3/5 ml-4 pl-1 rounded-md border-0.5 border-gray-300  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                        ></input>{" "}
                                    </div>

                                    <div className="px-2 py-3">
                                        <Label value="착수일자" />
                                        <span className="w-5/6 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {detailProject.startDate}
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-2 pt-3 px-0">
                                    <div className="px-2 py-3">
                                        <Label value="예산" />
                                        <input
                                            value={detailProject.budget}
                                            onChange={handleValueChange}
                                            type="text"
                                            name="description"
                                            id="description"
                                            className="w-5/6 ml-7 rounded-md border-0.5 border-gray-300  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                        ></input>{" "}
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-2 pt-3 px-0">
                                    <div className="px-2 py-2">
                                        <Label value="프로젝트 투입직원" />
                                        {isAdmin && (
                                            <button
                                                className="button rounded-md border border-gray-300 p-2 pr-2"
                                                onClick={handleClick}
                                            >
                                                직원 투입
                                            </button>
                                        )}
                                    </div>
                                    <ShowTable detailProject={detailProject} />
                                </div>
                            </div>

                            {isAdmin && (
                                <ButtonLists
                                    isEditing={isEditing}
                                    setIsEditing={setIsEditing}
                                    detailProject={detailProject}
                                />
                            )}
                        </div>
                    </div>
                </div>

                {modalOpen && (
                    <EmployeeModal
                        setModalOpen={setModalOpen}
                        cols={cols}
                        id={id}
                    />
                )}
            </div>
        );
    } else {
        return (
            <div>
                <Header></Header>
                <div className="grid grid-cols-6 mx-auto">
                    <Sidebar className="col-span-1"></Sidebar>
                    <div className="bg-gray-100 col-span-5 h-screen px-20 pt-10 auto-rows-auto">
                        <div className="bg-white drop-shadow-md container w-5/6 h-5/6 mx-40 rounded border-2 border-slate-200 px-5 mb-20">
                            <div className="text-2xl font-medium pt-10 pb-4 text-start">
                                {detailProject.name}
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="grid grid-cols-1 gap-2 pt-4 px-0">
                                    <div className="px-2 py-3">
                                        <Label value="상세 설명" />
                                        <span className="w-5/6 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {detailProject.description}
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 pt-2 px-0">
                                    <div className="px-2 py-3">
                                        <Label value="발주처" />
                                        <span className="w-5/6 ml-4 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {detailProject.client}
                                        </span>
                                    </div>

                                    <div className="px-2 py-3">
                                        <Label value="착수일자" />
                                        <span className="w-5/6 ml-4 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {detailProject.startDate}
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-2 pt-3 px-0">
                                    <div className="px-2 py-3">
                                        <Label value="예산" />
                                        <span className="w-5/6 ml-7 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ml-2">
                                            {detailProject.budget}원
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-2 pt-3 px-0">
                                    <div className="px-2 py-2">
                                        <Label value="프로젝트 투입직원" />
                                        {isAdmin && (
                                            <button
                                                className="button rounded-md border border-gray-300 p-2 pr-2"
                                                onClick={handleClick}
                                            >
                                                직원 투입
                                            </button>
                                        )}
                                    </div>

                                    <ShowTable detailProject={detailProject} />
                                </div>
                            </div>
                            {isAdmin && (
                                <ButtonLists
                                    isEditing={isEditing}
                                    setIsEditing={setIsEditing}
                                    detailProject={detailProject}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
