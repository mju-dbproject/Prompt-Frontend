import {
    faChartSimple,
    faFolderClosed,
    faHouse,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Sidebar from "../../components/Sidebar";

export default function MyPage() {
    const menus = [
        { name: "프로젝트 조회", path: "/project" },
        { name: "평가", path: "/evaluation" },
        { name: "마이페이지", path: "/mypage" },
    ];

    const icons = [
        { name: faFolderClosed },
        { name: faChartSimple },
        { name: faHouse },
    ];
    return (
        <div>
            <Header></Header>

            <div className="grid grid-cols-5 mx-auto">
                <Sidebar
                    className="col-span-1"
                    menus={menus}
                    icons={icons}
                ></Sidebar>
                <div className="col-span-4 h-screen px-20 pt-10 auto-rows-auto">
                    <div className="container w-5/6 h-5/6 mx-40 rounded border-2 border-slate-200 shadow">
                        <div className="text-2xl font-medium pt-3 text-center">
                            마이페이지
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-3 px-10">
                            <dl class="divide-y divide-gray-100">
                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt class="text-sm font-medium leading-6 text-gray-900">
                                        Full name
                                    </dt>
                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        Margot Foster
                                    </dd>
                                </div>
                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt class="text-sm font-medium leading-6 text-gray-900">
                                        Application for
                                    </dt>
                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        Backend Developer
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
