import React from "react";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

export default function ProjectList({ role, isAdmin, setIsAdmin }) {
    let subTitle = [
        { title: "전체", total: 12 },
        { title: "진행", total: 1 },
        { title: "완료", total: 11 },
    ];

    const cols = ["발주처명", "프로젝트명", "시작일자", "종료일자", "상태"];
    if (!isAdmin) {
        subTitle.push({ title: "취소", total: 11 });
    }
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
