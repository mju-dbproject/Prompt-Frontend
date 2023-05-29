import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import instance from "../../../api/fetch";
import posts from "../../../api/posts";
import requests from "../../../api/requests";
import { approvalEmployeeState } from "../../../hooks/recoil/atoms";

export default function ApprovalRequestList() {
    const [approvedEmployees, setApprovedEmployees] = useRecoilState(
        approvalEmployeeState
    );
    const [approveId, setApproveId] = useState([
        {
            approveId: "",
        },
    ]);
    const [rejectId, setRejectId] = useState([
        {
            rejectId: "",
        },
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const all = await fetchUserApproval();
        };
        fetchData();
    }, []);

    const fetchUserApprovalDelete = async () => {
        try {
            const request = await fetch(
                instance.baseURL + posts.fetchUserApprove,
                {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json",
                        Authorization:
                            `Bearer ` + localStorage.getItem("login-token"),
                    },
                    body: JSON.stringify(rejectId),
                }
            );
            const response = await request;
            console.log("전송완료", response);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchUserApprovalPost = async () => {
        try {
            const request = await fetch(
                instance.baseURL + posts.fetchUserApprove,
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        Authorization:
                            `Bearer ` + localStorage.getItem("login-token"),
                    },
                    body: JSON.stringify(approveId),
                }
            );
            const response = await request;
            console.log("전송완료", response);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchUserApproval = async () => {
        try {
            const request = await fetch(
                instance.baseURL + requests.fetchUserApprove,
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
            console.log("히히", response.approvalList);
            setApprovedEmployees(response.approvalList);
        } catch (error) {
            console.log(error);
        }
    };

    const handleApprove = (emp, name) => {
        const approve = name === "approve" ? true : false;
        if (approve && window.confirm("승인하시겠습니까?")) {
            alert("승인하였습니다.");
            setApproveId(emp);
            fetchUserApprovalPost();
        } else {
            alert("승인 취소합니다.");
            setRejectId(emp);
            fetchUserApprovalDelete();
        }
        handleHideEmployee(emp);
    };

    const handleHideEmployee = (emp) => {
        let newApprove = approvedEmployees.filter(
            (employee) => employee.id !== emp
        );
        console.log("update", newApprove);
        setApprovedEmployees(newApprove);
    };

    return (
        <div className="block">
            <section className="bg-white drop-shadow-md items-center place-content-between h-16 mt-3 px-5 border border-slate-200 rounded overflow-y-auto">
                <div className="divide-y divide-gray-200">
                    <div className="grid grid-cols-1 gap-2 pt-2.5">
                        {approvedEmployees.map((emp, index) => {
                            return (
                                <div
                                    className="flex items-center justify-between"
                                    key={index}
                                >
                                    <div>
                                        {emp.name}님이 회원가입 요청을
                                        보냈습니다.
                                    </div>

                                    <div className="items-end">
                                        <button
                                            className="button rounded-md border border-zinc-300 px-2 py-1.5 pr-2 mr-3 my-1"
                                            onClick={() =>
                                                handleApprove(emp.id, "approve")
                                            }
                                        >
                                            승인
                                        </button>
                                        <button
                                            className="button rounded-md border border-zinc-300 px-2 py-1.5 pr-2 mr-3 my-1"
                                            onClick={() =>
                                                handleApprove(
                                                    emp.id,
                                                    "notApprove"
                                                )
                                            }
                                        >
                                            미승인
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
