import React from "react";
import { useNavigate } from "react-router";

export default function Button({ value, name }) {
    const navigate = useNavigate();

    const handleNavi = (name) => {
        if (name === "login") {
            navigate("/login");
        } else {
            navigate("/join");
        }
    };
    return (
        <div>
            <button
                className="rounded-md border p-2 pr-2 mr-3"
                onClick={handleNavi}
            >
                {value}
            </button>
        </div>
    );
}
