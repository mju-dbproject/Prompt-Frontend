import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function PwdIcon({ pwType, setPwType }) {
    const togglePasswordVisibility = () => {
        setPwType((prevState) => ({
            type: prevState.visible ? "password" : "text",
            visible: !prevState.visible,
            icon: prevState.visible ? faEye : faEyeSlash,
        }));
    };

    return (
        <FontAwesomeIcon
            icon={pwType.icon}
            className="absolute top-3 right-3 mb-1.5 text-gray-500"
            onClick={togglePasswordVisibility}
        />
    );
}
