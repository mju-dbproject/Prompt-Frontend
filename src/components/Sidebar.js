import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { useNavigate } from "react-router";

export default function Sidebar({ menus, icons }) {
    const navigate = useNavigate();

    const handleNavi = (path) => {
        navigate(`${path}`);
    };

    return (
        <div className="border-r-2 border-gray-300 h-screen">
            {menus.map((name, index) => (
                <div key={name} className="mb-5 pt-10 px-8">
                    <button
                        onClick={() => {
                            navigate(`${menus[index].path}`);
                        }}
                    >
                        <FontAwesomeIcon
                            icon={icons[index].name}
                            size="2xl"
                            style={{ color: "#292929" }}
                        />
                        <span className="ml-5">{menus[index].name}</span>
                    </button>
                </div>
            ))}
        </div>
    );
}
