import React from "react";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

export default function EmployeeList({ role, isAdmin, setIsAdmin }) {
    const subTitle = [
        { title: "전체", total: 12 },
        { title: "개발자", total: 1 },
        { title: "기타", total: 11 },
    ];

    const cols = ["사번", "직원명", "스킬", "포지션", "권한"];
    return (
        <div>
            <Header role={role}></Header>

            <div className="grid grid-cols-6 mx-auto">
                <Sidebar
                    className="col-span-1"
                    isAdmin={isAdmin}
                    setIsAdmin={setIsAdmin}
                ></Sidebar>
                <Main subTitle={subTitle} cols={cols} isAdmin={isAdmin}></Main>
            </div>
        </div>
    );
}
