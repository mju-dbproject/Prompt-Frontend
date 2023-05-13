import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";

import "react-datepicker/dist/react-datepicker.css";

export default function EmployeePage() {
    const admin = "employee";
    const subTitle = [
        { title: "전체", total: 12 },
        { title: "진행", total: 1 },
        { title: "완료", total: 11 },
    ];
    // const [subNav, setSubNav] = useState[""];

    // const [startDate, setStartDate] = useState(new Date("2021/08/27"));

    // *** 이런식으로 진행예정
    // useEffect(() => {
    //     if (debouncedSearchTerm) {
    //         fetchSearchProject(debouncedSearchTerm);
    //     }
    // }, [debouncedSearchTerm]);

    return (
        <div>
            <Header></Header>

            <div className="grid grid-cols-6 mx-auto">
                <Sidebar className="col-span-1" admin={admin}></Sidebar>
                <Main subTitle={subTitle}></Main>
            </div>
        </div>
    );
}
