import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

export default function Sidebar({ menus, icons }) {
    return (
        <div className="border-r-2 border-gray-300">
            {menus.map((name, index) => (
                <div key={name} className="mb-5 pt-10 px-8">
                    <button>
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
