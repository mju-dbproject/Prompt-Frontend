import React from "react";

import EmployeeTable from "../../Atoms/Table/EmployeeTable";
import Header from "../../Molecules/Header/Header";
import ApprovalRequestList from "../../Organisms/List/ApprovalRequestList";

import Search from "../../Molecules/Search/Search";
import Sidebar from "../../Molecules/Sidebar/Sidebar";
import SubNav from "../../Molecules/Subnav/SubNav";

export default function EmployeeList({ role, isAdmin, setIsAdmin }) {
    const subTitle = [
        { title: "전체", total: 12 },
        { title: "개발자", total: 1 },
        { title: "기타", total: 11 },
    ];

    const cols = ["사번", "직원명", "스킬", "직급", "권한"];
    const handleSearch = (searchTerm) => {
        //
    };

    return (
        <div>
            <Header role={role} isAdmin={isAdmin}></Header>

            <div className="grid grid-cols-6 mx-auto">
                <Sidebar
                    className="col-span-1"
                    isAdmin={isAdmin}
                    setIsAdmin={setIsAdmin}
                ></Sidebar>

                <div className="col-span-5 h-screen px-16 py-10 bg-gray-100 ">
                    <SubNav subTitle={subTitle}></SubNav>
                    <section className="flex justify-end bg-white drop-shadow-md items-center place-content-between h-16 mt-3 px-5 border border-slate-200 rounded">
                        <Search onChange={handleSearch} cols={cols} />
                    </section>
                    <ApprovalRequestList />
                    <div>
                        <EmployeeTable cols={cols} />
                    </div>
                </div>
            </div>
        </div>
    );
}
