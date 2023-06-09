import React, { useEffect, useState } from "react";

import { useRecoilState, useSetRecoilState } from "recoil";
import {
    selectedEmployeesState,
    allManpowerState,
    allManpowerEndState,
} from "../../../hooks/recoil/atoms";

export default function ShowTable({ detailProject, id }) {
    const selectedcols = ["사번", "이름", "스킬", "직급", "포지션", "직무"];
    const [selectedEmployees, setSelectedEmployees] = useRecoilState(
        selectedEmployeesState
    );

    const [manpowerList, setManpowerList] = useRecoilState(allManpowerState);
    const [endManpowerList, setEndManpowerList] =
        useRecoilState(allManpowerEndState);

    useEffect(() => {
        console.log("manpowerList", manpowerList);
        console.log("selectedEmployees", selectedEmployees);
    });
    // useEffect(() => {
    //     console.log("엔드엔드", endManpowerList);
    //     // detailProject.endManpowerList = endManpowerList;
    // }, [endManpowerList]);

    const handleClick = (id) => {
        let employees = selectedEmployees.filter(
            (employee) => employee.id !== id
        );

        // console.log("update", manpowerList);

        setEndManpowerList((prev) => [...prev, id]);
        // detailProject.endManpowerList = endManpowerList;

        setSelectedEmployees(employees);
        setManpowerList(employees);
        console.log("End임플로이", endManpowerList);
        // console.log("엔드엔드", endManpowerList);
    };

    return (
        <div className="block">
            <div className="show-table px-4 py-2 ml-1 h-24 rounded-md border-0.5 border-gray-300 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-sm sm:leading-5 overflow-y-auto">
                <table className="table-fixed w-full text-sm h-60">
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
                                <td>
                                    <button
                                        className="h-fit w-fit button rounded-md text-sm border border-zinc-300 px-1.5 py-1.5 mr-3 my-0.5"
                                        onClick={(e) =>
                                            handleClick(employee.id)
                                        }
                                    >
                                        투입종료
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
