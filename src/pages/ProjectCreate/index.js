import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function ProjectCreatePage() {
    const admin = "manager";

    const role = admin === "manager" ? "경영인" : "직원";

    return (
        <div>
            <Header role={role}></Header>

            <div className="grid grid-cols-6 mx-auto">
                <Sidebar className="col-span-1" admin={admin}></Sidebar>
                <div className="col-span-5 h-screen px-20 pt-10 auto-rows-auto">
                    <div className="container w-5/6 h-4/5 mx-40 rounded border-2 border-slate-200 px-5">
                        <div className="text-2xl font-medium pt-10 pb-4 text-start">
                            프로젝트 생성
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="grid grid-cols-2 gap-2 pt-4 px-0">
                                <div className="px-2 py-3">
                                    <span className="text-md font-medium leading-6 text-gray-900 mr-20">
                                        프로젝트명
                                    </span>
                                    <span className="w-5/6 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        사내 웹 사이트 구축 사업
                                    </span>
                                </div>

                                <div className="px-2 py-3">
                                    <span className="text-md font-medium leading-6 text-gray-900 mr-20">
                                        프로젝트 번호
                                    </span>
                                    <span className="w-5/6 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        PSYOUGOOD
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-2 pt-2 px-0">
                                <div className="px-2 py-3">
                                    <span className="text-md font-medium leading-6 text-gray-900 mr-24">
                                        발주처명
                                    </span>
                                    <span className="w-5/6 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        ohoh@gamil.com
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 pt-2 px-0">
                                <div className="px-2 py-3">
                                    <span className="text-md font-medium leading-6 text-gray-900 mr-24">
                                        착수일자
                                    </span>
                                    <span className="w-5/6 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        수석
                                    </span>
                                </div>

                                <div className="px-2 py-3">
                                    <span className="text-md font-medium leading-6 text-gray-900 mr-28">
                                        종료일자
                                    </span>
                                    <span className="w-5/6 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        개발자
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-2 pt-3 px-0">
                                <div className="px-2 py-3">
                                    <span className="text-md font-medium leading-6 text-gray-900 mr-28">
                                        예산
                                    </span>
                                    <span className="w-5/6 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ml-3">
                                        500,000,000 원
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mx-10 mt-16 flex justify-end">
                            <button
                                type="submit"
                                className="flex w-1/5 justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={() =>
                                    alert("프로젝트가 생성되었습니다!")
                                }
                            >
                                생성하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
