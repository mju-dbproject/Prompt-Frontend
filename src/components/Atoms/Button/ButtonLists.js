import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import instance from "../../../api/fetch";
import posts from "../../../api/posts";
import { selectedEmployeesState } from "../../../hooks/recoil/atoms";

export default function ButtonLists({
    isEditing,
    setIsEditing,
    detailProject,
}) {
    const value = isEditing ? "저장하기" : "수정하기";
    const navigate = useNavigate();

    const [sendProject, setSendProject] = useState({
        name: "",
        client: "",
        budget: "",
        description: "",
        addEmployeeList: [],
        endManpowerList: [],
    });

    const [selectedEmployee, setSelectedEmployee] = useRecoilState(
        selectedEmployeesState
    );

    const handleClick = () => {
        if (isEditing) {
        } else {
            alert("프로젝트를 종료시킵니다.");
        }
    };

    const handleCancel = () => {
        alert("프로젝트를 취소시킵니다.");
    };

    const handleSave = () => {
        if (isEditing && window.confirm("저장하시겠습니까?")) {
            alert("저장되었습니다!");
            navigate("/manager");
            detailProject.addEmployeeList = selectedEmployee.map(
                (emp, index) => ({
                    id: emp.id,
                    task: emp.task,
                })
            );

            console.log("마지막 확인하겠습니다", detailProject);
            console.log({
                id: detailProject.id,
                name: detailProject.name,
                client: detailProject.client,
                budget: detailProject.budget,
                description: detailProject.description,
                addEmployeeList: detailProject.addEmployeeList,
                endManpowerList: detailProject.endManpowerList,
            });
            fetchProjectEdit();
        }
        setIsEditing(!isEditing);
    };

    const fetchProjectEdit = async () => {
        try {
            const request = await fetch(
                instance.baseURL +
                    posts.fetchProjectEdit +
                    `/${detailProject.id}`,
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        Authorization:
                            `Bearer ` + localStorage.getItem("login-token"),
                    },
                    body: JSON.stringify({
                        name: detailProject.name,
                        client: detailProject.client,
                        budget: detailProject.budget,
                        description: detailProject.description,
                        addEmployeeList: detailProject.addEmployeeList,
                        endManpowerList: detailProject.endManpowerList,
                    }),
                }
            );
            const response = await request;
            console.log(response);
            // console.log({
            //     name: detailProject.name,
            //     client: detailProject.client,
            //     budget: detailProject.budget,
            //     description: detailProject.description,
            //     addEmployeeList: detailProject.addEmployeeList,
            //     endManpowerList: detailProject.endManpowerList,
            // });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="mt-7 flex justify-between">
            <div className="flex">
                <button
                    type="submit"
                    className={
                        (isEditing
                            ? "bg-sub-color hover:bg-main-color"
                            : "bg-blue-200 hover:bg-blue-color") +
                        "w-fit mr-3 rounded-md px-3 py-2 text-white text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    }
                    disabled={!isEditing}
                    onClick={() => {
                        alert("프로젝트를 착수시킵니다.");
                    }}
                >
                    프로젝트 착수
                </button>
                <button
                    type="submit"
                    className={
                        (isEditing
                            ? "bg-sub-color hover:bg-main-color"
                            : "bg-blue-200 hover:bg-blue-color") +
                        "w-fit mr-3 rounded-md px-3 py-2 text-white text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    }
                    disabled={!isEditing}
                    onClick={() => {
                        alert("프로젝트를 종료시킵니다.");
                    }}
                >
                    프로젝트 종료
                </button>
                <button
                    type="submit"
                    className={
                        (isEditing
                            ? "bg-sub-color hover:bg-main-color"
                            : "bg-blue-200 hover:bg-blue-color") +
                        "w-fit rounded-md px-3 py-2 text-white text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    }
                    disabled={!isEditing}
                    onClick={() => {
                        alert("프로젝트를 취소시킵니다.");
                    }}
                >
                    프로젝트 취소
                </button>
            </div>

            <button
                type="submit"
                className="w-fit justify-center rounded-md bg-sub-color px-5 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSave}
            >
                {value}
            </button>
        </div>
    );
}
