import React, { useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import "./EmployeeModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ModalTable from "../ModalTable";

export default function EmployeeModal({ setModalOpen, onEmployeeSelect }) {
    const [selectedEmployee, setSelectedEmployee] = useState([]);
    const ref = useRef();
    useOnClickOutside(ref, () => {
        setModalOpen(false);
    });

    const handleSelectedEmployee = (employee) => {
        setSelectedEmployee((prev) => [...prev, employee]);
        console.log(selectedEmployee);
        onEmployeeSelect(selectedEmployee);
    };

    const tasks = ["사번", "이름", "스킬", "직급", "포지션"];
    const [task, setTask] = useState("");
    const [isAdd, setIsAdd] = useState(false);

    return (
        <div className="presentation">
            <div className="wrapper-modal">
                <div className="modal flex" ref={ref}>
                    <div className="px-5 mt-3 flex justify-between">
                        <div className="text-2xl font-medium mt-4">
                            직원 검색
                        </div>
                        <div
                            onClick={() => setModalOpen(false)}
                            className="modal-close"
                        >
                            X
                        </div>
                    </div>

                    <div className="flex justify-end mr-10">
                        <select
                            className="px-2 mt-2 rounded-md border-1.5 border-gray-300 py-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e) => setTask(e.target.value)}
                            id="task"
                            name="task"
                        >
                            {tasks.map((item, index) => (
                                <option value={item} key={index}>
                                    {item}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            className="w-40 ml-3 px-2 mt-2 rounded-md border-0.5 border-gray-300  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                        ></input>{" "}
                        <button>
                            <FontAwesomeIcon
                                className="ml-2 mt-3"
                                icon={faMagnifyingGlass}
                                onClick={() => setIsAdd(true)}
                            />
                        </button>
                    </div>
                    <ModalTable onEmployeeSelect={handleSelectedEmployee} />
                </div>
            </div>
        </div>
    );
}
