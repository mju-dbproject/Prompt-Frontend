import React, { useState } from "react";
import DetailEvaluation from "../../components/DetailEvaluation";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function EvaluationPage() {
    const admin = "manager";

    const role = admin === "manager" ? "경영인" : "직원";

    const pjs = ["신한은행 앱 제작", "공공플랫폼 운영", "복지재단 앱 제작"];
    const evals = ["동료평가", "발주처평가"];
    const employeeInfo = [
        { employeeNumber: "181235", employeeName: "홍길동" },
        { employeeNumber: "152134", employeeName: "박보영" },
        { employeeNumber: "181230", employeeName: "이도현" },
        { employeeNumber: "181225", employeeName: "김찰리" },
    ];

    // 발주처 평가는 해당 프로젝트의 pm인지 확인 후  .. 일단은 임시

    const [pj, setPj] = useState("");
    const [evalType, setEvalType] = useState("");
    const [emplyee, setEmployee] = useState("");
    const [isSelect, setSelect] = useState(false);

    return (
        <div>
            <Header role={role}></Header>

            <div className="grid grid-cols-6 mx-auto">
                <Sidebar className="col-span-1" admin={admin}></Sidebar>
                <div className="col-span-5 h-screen px-20 pt-10 auto-rows-auto">
                    <div className="container w-5/6 h-5/6 mx-40 rounded border-2 border-slate-200 px-5 mb-20">
                        <div className="flex justify-between pt-10 pb-3">
                            <div className="text-2xl font-medium text-start">
                                평가하기
                            </div>
                            <button
                                type="submit"
                                className="w-30 h-10 rounded-md bg-sub-color px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                저장하기
                            </button>
                        </div>
                        <section className=" justify-start place-content-between h-16 px-2 border-2 border-slate-200 rounded align-center">
                            <div className="flex mt-2 mb-4">
                                <select
                                    onChange={(e) => setPj(e.target.value)}
                                    value={pj}
                                    id="position"
                                    name="position"
                                    className="px-2 block w-max rounded-md border-1.5 border-zinc-300 px py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                >
                                    {pjs.map((item) => (
                                        <option value={item} key={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    type="submit"
                                    className="w-max ml-2 h-10 rounded-md bg-sub-color px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => setSelect(true)}
                                >
                                    확인
                                </button>
                                {isSelect && (
                                    <DetailEvaluation
                                        evals={evals}
                                        evalType={evalType}
                                        setEvalType={setEvalType}
                                        employee={emplyee}
                                        setEmployee={setEmployee}
                                        employeeInfo={employeeInfo}
                                    />
                                )}
                            </div>
                        </section>
                        <section className="mt-2 justify-start place-content-between h-20 px-2 border-2 border-slate-200 rounded align-center"></section>
                        <div className="divide-y divide-gray-200"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
