import React from "react";
import Button from "./Button";

export default function Header({ role }) {
    return (
        <header className="grid grid-cols-6 w-full border-b-2 border-gray-300">
            <div className="col-span-1 border-r-2 border-gray-300"></div>
            <div
                className="col-span-5 flex items-center p-3 lg:px-8"
                aria-label="Global"
            >
                <a
                    href="/employee"
                    className="text-xl font-semibold leading-5 text-gray-900 no-underline"
                >
                    (주) 프람트 솔루션
                </a>
                <div className="text-base font-normal leading-5 text-gray-600">
                    &nbsp;({role}/홍길동님)
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
