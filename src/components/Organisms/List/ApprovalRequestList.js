import React, { useState } from "react";

export default function ApprovalRequestList() {
    const employees = ["홍길동", "힝그리", "양유유", "김여름"];
    const [approvedEmployees, setApprovedEmployees] = useState([]);
    const [isHidden, setIshidden] = useState(false);

    const handleApprove = (name) => {
        const approve = name === "approve";
        if (approve && window.confirm("승인하시겠습니까?")) {
            setApprovedEmployees((prevEmployees) => [...prevEmployees, name]);
        } else {
            alert("승인 취소합니다.");
        }
    };

    const handleHideEmployee = (name) => {
        setApprovedEmployees((prevEmployees) =>
            prevEmployees.filter((emp) => emp !== name)
        );
    };

    return (
        <div className="block">
            <section className="bg-white drop-shadow-md items-center place-content-between h-16 mt-3 px-5 border border-slate-200 rounded h-1/2 overflow-y-auto">
                <div className="divide-y divide-gray-200">
                    <div className="grid grid-cols-1 gap-2 pt-4">
                        {employees.map((emp, index) => {
                            if (!approvedEmployees.includes(emp)) {
                                return (
                                    <div className="flex" key={index}>
                                        <div>
                                            {emp}님이 회원가입 요청을
                                            보냈습니다.
                                        </div>
                                        <div className="justify-end">
                                            <button
                                                className="button rounded-md border border-zinc-300 px-2 py-1.5 pr-2 mr-3 my-1"
                                                onClick={() =>
                                                    handleApprove({ emp })
                                                }
                                            >
                                                승인
                                            </button>
                                            <button
                                                name="notApprove"
                                                className="button rounded-md border border-zinc-300 px-2 py-1.5 pr-2 mr-3 my-1"
                                                onClick={() =>
                                                    handleHideEmployee({ emp })
                                                }
                                            >
                                                미승인
                                            </button>
                                        </div>
                                    </div>
                                );
                            }
                            return null; // 승인된 직원은 숨김
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
