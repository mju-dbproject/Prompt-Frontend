import React from "react";
import { useNavigate } from "react-router";
import "./Button.css";

export default function Button({ value, name }) {
    const navigate = useNavigate();

    const handleNavi = () => {
        navigate(`/${name}`);
    };
    return (
        <div>
            <button
                className="button rounded-md border border-zinc-300 p-2 pr-2 mr-3"
                onClick={handleNavi}
            >
                {value}
            </button>
        </div>
    );
}
