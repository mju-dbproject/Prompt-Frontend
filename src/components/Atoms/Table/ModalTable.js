import React, { useState, useEffect } from "react";

export default function ModalTable({ onEmployeeSelect }) {
    const [task, setTask] = useState("PM");
    const cols = ["사번", "이름", "스킬", "직급", "포지션"];
    const selectedcols = ["사번", "이름", "스킬", "직급", "포지션", "직무"];
    const tasks = ["PM", "PL", "분석가", "설계자", "프로그래머", "테스터"];

    const [selectedEmployee, setSelectedEmployee] = useState([]);
    const [allEmployees, setAllEmployees] = useState([]);

    const fetchGetAllEmployee = async () => {
        try {
            const request = await fetch(
                "https://2d55b3a9-65f0-40be-9a3b-9348ac5d5303.mock.pstmn.io/api/manpower/admin/new/available/all"
            );
            const response = await request.json();
            console.log(response.manpowerList);
            return response.manpowerList;
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const allEmployees = await fetchGetAllEmployee();
            setAllEmployees(allEmployees);
            console.log(allEmployees);
        };
        fetchData();
    }, []);

    const handleClick = (e, row) => {
        e.preventDefault();
        const tdArr = Array.from(row.cells).map((td) => td.textContent);
        // console.log("클릭한 Row의 모든 데이터: ", tdArr);

        const newEmployee = {
            employeeNumber: tdArr[0],
            name: tdArr[1],
            skill: tdArr[2],
            rank: tdArr[3],
            position: tdArr[4],
            task,
        };

        setSelectedEmployee((prevSelectedEmployees) => [
            ...prevSelectedEmployees,
            newEmployee,
        ]);
        // console.log(selectedEmployee);
        onEmployeeSelect(newEmployee);
    };

    return (
        <div>
            <div className="flex block justify-center mx-10 mt-2">
                <section className="mt-2 h-40 w-full py-3 px-7 border border-gray-300 drop-shadow-sm rounded align-center h-1/2 overflow-y-auto">
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
                                                    e.target.closest("tr")
                                                )
                                            }
                                        >
                                            추가하기
                                        </button>
                                    </div>
                                </tr>
                            ))}

                            {/* <tr>
                                <td>219394</td>
                                <td>홍길동</td>
                                <td>swift</td>
                                <td>수석</td>
                                <td>개발자</td>
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
                                            <option value={item} key={index}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                    <button
                                        type="submit"
                                        className="h-fit w-fit button rounded-md text-sm border border-zinc-300 px-1 py-1 pr-2 mr-3 my-0.5"
                                        onClick={(e) =>
                                            handleClick(
                                                e,
                                                e.target.closest("tr")
                                            )
                                        }
                                    >
                                        추가하기
                                    </button>
                                </div>
                            </tr> */}
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
                            {selectedEmployee.map((employee, index) => (
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
                </section>
            </div>
        </div>
    );
}
