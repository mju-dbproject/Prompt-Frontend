import React from "react";
import { useNavigate } from "react-router";

export default function ButtonLists({ isEditing, setIsEditing }) {
    const value = isEditing ? "저장하기" : "수정하기";
    const navigate = useNavigate();
    return (
        <div className="mt-7 flex justify-between">
            <div className="flex">
                <button
                    type="submit"
                    className="w-fit rounded-md bg-sub-color px-3.5 py-2.5 mr-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => alert("프로젝트를 착수시킵니다.")}
                >
                    프로젝트 착수
                </button>
                <button
                    type="submit"
                    className="w-fit rounded-md bg-sub-color px-3.5 py-2.5 mr-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => alert("프로젝트를 종료시킵니다.")}
                >
                    프로젝트 종료
                </button>
                <button
                    type="submit"
                    className="w-fit px-3.5 py-2.5 rounded-md bg-sub-color px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => alert("프로젝트를 취소시킵니다.")}
                >
                    프로젝트 취소
                </button>
            </div>

            <button
                type="submit"
                className="w-fit justify-center rounded-md bg-sub-color px-5 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                    if (isEditing && window.confirm("저장하시겠습니까?")) {
                        alert("저장되었습니다!");
                        navigate("/manager");
                    }
                    setIsEditing(!isEditing);
                }}
            >
                {value}
            </button>
        </div>
    );
}
