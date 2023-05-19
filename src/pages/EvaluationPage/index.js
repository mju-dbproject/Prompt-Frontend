import React, { useState } from "react";
import DetailEvaluation from "../../components/DetailEvaluation";
import Header from "../../components/Header";
import RadioInput from "../../components/RadioInput";
import Sidebar from "../../components/Sidebar";

export default function EvaluationPage() {
    const [admin, setAdmin] = useState("");

    const role = admin === "manager" ? "경영인" : "직원";

    const pjs = ["신한은행 앱 제작", "공공플랫폼 운영", "복지재단 앱 제작"];
    const evals = ["동료평가", "PM 평가", "발주처평가"];
    const employeeInfo = [
        { employeeNumber: "181235", employeeName: "홍길동" },
        { employeeNumber: "152134", employeeName: "박보영" },
        { employeeNumber: "181230", employeeName: "이도현" },
        { employeeNumber: "181225", employeeName: "김찰리" },
    ];

    const employeeQues = [
        "해당 직원이 주어진 업무를 충실히 수행했습니까?",
        "해당 직원이 다른 팀원들과 적극적으로 소통했습니까?",
        "해당 직원의 전체적인 평가 내용을 작성해주세요.",
    ];

    const clientQeus = [
        "발주한 프로젝트에 대한 결과물은 만족하셨나요?",
        "프로젝트를 진행했던 참여사 직원들과의 소통은 원활하셨나요?",
        "발주한 프로젝트에 대한 전체적인 평가를 해주세요.",
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
                <div className="bg-gray-100 col-span-5 h-screen px-20 pt-10 auto-rows-auto">
                    <div className="bg-white drop-shadow-md container w-5/6 h-5/6 mx-40 rounded border border-gray-300 px-5 mb-20">
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
                        <section className=" justify-start place-content-between h-16 px-2 border border-gray-300 drop-shadow-sm rounded align-center">
                            <div className="flex mt-2.5 mb-4">
                                <select
                                    onChange={(e) => setPj(e.target.value)}
                                    value={pj}
                                    id="position"
                                    name="position"
                                    className="px-2 block w-max rounded-md border-1.5 border-gray-300 px py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                        <section className="mt-2 flex items-center h-20 px-2 border border-gray-300 drop-shadow-sm rounded align-center">
                            <div className="rounded w-full h-16  border border-gray-300 divide-y divide-white">
                                <div className="grid grid-cols-2">
                                    <div className="flex text-sm">
                                        <div className="bg-sub-color w-40 pt-1.5 pb-1 pl-5 rounded-tl-lg text-white">
                                            프로젝트명
                                        </div>
                                        <div className="pl-5 mt-1">
                                            눈누난나
                                        </div>
                                    </div>
                                    <div className="flex text-sm">
                                        <span className="bg-sub-color w-40 pt-1.5 pb-1 pl-5  text-white">
                                            프로젝트 코드
                                        </span>
                                        <span className="pl-5 mt-1">
                                            189283
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 text-sm">
                                    <div className="flex">
                                        <span className="bg-sub-color w-40 pt-1.5 pb-1 pl-5 rounded-bl-lg text-white ">
                                            발주처
                                        </span>
                                        <span className="pl-5 mt-1">
                                            삼성전자
                                        </span>
                                    </div>
                                    <div className="flex">
                                        <span className="bg-sub-color w-40 pt-1.5 pb-1 pl-5 text-white">
                                            예산
                                        </span>
                                        <span className="pl-5 mt-1">
                                            100,000,000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="mt-2 h-80 pl-4 pr-4 border border-gray-300 drop-shadow-sm rounded align-center">
                            <div className="pt-3 pb-1 border-b-2 border-gray-300">
                                문항을 읽고 가장 적절한 곳에 체크 해 주세요.
                            </div>
                            <div className="question mt-2">
                                <div>
                                    1. 해당 직원이 주어진 업무를 충실히
                                    수행했습니까?
                                </div>
                                <RadioInput />
                                <div>
                                    2. 해당 직원이 다른 팀원들과 적극적으로
                                    소통했습니까?
                                </div>
                                <RadioInput />
                                <div>
                                    3. 해당 직원의 전체적인 평가 내용을
                                    작성해주세요.
                                </div>
                                <input className="h-16 w-full rounded border border-gray-300 mt-2 mr-5"></input>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
