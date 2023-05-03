import React from "react";

import Button from "../../components/Button";

export default function LoginPage() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100">
                <div className="w-full h-40 p-6 m-3 bg-white rounded shadow lg:w-3/5">
                    <div className="text-2xl font-medium mt-3">
                        <div className="text-2xl font-medium mt-3">
                            로그인페이지!
                        </div>
                        <div className="text-sm font-medium mt-3">
                            최고의 기업. 당신의 미래를 응원합니다.
                        </div>
                    </div>
                </div>
                <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/5">
                    <div className="flex  mb-2">
                        <Button value={"로그인"} name={"login"}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
