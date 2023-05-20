import React, { useState } from "react";
import Search from "./Search";
import SubNav from "./SubNav";
import Table from "./Table";
import DatePick from "./DatePick";

export default function Main({ subTitle, cols, isAdmin }) {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleSearch = (searchTerm) => {
        // 검색 단어랑 검색 날짜를 조합해서 검색
    };

    return (
        <div className="col-span-5 h-screen px-16 py-10 bg-gray-100 ">
            <SubNav subTitle={subTitle}></SubNav>
            <section className="relative z-10 flex bg-white drop-shadow-md items-center place-content-between h-16 mt-3 px-5 border border-slate-200 rounded">
                <DatePick onChange={handleDateChange} />
                <Search onChange={handleSearch} cols={cols} />
            </section>
            <div className="relative z-0">
                <Table cols={cols} isAdmin={isAdmin}></Table>
            </div>
        </div>
    );
}
