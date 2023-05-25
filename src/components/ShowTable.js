import React, { useEffect } from "react";

import {
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
    useResetRecoilState,
} from "recoil";
import { selectedEmployeesState } from "../hooks/recoil/atoms";

export default function ShowTable() {
    const selectedcols = ["사번", "이름", "스킬", "직급", "포지션", "직무"];

    useEffect(() => {
        console.log(selectedEmployees);
    });

    const [selectedEmployees, setSelectedEmployees] = useRecoilState(
        selectedEmployeesState
    );
    const currentSelectedEmployee = useRecoilValue(selectedEmployeesState); //읽기 전용
    const selectedEmployeeHandler = useSetRecoilState(selectedEmployeesState); // 값만 변경시키기
    const resetSelectedEmployee = useResetRecoilState(selectedEmployeesState); // 디폴트값으로 값 변경
    return (
        <div className="block">
            <div className="show-table px-4 py-2 ml-1 h-20 rounded-md border-0.5 border-gray-300 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-sm sm:leading-5 h-1/2 overflow-y-auto">
                <table className="table-fixed w-full text-sm h-80">
                    <thead>
                        <tr className="border-b-2 border-sub-color">
                            {selectedcols.map((selectedcols, index) => (
                                <th key={index}>{selectedcols}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {selectedEmployees.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee.employeeNumber}</td>
                                <td>{employee.name}</td>
                                <td>{employee.skill}</td>
                                <td>{employee.rank}</td>
                                <td>{employee.position}</td>
                                <td>{employee.task}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}