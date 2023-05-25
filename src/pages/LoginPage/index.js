import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Atoms/Input/Input";
import PwdIcon from "../../components/Atoms/Icon/PwIcon";

export default function LoginPage() {
    const navigate = useNavigate();

    const [isAdmin, setIsAdmin] = useState(true);

    const [pwType, setPwType] = useState({
        type: "password",
        visible: false,
        icon: faEye,
    });

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        const response = await fetch(
            "https://2d55b3a9-65f0-40be-9a3b-9348ac5d5303.mock.pstmn.io/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const res = await response.json();
        console.log(res);
        // .then(navigate("/manager"));
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
                                    htmlFor="userid"
                                    className="block text-base font-medium leading-6 text-gray-900"
                                >
                                    아이디를 입력하세요
                                </label>
                                <div className="mt-2.5 mb-7">
                                    <Input
                                        label={userId}
                                        type="text"
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
                                    <Input
                                        label={userId}
                                        type={pwType.type}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
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
        </div>
    );
}
