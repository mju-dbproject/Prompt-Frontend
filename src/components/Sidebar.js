import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderClosed } from "@fortawesome/free-regular-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import React from "react";

export default function Sidebar() {
    const menus = [
        { name: "프로젝트 조회", path: "/project" },
        { name: "평가", path: "/evaluation" },
        { name: "마이페이지", path: "/mypage" },
    ];

    const icons = [
        { name: faFolderClosed },
        { name: faChartSimple },
        { name: faUser },
    ];
    // <FontAwesomeIcon icon={faPen} />;
    return (
        <div class="w-1/5 h-screen  border-r-2 border-gray-300">
            {menus.map((name, index) => (
                <div key={name} class="mb-5 pt-10 px-8">
                    <button>
                        <FontAwesomeIcon
                            icon={icons[index].name}
                            size="2xl"
                            style={{ color: "#292929" }}
                        />
                        <span class="ml-5">{menus[index].name}</span>
                    </button>
                </div>
            ))}
        </div>
    );
}
