import React, { useState, useEffect } from "react";
import PwdIcon from "../../components/Atoms/Icon/PwIcon";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import Input from "../../components/Atoms/Input/Input";
import instance from "../../api/fetch";
import posts from "../../api/posts";
import { useRecoilState } from "recoil";
import { passwordResetState } from "../../hooks/recoil/atoms";
import { useNavigate } from "react-router";

export default function PasswordResetPage() {
    const [pwType, setPwType] = useState({
        type: "password",
        visible: false,
        icon: faEye,
    });

    const navigate = useNavigate();

    const [passwordRestInfo, setPasswordResetInfo] =
        useRecoilState(passwordResetState);

    useEffect(() => {
        console.log("가져왔나?", passwordRestInfo);
    });

    const handleSubmit = () => {
        fetchPasswordEdit();
        alert("비밀번호가 변경되었습니다!");
        navigate("/login");
    };
    const fetchPasswordEdit = async () => {
        const request = await fetch(
            instance.baseURL + posts.fetchPasswordEdit,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(passwordRestInfo),
            }
        );
        const response = await request;
        console.log(response);
    };
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
            <div className="flex-col items-center w-full h-3/4 p-6 bg-white rounded shadow lg:w-2/5">
                <div className="text-2xl font-medium mt-3 text-center">
                    비밀번호 재설정
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
                                <Input
                                    name="userId"
                                    type="userId"
                                    page="repassword"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="newPassword"
                                className="block text-base font-medium leading-6 text-gray-900"
                            >
                                변경할 비밀번호를 입력하세요
                            </label>
                            <div className="mt-2.5 mb-7 relative">
                                <Input
                                    name="newPassword"
                                    page="repassword"
                                    type={pwType.type}
                                />
                                <PwdIcon
                                    pwType={pwType}
                                    setPwType={setPwType}
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="checkPassword"
                                className="block text-base font-medium leading-6 text-gray-900"
                            >
                                변경할 비밀번호를 재입력하세요
                            </label>
                            <div className="mt-2.5 relative">
                                <Input
                                    name="checkPassword"
                                    page="repassword"
                                    type={pwType.type}
                                />

                                <PwdIcon
                                    pwType={pwType}
                                    setPwType={setPwType}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="m-8">
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-sub-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={handleSubmit}
                        >
                            확인하기
                        </button>
                    </div>
                </form>
                <p className="text-center text-sm text-gray-500">
                    로그인하시겠습니까? &nbsp;
                    <a
                        href="/login"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                        로그인하기
                    </a>
                </p>
            </div>
        </div>
    );
}
