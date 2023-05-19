import React, { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import "./EmployeeModal.css";
import Search from "../Search";
import { Table } from "@mui/material";

export default function EmployeeModal({ setModalOpen }) {
    const ref = useRef();
    useOnClickOutside(ref, () => {
        setModalOpen(false);
    });

    const cols = ["사번", "이름", "스킬", "직급", "포지션", "권한"];
    return (
        <div className="presentation">
            <div className="wrapper-modal">
                <div className="modal" ref={ref}>
                    <span
                        onClick={() => setModalOpen(false)}
                        className="modal-close"
                    >
                        X
                    </span>

                    <div className="text-xl font-medium pt-10 pl-10 pb-4 text-start">
                        직원 검색
                        <div className="mt-3 w-56">
                            <Search cols={cols} className="search" />
                        </div>
                    </div>
                    <Table cols={cols} />
                </div>
            </div>
        </div>
    );
}
