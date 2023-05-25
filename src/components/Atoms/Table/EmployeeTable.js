import React, { useState, useEffect } from "react";

export default function EmployeeTable({ cols, isAdmin }) {
    const [allEmployees, setAllEmployees] = useState([]);

    const handleClick = () => {
        if (window.confirm("권한 변경하시겠습니까?")) {
            alert("변경되었습니다");
        }
    };

    const fetchGetAllEmployee = async () => {
        try {
            const request = await fetch(
                "https://2d55b3a9-65f0-40be-9a3b-9348ac5d5303.mock.pstmn.io/api/employee/admin/all"
            );
            const response = await request.json();
            console.log(response);
            return response.employees;
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
    return (
        <div className="block">
            <section className="w-6/7 px-4 border border-slate-200 bg-white rounded p-3 mt-3 drop-shadow-md h-1/2 overflow-y-auto">
                <table className="table-fixed w-full max-h-screen">
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
                                <td>{employee.role}</td>

                                <button
                                    className="button rounded-md border border-zinc-300 px-2 py-1.5 pr-2 mr-3 my-1"
                                    onClick={handleClick}
                                >
                                    권한변경
                                </button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
