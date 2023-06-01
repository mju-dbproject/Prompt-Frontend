import React from "react";
import { useRecoilState } from "recoil";
import { adminState, nameState } from "../../../hooks/recoil/atoms";
import Button from "../../Atoms/Button/Button";

export default function Header() {
    const [isAdmin, setIsAdmin] = useRecoilState(adminState);
    const [name, setName] = useRecoilState(nameState);
    const role = isAdmin ? "관리자" : "직원";
    const home = isAdmin ? "manager" : "employee";
    console.log(name, "dms 이름");
    return (
        <header className="grid grid-cols-6 w-full border-b border-gray-300 ">
            <div className="col-span-1 border-r border-gray-300 bg-main-color"></div>
            <div
                className="col-span-5 flex items-center p-3 lg:px-8 "
                aria-label="Global"
            >
                <a
                    href={`/${home}/projectList`}
                    className="text-xl text-black font-semibold leading-5 no-underline"
                >
                    (주) 프람트 솔루션
                </a>
                <div className="text-base font-normal leading-5 text-gray-900">
                    &nbsp;({role}/{name}님)
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div>
                        <Button value={"로그아웃"} name={"logout"}></Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
