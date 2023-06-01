import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useRecoilState } from "recoil";
import instance from "../../../api/fetch";
import requests from "../../../api/requests";
import {
    allNewAddEmployeeState,
    searchState,
} from "../../../hooks/recoil/atoms";

export default function ModalTable({
    id,
    selectedEmployees,
    setSelectedEmployees,
    allEmployees,
}) {
    const [task, setTask] = useState("PM");
    const cols = ["사번", "이름", "스킬", "직급", "포지션"];
    const selectedcols = ["사번", "이름", "스킬", "직급", "포지션", "직무"];
    const tasks = ["PM", "PL", "분석가", "디자이너", "프로그래머", "테스터"];

    const [select, setSelect] = useState([]);
    const [allEmp, setAllEmp] = useState([]);

    useEffect(() => {
        setSelect(selectedEmployees);
        setAllEmp(allEmployees);
        console.log("모든 맨파워", allEmp);
        console.log("모든 셀렉트", select);
    }, []);

    const [newAddEmployee, setNewAddEmployee] = useRecoilState(
        allNewAddEmployeeState
    );

    const handleClick = (e, row, id) => {
        e.preventDefault();
        // console.log("이거슨 아이디여,,", id);
        const tdArr = Array.from(row.cells).map((td) => td.textContent);
        console.log("클릭한 Row의 모든 데이터: ", tdArr);

        const newEmployee = {
            employeeNumber: tdArr[0],
            name: tdArr[1],
            skill: tdArr[2],
            rank: tdArr[3],
            position: tdArr[4],
            task,
            id,
        };

        let selected = allEmp.filter((employee) => employee.id !== id);
        // console.log(selected, "이건 필터링 한거");

        setAllEmp(selected);

        console.log("원래 애", allEmp);

        setSelectedEmployees((prevSelectedEmployees) => [
            ...prevSelectedEmployees,
            newEmployee,
        ]);

        console.log("왜 안돼??", selectedEmployees);
        // setSelect((prevSelectedEmployees) => [
        //     ...prevSelectedEmployees,
        //     newEmployee,
        // ]);

        setNewAddEmployee((prev) => [...prev, newEmployee]);

        console.log("새로 추가된애들만", newAddEmployee);
    };

    return (
        <div>
            <div className="flex justify-center mx-10 mt-2">
                <section className="mt-2 h-40 w-full py-3 px-7 border border-gray-300 drop-shadow-sm rounded align-center overflow-y-auto">
                    <table className="table-auto w-full h-full text-sm">
                        <thead>
                            <tr className="border-b-2 border-sub-color">
                                {cols.map((cols, index) => (
                                    <th key={index}>{cols}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {allEmployees.map((employee, index) => (
                                <tr key={index}>
                                    <td>{employee.employeeNumber}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.skill}</td>
                                    <td>{employee.rank}</td>
                                    <td>{employee.position}</td>
                                    <td>
                                        <div className="flex ml-10 items-center justify-end">
                                            <select
                                                className="h-fit w-fit border rounded-md border-gray-300 mr-3 py-1"
                                                onChange={(e) =>
                                                    setTask(e.target.value)
                                                }
                                                id="task"
                                                name="task"
                                            >
                                                {tasks.map((item, index) => (
                                                    <option
                                                        value={item}
                                                        key={index}
                                                    >
                                                        {item}
                                                    </option>
                                                ))}
                                            </select>
                                            <button
                                                className="h-fit w-fit button rounded-md text-sm border border-zinc-300 px-1 py-1 pr-2 mr-3 my-0.5"
                                                onClick={(e) =>
                                                    handleClick(
                                                        e,
                                                        e.target.closest("tr"),
                                                        employee.id
                                                    )
                                                }
                                            >
                                                추가하기
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>
            <div className="flex block justify-center mx-10 mt-2">
                <section className="mt-2 h-40 w-full py-3 px-7 border border-gray-300 drop-shadow-sm rounded align-center h-1/2 overflow-y-auto">
                    <table className="table-auto w-full h-full text-sm">
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
                                    <td className="pt-3">
                                        {employee.employeeNumber}
                                    </td>
                                    <td className="pt-3">{employee.name}</td>
                                    <td className="pt-3">{employee.skill}</td>
                                    <td className="pt-3">{employee.rank}</td>
                                    <td className="pt-3">
                                        {employee.position}
                                    </td>
                                    <td className="pt-3">{employee.task}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
}
