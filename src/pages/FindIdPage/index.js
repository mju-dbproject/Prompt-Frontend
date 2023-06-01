import React, { useState, useEffect } from "react";
import Input from "../../components/Atoms/Input/Input";
import instance from "../../api/fetch";
import posts from "../../api/posts";
import { useRecoilState } from "recoil";
import { findIdInfoState } from "../../hooks/recoil/atoms";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import PwdIcon from "../../components/Atoms/Icon/PwIcon";
import { useNavigate } from "react-router";

export default function FindIdPage() {
    const [findIdInfo, setFindIdInfo] = useRecoilState(findIdInfoState);
    useEffect(() => {
        console.log("가져왔나?", findIdInfo);
    });
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const [pwType, setPwType] = useState({
        type: "password",
        visible: false,
        icon: faEye,
    });

    const handleCheck = async (e) => {
        e.preventDefault();
        const all = await fetchIDfind(); // await를 추가
        console.log(all);
        setId(all);
        alert(`회원아이디는 ${all}입니다.`); // Promise 대신 실제 값을 표시
        navigate("/login");
    };

    const fetchIDfind = async () => {
        try {
            const request = await fetch(instance.baseURL + posts.fetchIDfind, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(findIdInfo),
            });
            const response = await request.json();
            return response.userId;
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
            <div className="flex-col items-center w-full h-3/4 p-6 bg-white rounded shadow lg:w-2/5">
                <div className="text-2xl font-medium mt-3 text-center">
                    아이디 찾기
                </div>
                <form className="flex flex-col" action="/employee">
                    <div className="grid m-10">
                        <div>
                            <label
                                htmlFor="userId"
                                className="block text-base font-medium leading-6 text-gray-900"
                            >
                                이름을 입력하세요
                            </label>
                            <div className="mt-2.5 mb-7">
                                <Input name="name" type="text" page="findId" />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="registerNumber"
                                className="block text-base font-medium leading-6 text-gray-900"
                            >
                                주민등록번호를 입력하세요 (-로 분리)
                            </label>
                            <div className="mt-2.5 relative">
                                <Input
                                    name="registerNumber"
                                    page="findId"
                                    type="password"
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
                            onClick={handleCheck}
                        >
                            확인하기
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
