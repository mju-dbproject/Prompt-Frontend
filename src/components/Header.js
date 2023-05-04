import React from "react";
import Button from "./Button";

export default function Header() {
    return (
        <header class="grid grid-cols-5">
            <div class="col-span-1 border-r-2 border-indigo-500"></div>
            <div
                class="col-span-4 bg-gray-200 flex items-center p-5 lg:px-8"
                aria-label="Global"
            >
                <a
                    href="#"
                    class="text-xl font-semibold leading-5 text-gray-900"
                >
                    (주) 프람트 솔루션
                </a>
                <div class="text-base font-normal leading-5 text-gray-600">
                    &nbsp;(직원/홍길동님)
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div>
                        <Button value={"로그아웃"} name={"logout"}></Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
