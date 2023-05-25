import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { joinInfoState, loginInfoState } from "../../../hooks/recoil/atoms";

export default function Input({ name, type, page }) {
    const [joinInfo, setJoinInfo] = useRecoilState(joinInfoState);
    const [loginInfo, setLoginInfo] = useRecoilState(loginInfoState);
    const setInfo = useSetRecoilState(joinInfoState);
    const setLogin = useSetRecoilState(loginInfoState);

    const handleValueChange = (e) => {
        if (page === "login") {
            setLogin({
                ...loginInfo,
                [e.target.name]: e.target.value,
            });
        } else {
            setInfo({
                ...joinInfo,
                [e.target.name]: e.target.value,
            });
        }
    };

    return (
        <input
            type={type}
            name={name}
            id={name}
            autocomplete="on"
            className="block w-full rounded-md border border-gray-300 px py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => handleValueChange(e)}
        />
    );
}
