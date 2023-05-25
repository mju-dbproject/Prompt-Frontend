import React, { useState, useEffect } from "react";
import Header from "../../components/Molecules/Header/Header";
import Sidebar from "../../components/Molecules/Sidebar/Sidebar";
import Label from "../../components/Atoms/Label/Label";
import { useLocation } from "react-router-dom";

export default function MyPage() {
    const location = useLocation();
    useEffect(() => {
        const admin = location.pathname.startsWith("/manager");
        console.log(admin + "ddd");
    });

    const [isAdmin, setIsAdmin] = useState(null);

    const role = isAdmin ? "경영인" : "직원";

    const [isEditing, setIsEditing] = useState(false);

    const [userInfo, setUserInfo] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        rank: "",
        skill: "",
    });

    const handleValueChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        fetchGetInfo();
    }, []);

    const fetchGetInfo = async () => {
        const request = await fetch(
            "https://2d55b3a9-65f0-40be-9a3b-9348ac5d5303.mock.pstmn.io/info"
        );

        if (request.status === 400 || request.status === 500) {
            // throw await makeError(response)
        }
        const response = await request.json();
        console.log(response);
        setUserInfo(response);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <div>
                <Header role={role} isAdmin={isAdmin}></Header>

                <div className="grid grid-cols-6 mx-auto">
                    <Sidebar
                        className="col-span-1"
                        isAdmin={isAdmin}
                        setIsAdmin={setIsAdmin}
                    ></Sidebar>
                    <div className="bg-gray-100 col-span-5 h-screen px-20 pt-10 auto-rows-auto drop-shadow-md">
                        <div className="bg-white drop-shadow-md container w-5/6 h-4/5 mx-40 rounded border border-gray-300 px-5">
                            <div className="text-2xl font-medium pt-10 pb-4 text-start">
                                개인정보
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="grid grid-cols-2 gap-2 pt-4 px-0">
                                    <div className="px-2 py-3">
                                        <Label value="이름" />
                                        <input
                                            value={userInfo.name}
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="on"
                                            className="w-3/5 ml-3.5 rounded-md border-0.5 border-gray-300  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                            onChange={(e) =>
                                                handleValueChange(e)
                                            }
                                        ></input>{" "}
                                    </div>

                                    <div className="px-2 py-3">
                                        <Label value="전화번호" />
                                        <input
                                            value={userInfo.phoneNumber}
                                            type="text"
                                            name="phoneNumber"
                                            id="phoneNumber"
                                            autoComplete="on"
                                            className="w-3/5 ml-3.5 pl-1 rounded-md border-0.5 border-gray-300  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                            onChange={(e) =>
                                                handleValueChange(e)
                                            }
                                        ></input>{" "}
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-2 pt-2 px-0">
                                    <div className="px-2 py-3">
                                        <Label value="이메일" />
                                        <input
                                            value={userInfo.email}
                                            type="text"
                                            name="email"
                                            id="email"
                                            autoComplete="on"
                                            className="w-5/6 rounded-md border-0.5 border-gray-300  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                            onChange={(e) =>
                                                handleValueChange(e)
                                            }
                                        ></input>{" "}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 pt-2 px-0">
                                    <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <Label value="직급" />
                                        <div className="text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            수석
                                        </div>
                                    </div>

                                    <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <Label value="포지션" />
                                        <div className="text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            개발자
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-2 pt-3 px-0">
                                    <div className="px-2 py-2">
                                        <Label value="스킬" />
                                        <input
                                            value={userInfo.skill}
                                            type="text"
                                            name="skill"
                                            id="skill"
                                            autoComplete="given-skill"
                                            className="w-5/6 ml-3.5 rounded-md border-0.5 border-gray-300  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                            onChange={(e) =>
                                                handleValueChange(e)
                                            }
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-10 mt-14 flex justify-end">
                                <button
                                    type="submit"
                                    className="flex w-1/5 justify-center rounded-md bg-sub-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => alert("저장되었습니다!")}
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
                <Header role={role} isAdmin={isAdmin}></Header>

                <div className="grid grid-cols-6 mx-auto">
                    <Sidebar
                        className="col-span-1"
                        isAdmin={isAdmin}
                        setIsAdmin={setIsAdmin}
                    ></Sidebar>
                    <div className="bg-gray-100 col-span-5 h-screen px-20 pt-10 auto-rows-auto ">
                        <div className="bg-white drop-shadow-md container w-5/6 h-4/5 mx-40 rounded border border-gray-300 px-5">
                            <div className="text-2xl font-medium pt-10 pb-4 text-start">
                                개인정보
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="grid grid-cols-2 gap-2 pt-4 px-0">
                                    <div className="px-2 py-3">
                                        <Label value="이름" />
                                        <span className="w-5/6 ml-3.5 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {userInfo.name}
                                        </span>
                                    </div>

                                    <div className="px-2 py-3">
                                        <Label value="전화번호" />
                                        <span className="w-5/6 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {userInfo.phoneNumber}
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-2 pt-2 px-0">
                                    <div className="px-2 py-3">
                                        <Label value="이메일" />
                                        <span className="w-5/6 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {userInfo.email}
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 pt-2 px-0">
                                    <div className="px-2 py-3">
                                        <Label value="직급" />
                                        <span className="w-5/6 ml-3.5 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {userInfo.rank}
                                        </span>
                                    </div>

                                    <div className="px-2 py-3">
                                        <Label value="포지션" />
                                        <span className="w-5/6 ml-3.5 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {userInfo.position}
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-2 pt-3 px-0">
                                    <div className="px-2 py-3">
                                        <Label value="스킬" />
                                        <span className="w-5/6 ml-4 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {userInfo.skill}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-10 mt-16 flex justify-end">
                                <button
                                    type="submit"
                                    className="flex w-1/5 justify-center rounded-md bg-sub-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
