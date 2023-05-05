import React from "react";

export default function Table() {
    return (
        <div>
            <section className="w-6/7 border-2 border-blue-400 h-1/2 rounded p-10  mt-5">
                <table class="table-auto w-full">
                    <thead className="border-b-2 border-blue-500">
                        <tr>
                            <th>발주처명</th>
                            <th>프로젝트명</th>
                            <th>시작일자</th>
                            <th>종료일자</th>
                            <th>상태</th>
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
        </div>
    );
}
