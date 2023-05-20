import React, { useState } from "react";
import EmployeeModal from "../../components/EmployeeModal";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function ProjectDetailPage() {
    const [isAdmin, setIsAdmin] = useState(false);

    const role = isAdmin ? "경영인" : "직원";

    const cols = ["발주처명", "프로젝트명", "시작일자", "종료일자", "상태"];

    const [modalOpen, setModalOpen] = useState(false);

    const handleClick = () => {
        setModalOpen(true);
    };

    return (
        <div>
            <Header role={role}></Header>
            <div className="grid grid-cols-6 mx-auto">
                <Sidebar
                    className="col-span-1"
                    isAdmin={isAdmin}
                    setIsAdmin={setIsAdmin}
                ></Sidebar>
                <div className="bg-gray-100 col-span-5 h-screen px-20 pt-10 auto-rows-auto">
                    <div className="bg-white drop-shadow-md container w-5/6 h-5/6 mx-40 rounded border-2 border-slate-200 px-5 mb-20">
                        <div className="text-2xl font-medium pt-10 pb-4 text-start">
                            사내 웹 서비스 구축
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="grid grid-cols-1 gap-2 pt-4 px-0">
                                <div className="px-2 py-3">
                                    <span className="text-md font-medium leading-6 text-gray-900 mr-10">
                                        상세 설명
                                    </span>
                                    <span className="w-5/6 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        사내 근퇴관리를 위한 웹 서비스 구축 사업
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 pt-2 px-0">
                                <div className="px-2 py-3">
                                    <span className="text-md font-medium leading-6 text-gray-900 mr-14">
                                        발주처
                                    </span>
                                    <span className="w-5/6 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        삼성전자
                                    </span>
                                </div>

                                <div className="px-2 py-3">
                                    <span className="text-md font-medium leading-6 text-gray-900 mr-28">
                                        착수일자
                                    </span>
                                    <span className="w-5/6 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        2021.05.01
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-2 pt-3 px-0">
                                <div className="px-2 py-3">
                                    <span className="text-md font-medium leading-6 text-gray-900 mr-16">
                                        예산
                                    </span>
                                    <span className="w-5/6 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ml-2">
                                        5000,000,000 원
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-2 pt-3 px-0">
                                <div className="px-2 py-2">
                                    <label className="text-md font-medium leading-6 text-gray-900 mr-16">
                                        프로젝트 투입직원
                                    </label>
                                    {isAdmin && (
                                        <button
                                            className="button rounded-md border border-gray-300 p-2 pr-2"
                                            onClick={handleClick}
                                        >
                                            직원 투입
                                        </button>
                                    )}
                                </div>
                                <div className="px-1.5 py-2 w-full h-28 rounded-md border-0.5 border-gray-300 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-sm sm:leading-5"></div>
                            </div>
                        </div>

                        {isAdmin && (
                            <div className="mt-7 flex justify-between">
                                <div className="flex">
                                    <button
                                        type="submit"
                                        className="w-fit rounded-md bg-sub-color px-3.5 py-2.5 mr-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={() =>
                                            alert("프로젝트가 생성되었습니다!")
                                        }
                                    >
                                        프로젝트 시작
                                    </button>
                                    <button
                                        type="submit"
                                        className="w-fit rounded-md bg-sub-color px-3.5 py-2.5 mr-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={() =>
                                            alert("프로젝트가 생성되었습니다!")
                                        }
                                    >
                                        프로젝트 종료
                                    </button>
                                    <button
                                        type="submit"
                                        className="w-fit px-3.5 py-2.5 rounded-md bg-sub-color px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={() =>
                                            alert("프로젝트가 생성되었습니다!")
                                        }
                                    >
                                        프로젝트 취소
                                    </button>
                                </div>

                                <button
                                    type="submit"
                                    className="w-fit justify-center rounded-md bg-sub-color px-5 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() =>
                                        alert("프로젝트가 생성되었습니다!")
                                    }
                                >
                                    수정하기
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {modalOpen && (
                <EmployeeModal setModalOpen={setModalOpen} cols={cols} />
            )}
        </div>
    );
}
