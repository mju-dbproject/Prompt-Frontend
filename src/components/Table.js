import React from "react";

export default function Table({ cols }) {
    return (
        <section className="w-6/7 border border-slate-200 bg-white h-1/2 rounded p-3 mt-3 drop-shadow-md">
            <table className="table-fixed w-full max-h-screen">
                <thead>
                    <tr className="border-b-2 border-sub-color">
                        {cols.map((cols, index) => (
                            <th key={index}>{cols}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>삼성전자</td>
                        <td>웹 시스템 구축</td>
                        <td>2022.05.03</td>
                        <td>2022.05.03</td>
                        <td>진행중</td>
                    </tr>
                    <tr>
                        <td>웹 시스템 구축</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                    </tr>
                    <tr>
                        <td>2022.05.03</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
