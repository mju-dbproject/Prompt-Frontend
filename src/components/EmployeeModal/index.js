import React, { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import "./EmployeeModal.css";
import Search from "../Search";

export default function EmployeeModal({ setModalOpen, cols }) {
    const ref = useRef();
    useOnClickOutside(ref, () => {
        setModalOpen(false);
    });
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
                    <div className="text-xl font-medium pt-7 pl-7 pb-4 text-start">
                        직원 검색
                    </div>
                    <div className="mt-20 w-100">
                        <Search cols={cols} />
                    </div>
                </div>
            </div>
        </div>
    );
}
