import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Sidebar from "../../components/Sidebar";

export default function ManagerPage() {
    const admin = "manager";
    const subTitle = [
        { title: "전체", total: 12 },
        { title: "진행", total: 1 },
        { title: "완료", total: 11 },
    ];

    const role = admin === "manager" ? "경영인" : "직원";

    const cols = ["발주처명", "프로젝트명", "시작일자", "종료일자", "상태"];

    return (
        <div>
            <Header role={role}></Header>

            <div className="grid grid-cols-6 mx-auto">
                <Sidebar className="col-span-1" admin={admin}></Sidebar>
                <Main subTitle={subTitle} cols={cols}></Main>
            </div>
        </div>
    );
}