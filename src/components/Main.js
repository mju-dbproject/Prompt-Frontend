import React from "react";
import Search from "./Search";
import SubNav from "./SubNav";
import Table from "./Table";

export default function Main({ subTitle, cols }) {
    return (
        <div className="col-span-5 h-screen px-16 py-10">
            <SubNav subTitle={subTitle}></SubNav>
            <Search></Search>
            <Table cols={cols}></Table>
        </div>
    );
}
