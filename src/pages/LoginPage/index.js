import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Atoms/Input/Input";
import PwdIcon from "../../components/Atoms/Icon/PwIcon";
import { useRecoilState } from "recoil";
import { loginInfoState } from "../../hooks/recoil/atoms";
import instance from "../../api/fetch";
import posts from "../../api/posts";

export default function LoginPage() {
    const navigate = useNavigate();

    const [isAdmin, setIsAdmin] = useState(true);

    const [pwType, setPwType] = useState({
        type: "password",
        visible: false,
        icon: faEye,
    });

    const [loginInfo, setLoginInfo] = useRecoilState(loginInfoState);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch(instance.baseURL + posts.fetchLogin, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginInfo),
            });
            const res = await response.json();
            console.log(res.accessToken);
            console.log(loginInfo);
            localStorage.setItem("login-token", res.accessToken);
            navigate("/manager");
            if (!response.ok) {
                console.log("API 요청 실패");
            }
        } catch (error) {
            console.log(error, "error");
        }

        // .then(navigate("/manager"));
    };

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
            <div className="flex-col items-center w-full h-3/4 p-6 bg-white rounded shadow lg:w-2/5">
                <div className="text-2xl font-medium mt-3 text-center">
                    로그인
                </div>
                <form className="flex flex-col" action="/employee">
                    <div className="grid m-10">
                        <div>
                            <label
                                htmlFor="userId"
                                className="block text-base font-medium leading-6 text-gray-900"
                            >
                                아이디를 입력하세요
                            </label>
                            <div className="mt-2.5 mb-7">
                                <Input name="userId" type="text" page="login" />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-base font-medium leading-6 text-gray-900"
                            >
                                비밀번호를 입력하세요
                            </label>
                            <div className="mt-2.5 relative">
                                <Input
                                    name="password"
                                    page="login"
                                    type={pwType.type}
                                />

                                <PwdIcon
                                    pwType={pwType}
                                    setPwType={setPwType}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="m-10">
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-sub-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={handleSubmit}
                        >
                            로그인
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    회원이 아니신가요? &nbsp;
                    <a
                        href="/join"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                        회원가입하기
                    </a>
                </p>
            </div>
        </div>
    );
}
