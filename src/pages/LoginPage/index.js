import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();

    const [pwType, setPwType] = useState({
        type: "password",
        visible: false,
        icon: faEye,
    });

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const handlePasswordType = (e) => {
        setPwType(() => {
            if (!pwType.visible) {
                return { type: "text", visible: true, icon: faEyeSlash };
            } else {
                return { type: "password", visible: false, icon: faEye };
            }
        });
    };

    const handleSubmit = () => {
        fetch("http://localhost:3000/user/info", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                userId: userId,
                password: password,
            }),
        })
            .then((res) => console.log(res))
            .then(() => console.log("success"));
    };

    return (
        <div>
            <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
                <div className="flex-col items-center w-full h-3/4 p-6 bg-white rounded shadow lg:w-2/5">
                    <div className="text-2xl font-medium mt-3 text-center">
                        로그인
                    </div>
                    <form className="flex flex-col" action="/employee">
                        <div className="grid m-10">
                            <div>
                                <label
                                    for="userid"
                                    className="block text-base font-medium leading-6 text-gray-900"
                                >
                                    아이디를 입력하세요
                                </label>
                                <div className="mt-2.5 mb-7">
                                    <input
                                        type="text"
                                        name="userid"
                                        id="userid"
                                        autocomplete="given-id"
                                        className="block w-full rounded-md border border-zinc-300 px py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(e) =>
                                            setUserId(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    for="password"
                                    className="block text-base font-medium leading-6 text-gray-900"
                                >
                                    비밀번호를 입력하세요
                                </label>
                                <div className="mt-2.5 relative">
                                    <input
                                        type={pwType.type}
                                        name="password"
                                        id="password"
                                        autocomplete="given-id"
                                        className="w-full rounded-md border border-zinc-300 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />

                                    <FontAwesomeIcon
                                        icon={pwType.icon}
                                        className="absolute top-4 right-3 mb-1.5 text-gray-500"
                                        onClick={handlePasswordType}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="m-10">
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
        </div>
    );
}
