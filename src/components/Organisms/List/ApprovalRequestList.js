import React, { useState } from "react";

export default function ApprovalRequestList() {
    const [approvedEmployees, setApprovedEmployees] = useState([
        {
            id: "1",
            name: "홍길동",
        },
        {
            id: "2",
            name: "힝그리",
        },
        {
            id: "3",
            name: "양유유",
        },
        {
            id: "4",
            name: "김여름",
        },
    ]);
    const [isHidden, setIshidden] = useState(false);

    const handleApprove = (emp, name) => {
        const approve = name === "approve" ? true : false;
        if (approve && window.confirm("승인하시겠습니까?")) {
            alert("승인하였습니다.");
        } else {
            alert("승인 취소합니다.");
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
            <section className="bg-white drop-shadow-md items-center place-content-between h-16 mt-3 px-5 border border-slate-200 rounded h-1/2 overflow-y-auto">
                <div className="divide-y divide-gray-200">
                    <div className="grid grid-cols-1 gap-2 pt-4">
                        {approvedEmployees.map((emp, index) => {
                            return (
                                <div className="flex" key={index}>
                                    <div>
                                        {emp.name}님이 회원가입 요청을
                                        보냈습니다.
                                    </div>
                                    <div className="justify-end">
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
