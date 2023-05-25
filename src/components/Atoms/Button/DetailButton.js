import React from "react";
import { Link } from "react-router-dom";

export default function DetailButton({ value, isAdmin, projectId }) {
    const role = isAdmin ? "manager" : "employee";

    const handleClick = () => {};
    return (
        <div>
            <Link to={`/${role}/${projectId}`} className="text-black">
                <button
                    className="button rounded-md border border-zinc-300 px-2 py-1.5 pr-2 mr-3 my-1"
                    onClick={handleClick}
                >
                    {value}{" "}
                </button>
            </Link>
        </div>
    );
}
