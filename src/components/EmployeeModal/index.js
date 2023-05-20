import React, { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import "./EmployeeModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Table from "../Table";
import ModalTable from "../ModalTable";

export default function EmployeeModal({ setModalOpen }) {
    const ref = useRef();
    useOnClickOutside(ref, () => {
        setModalOpen(false);
    });

    const cols = ["사번", "이름", "스킬", "직급", "포지션", "권한"];

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

                    <div className="flex justify-end mr-14">
                        <select className="px-2 mt-2 rounded-md border-1.5 border-gray-300 py-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <option>사번</option>
                            <option>이름</option>
                            <option>스킬</option>
                            <option>직급</option>å<option>권한</option>
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
                            />
                        </button>
                    </div>
                    <div className="flex justify-center mx-10 mt-2">
                        <ModalTable cols={cols} />
                    </div>
                    <div className="flex justify-center mx-10 mt-2">
                        <section className="mt-2 h-40 w-full pl-4 pr-4 border border-gray-300 drop-shadow-sm rounded align-center"></section>
                    </div>
                </div>
            </div>
        </div>
    );
}
