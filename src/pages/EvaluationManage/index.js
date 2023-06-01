import React from "react";
import Label from "../../components/Atoms/Label/Label";
import Header from "../../components/Molecules/Header/Header";
import Sidebar from "../../components/Molecules/Sidebar/Sidebar";

export default function EvaluationManage() {
    const cols = [
        "프로젝트명",
        "직원명",
        "투입시작",
        "투입종료",
        "직무",
        "총 투입일수",
    ];
    return (
        <div>
            <Header></Header>

            <div className="grid grid-cols-6 mx-auto">
                <Sidebar className="col-span-1"></Sidebar>
                <div className="bg-gray-100 col-span-5 h-screen px-20 pt-10 auto-rows-auto ">
                    <div className="bg-white drop-shadow-md container w-5/6 h-4/5 mx-40 rounded border border-gray-300 px-5">
                        <div className="text-2xl font-medium pt-10 pb-4 text-start">
                            평가 조회
                        </div>
                        <div className="grid grid-cols-1 gap-2 pt-4 px-0">
                            <div className="px-2 py-3">
                                <Label value="직원 별 평가조회" />
                                <div className="show-table px-4 py-2 mt-3 h-24 rounded-md border-0.5 border-gray-300 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-sm sm:leading-5 overflow-y-auto">
                                    <table className="table-fixed w-full text-sm h-60">
                                        <thead>
                                            <tr className="border-b-2 border-sub-color">
                                                {cols.map((col, index) => (
                                                    <th key={index}>{col}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>묭지</td>
                                                <td>유지원</td>
                                                <td>2020.03.12</td>
                                                <td>2022.07.09</td>
                                                <td>영업관리</td>
                                                <td>PM</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-2 pt-2 px-0">
                            <div className="px-2 py-3">
                                <Label value="프로젝트 별 평가조뢰" />
                                <div className="show-table px-4 py-2 mt-3 h-24 rounded-md border-0.5 border-gray-300 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-sm sm:leading-5 overflow-y-auto">
                                    <table className="table-fixed w-full text-sm h-60">
                                        <thead>
                                            <tr className="border-b-2 border-sub-color">
                                                {cols.map((col, index) => (
                                                    <th key={index}>{col}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>묭지</td>
                                                <td>유지원</td>
                                                <td>2020.03.12</td>
                                                <td>2022.07.09</td>
                                                <td>영업관리</td>
                                                <td>PM</td>
                                            </tr>
                                            {/* {selectedEmployees.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee.employeeNumber}</td>
                                <td>{employee.name}</td>
                                <td>{employee.skill}</td>
                                <td>{employee.rank}</td>
                                <td>{employee.position}</td>
                                <td>{employee.task}</td>
                            </tr>
                        ))} */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
