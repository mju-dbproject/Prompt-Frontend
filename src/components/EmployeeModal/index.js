import React, { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import "./EmployeeModal.css";

export default function EmployeeModal({ setModalOpen }) {
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

                    <div className="modal__content">웃어요</div>
                </div>
            </div>
        </div>
    );
}
