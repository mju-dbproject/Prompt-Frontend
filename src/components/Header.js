import React from "react";
import Button from "./Button";

export default function Header() {
    return (
        <header>
            <nav
                class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <a
                    href="#"
                    class="text-xl font-semibold leading-6 text-gray-900"
                >
                    (주) 프람트 솔루션
                </a>
                <div class="text-base font-normal leading-6 text-gray-600">
                    &nbsp;(직원/홍길동님)
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div>
                        <Button value={"로그아웃"} name={"logout"}></Button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
