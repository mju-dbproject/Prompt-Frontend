import React, { useState, useEffect } from "react";
import Header from "../../components/Molecules/Header/Header";
import Sidebar from "../../components/Molecules/Sidebar/Sidebar";
import Label from "../../components/Atoms/Label/Label";
import { useLocation } from "react-router-dom";
import instance from "../../api/fetch";
import requests from "../../api/requests";
import puts from "../../api/puts";
import EmployeeDetailTable from "../../components/Atoms/Table/EmployeeDetailTable";

export default function EmployeeDetailPage() {
    const [isAdmin, setIsAdmin] = useState(null);

    const role = isAdmin ? "경영인" : "직원";

    return (
        <div>
            <Header role={role} isAdmin={isAdmin}></Header>

            <div className="grid grid-cols-6 mx-auto">
                <Sidebar className="col-span-1"></Sidebar>
                <div className="bg-gray-100 col-span-5 h-screen px-20 pt-10 auto-rows-auto drop-shadow-md">
                    <div className="bg-white drop-shadow-md container w-5/6 h-5/6 mx-40 rounded border border-gray-300 px-5">
                        <div className="text-2xl font-medium pt-10 pb-4 text-start">
                            홍길동 [102937]
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="grid grid-cols-2 gap-2 pt-4 px-0">
                                <div className="px-2 py-3">
                                    <Label value="직급" />
                                    <span className="w-5/6 ml-3.5 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        수석
                                    </span>
                                </div>

                                <div className="px-2 py-3">
                                    <Label value="포지션" />
                                    <span className="w-5/6 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        개발자
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-2 pt-2 px-0">
                                <div className="px-2 py-3">
                                    <Label value="진행중인 프로젝트" />
                                    <EmployeeDetailTable />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-2 pt-2 px-0">
                                <div className="px-2 py-3">
                                    <Label value="완료한 프로젝트" />
                                    <EmployeeDetailTable />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
