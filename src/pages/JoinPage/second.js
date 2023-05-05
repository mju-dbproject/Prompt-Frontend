import React from "react";

export default function JoinPageSecond() {
    return (
        <div>
            <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
                <div className="flex-col items-center w-full h-3/4 p-6 bg-white rounded shadow lg:w-2/5">
                    <div className="text-2xl font-medium mt-3 text-center">
                        회원가입
                    </div>
                    <form className="flex flex-col" action="/join/step2">
                        <div className="grid m-10">
                            <div>
                                <label
                                    for="id"
                                    className="block text-base font-medium leading-6 text-gray-900"
                                >
                                    아이디를 입력하세요
                                </label>
                                <div className="mt-2.5 mb-7">
                                    <input
                                        type="text"
                                        name="id"
                                        id="id"
                                        autocomplete="given-id"
                                        className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    for="id"
                                    className="block text-base font-medium leading-6 text-gray-900"
                                >
                                    비밀번호를 입력하세요
                                </label>
                                <div className="mt-2.5 mb-7">
                                    <input
                                        type="text"
                                        name="id"
                                        id="id"
                                        autocomplete="given-id"
                                        className="block w-full rounded-md border-0 px py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    for="id"
                                    className="block text-base font-medium leading-6 text-gray-900"
                                >
                                    비밀번호를 재입력하세요
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="id"
                                        id="id"
                                        autocomplete="given-id"
                                        className="block w-full rounded-md border-0 px py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="m-10">
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
