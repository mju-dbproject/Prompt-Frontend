import React from "react";

import DetailButton from "../Button/DetailButton";
import { useRecoilState } from "recoil";
import { adminState, allProjectsState } from "../../../hooks/recoil/atoms";

export default function ProjectTable() {
    const [allProjects, setAllProjects] = useRecoilState(allProjectsState);

    const [isAdmin, setIsAdmin] = useRecoilState(adminState);
    const cols = ["발주처명", "프로젝트명", "착수일자", "종료일자", "상태"];

    return (
        <section className=" block w-6/7 px-4 border border-slate-200 bg-white rounded p-3 mt-3 drop-shadow-md h-96 overflow-y-auto">
            <table className="table-fixed w-full">
                <thead>
                    <tr className="border-b-2 border-sub-color">
                        {cols.map((cols, index) => (
                            <th key={index}>{cols}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {allProjects.map((project, index) => (
                        <tr key={index}>
                            <td>{project.client}</td>
                            <td>{project.name}</td>
                            <td>{project.startDate}</td>
                            <td>{project.endDate}</td>
                            <td>{project.status}</td>

                            <DetailButton
                                value="상세보기"
                                isAdmin={isAdmin}
                                projectId={project.id}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
