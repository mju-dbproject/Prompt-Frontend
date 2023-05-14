import React from "react";
import Search from "./Search";
import SubNav from "./SubNav";
import Table from "./Table";
import DatePick from "./DatePick";

export default function Main({ subTitle, cols }) {
    return (
        <div className="col-span-5 h-screen px-16 py-10">
            <SubNav subTitle={subTitle}></SubNav>
            <section className="flex items-center place-content-between h-16 mt-3 px-5 border-2 border-slate-200 rounded">
                <DatePick />
                <Search />
            </section>
            <Table cols={cols}></Table>
        </div>
    );
}
