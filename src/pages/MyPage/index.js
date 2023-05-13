import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { useLocation } from "react-router-dom";

import requests from "../../api/requests";

export default function MyPage() {
    const location = useLocation();

    const [admin, setAdmin] = useState("");

    const role = admin === "manager" ? "경영인" : "직원";

    useEffect(() => {
        const path = location.pathname.split("/");
        setAdmin(path[1]);
    }, [location]);

    const [isEditing, setIsEditing] = useState(false);

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [rank, setRank] = useState("");
    const [position, setPosition] = useState("");
    const [skill, setSkill] = useState("");

    useEffect(() => {
        fetchGetInfo();
    }, []);

    const fetchGetInfo = async () => {
        const res = await fetch(requests.fetchUserInfo)
            .then(console.log("success"))
            .then((res) => res.json())
            .then(console.log);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <div>
                <Header role={role}></Header>

                <div className="grid grid-cols-6 mx-auto">
                    <Sidebar className="col-span-1" admin={admin}></Sidebar>
                    <div className="col-span-5 h-screen px-20 pt-10 auto-rows-auto">
                        <div className="container w-5/6 h-4/5 mx-40 rounded border-2 border-slate-200 px-5">
                            <div className="text-2xl font-medium pt-10 pb-4 text-start">
                                개인정보
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="grid grid-cols-2 gap-2 pt-4 px-0">
                                    <div className="px-2 py-3">
                                        <label className="text-md font-medium leading-6 text-gray-900 mr-10">
                                            이름
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autocomplete="given-name"
                                            className="w-3/5 rounded-md border-1 border-zinc-300 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        ></input>{" "}
                                    </div>

                                    <div className="px-2 py-3">
                                        <label className="text-md font-medium leading-6 text-gray-900 mr-10">
                                            전화번호
                                        </label>
                                        <input
                                            type="text"
                                            name="phone-number"
                                            id="phone-number"
                                            autocomplete="given-phone-number"
                                            className="w-3/5 pl-1 rounded-md border-1 border-zinc-300 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                            onChange={(e) => {
                                                setPhoneNumber(e.target.value);
                                            }}
                                        ></input>{" "}
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-2 pt-2 px-0">
                                    <div className="px-2 py-3">
                                        <label className="text-md font-medium leading-6 text-gray-900 mr-7">
                                            이메일
                                        </label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            autocomplete="given-email"
                                            className="w-5/6 rounded-md border-1 border-zinc-300 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                        ></input>{" "}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 pt-2 px-0">
                                    <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <div className="text-md font-medium leading-6 text-gray-900">
                                            직급
                                        </div>
                                        <div className="text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            수석
                                        </div>
                                    </div>

                                    <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <div className="text-md font-medium leading-6 text-gray-900">
                                            포지션
                                        </div>
                                        <div className="text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            개발자
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-2 pt-3 px-0">
                                    <div className="px-2 py-2">
                                        <label className="text-md font-medium leading-6 text-gray-900 mr-10">
                                            스킬
                                        </label>
                                        <input
                                            type="text"
                                            name="skill"
                                            id="skill"
                                            autocomplete="given-skill"
                                            className="w-5/6 rounded-md border-1 border-zinc-300 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                            onChange={(e) =>
                                                setSkill(e.target.value)
                                            }
                                        ></input>{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="mx-10 mt-14 flex justify-end">
                                <button
                                    type="submit"
                                    className="flex w-1/5 justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={handleSave}
                                >
                                    저장하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <Header role={role}></Header>

                <div className="grid grid-cols-6 mx-auto">
                    <Sidebar className="col-span-1" admin={admin}></Sidebar>
                    <div className="col-span-5 h-screen px-20 pt-10 auto-rows-auto">
                        <div className="container w-5/6 h-4/5 mx-40 rounded border-2 border-slate-200 px-5">
                            <div className="text-2xl font-medium pt-10 pb-4 text-start">
                                개인정보
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="grid grid-cols-2 gap-2 pt-4 px-0">
                                    <div className="px-2 py-3">
                                        <span className="text-md font-medium leading-6 text-gray-900 mr-20">
                                            이름
                                        </span>
                                        <span className="w-5/6 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            홍길동
                                        </span>
                                    </div>

                                    <div className="px-2 py-3">
                                        <span className="text-md font-medium leading-6 text-gray-900 mr-20">
                                            전화번호
                                        </span>
                                        <span className="w-5/6 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            010-1234-5678
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-2 pt-2 px-0">
                                    <div className="px-2 py-3">
                                        <span className="text-md font-medium leading-6 text-gray-900 mr-16 pr-1">
                                            이메일
                                        </span>
                                        <span className="w-5/6 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            ohoh@gamil.com
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 pt-2 px-0">
                                    <div className="px-2 py-3">
                                        <span className="text-md font-medium leading-6 text-gray-900 mr-20">
                                            직급
                                        </span>
                                        <span className="w-5/6 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            수석
                                        </span>
                                    </div>

                                    <div className="px-2 py-3">
                                        <span className="text-md font-medium leading-6 text-gray-900 mr-24">
                                            포지션
                                        </span>
                                        <span className="w-5/6 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            개발자
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-2 pt-3 px-0">
                                    <div className="px-2 py-3">
                                        <span className="text-md font-medium leading-6 text-gray-900 mr-20">
                                            스킬
                                        </span>
                                        <span className="w-5/6 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            python, java
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-10 mt-16 flex justify-end">
                                <button
                                    type="submit"
                                    className="flex w-1/5 justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => setIsEditing(true)}
                                >
                                    수정하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
