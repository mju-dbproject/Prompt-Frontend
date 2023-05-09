import { React, useEffect, useRef } from "react";
import Stepper from "bs-stepper";
import "bootstrap/dist/css/bootstrap.min.css";
import "bs-stepper/dist/css/bs-stepper.min.css";

import "./join.css";

export default function JoinPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const stepperRef = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        stepperRef.current = new Stepper(document.querySelector("#stepper1"), {
            linear: false,
            animation: true,
        });
    }, []);

    return (
        <div>
            <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
                <div className="box flex-col items-center w-screen h-full p-6 bg-white rounded shadow lg:w-2/5">
                    <div className="text-2xl font-medium mt-3 text-center">
                        회원가입
                    </div>

                    <div>
                        <div id="stepper1" className="bs-stepper">
                            <div className="bs-stepper-header">
                                <div className="step" data-target="#test-l-1">
                                    <button className="step-trigger">
                                        <span className="bs-stepper-circle">
                                            1
                                        </span>
                                        <span className="bs-stepper-label">
                                            Email
                                        </span>
                                    </button>
                                </div>
                                <div className="line"></div>
                                <div className="step" data-target="#test-l-2">
                                    <button className="step-trigger">
                                        <span className="bs-stepper-circle">
                                            2
                                        </span>
                                        <span className="bs-stepper-label">
                                            Personal
                                        </span>
                                    </button>
                                </div>
                                <div className="line"></div>
                                <div className="step" data-target="#test-l-3">
                                    <button className="step-trigger">
                                        <span className="bs-stepper-circle">
                                            3
                                        </span>
                                        <span className="bs-stepper-label">
                                            info
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="bs-stepper-content">
                                <form onSubmit={onSubmit}>
                                    <div id="test-l-1" className="content">
                                        <div className="form-group mt-3">
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
                                                    className="block w-full rounded-md border-0 px py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>

                                            <label
                                                for="id"
                                                className="block text-base font-medium leading-6 text-gray-900"
                                            >
                                                비밀번호를 입력하세요
                                            </label>
                                            <div className="mt-2.5 mb-7">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    autocomplete="given-id"
                                                    className="block w-full rounded-md border-0 px py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>

                                            <label
                                                for="repassword"
                                                className="block text-base font-medium leading-6 text-gray-900"
                                            >
                                                비밀번호를 재입력하세요
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    type="password"
                                                    name="repassword"
                                                    id="repassword"
                                                    autocomplete="given-id"
                                                    className="block w-full rounded-md border-0 px py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="flex w-full mt-44 justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            onClick={() =>
                                                stepperRef.current.next()
                                            }
                                        >
                                            next
                                        </button>
                                    </div>
                                    <div id="test-l-2" className="content">
                                        <div className="form-group mt-2">
                                            <label
                                                for="id"
                                                className="block text-base font-medium leading-6 text-gray-900"
                                            >
                                                이름을 입력하세요
                                            </label>
                                            <div className="mt-2 mb-4">
                                                <input
                                                    type="text"
                                                    name="id"
                                                    id="id"
                                                    autocomplete="given-id"
                                                    className="block w-full rounded-md border-0 px py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>

                                            <label
                                                for="id"
                                                className="block text-base font-medium leading-6 text-gray-900"
                                            >
                                                주민등록번호를 입력하세요
                                            </label>
                                            <div className="mt-2 mb-4">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    autocomplete="given-id"
                                                    className="block w-full rounded-md border-0 px py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>

                                            <label
                                                for="repassword"
                                                className="block text-base font-medium leading-6 text-gray-900"
                                            >
                                                이메일을 입력하세요
                                            </label>
                                            <div className="mt-2 mb-4">
                                                <input
                                                    type="password"
                                                    name="repassword"
                                                    id="repassword"
                                                    autocomplete="given-id"
                                                    className="block w-full rounded-md border-0 px py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            <label
                                                for="repassword"
                                                className="block text-base font-medium leading-6 text-gray-900"
                                            >
                                                전화번호를 입력하세요
                                            </label>
                                            <div className="mt-2 mb-4">
                                                <input
                                                    type="password"
                                                    name="repassword"
                                                    id="repassword"
                                                    autocomplete="given-id"
                                                    className="block w-full rounded-md border-0 px py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            <label
                                                for="repassword"
                                                className="block text-base font-medium leading-6 text-gray-900"
                                            >
                                                최종학력을 선택하세요
                                            </label>
                                            <div className="mt-2 mb-4">
                                                <input
                                                    type="password"
                                                    name="repassword"
                                                    id="repassword"
                                                    autocomplete="given-id"
                                                    className="block w-full rounded-md border-0 px py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="flex w-full mt-7 justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            onClick={() =>
                                                stepperRef.current.next()
                                            }
                                        >
                                            next
                                        </button>
                                    </div>
                                    <div id="test-l-3" className="content">
                                        <div className="form-group mt-2">
                                            <label
                                                for="id"
                                                className="block text-base font-medium leading-6 text-gray-900"
                                            >
                                                경력년수를 입력하세요
                                            </label>
                                            <div className="mt-2 mb-4">
                                                <input
                                                    type="text"
                                                    name="id"
                                                    id="id"
                                                    autocomplete="given-id"
                                                    className="block w-full rounded-md border-0 px py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>

                                            <label
                                                for="id"
                                                className="block text-base font-medium leading-6 text-gray-900"
                                            >
                                                포지션을 선택하세요
                                            </label>
                                            <div className="mt-2 mb-4">
                                                <select
                                                    placeholder=""
                                                    className="px-2 block w-full rounded-md border-0 px py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                >
                                                    <option>개발자</option>
                                                    <option>영업관리</option>
                                                    <option>경영관리</option>
                                                    <option>사업관리</option>
                                                    <option>마케팅</option>
                                                    <option>연구개발</option>
                                                </select>
                                            </div>

                                            <label
                                                for="repassword"
                                                className="block text-base font-medium leading-6 text-gray-900"
                                            >
                                                직급을 선택하세요
                                            </label>
                                            <div className="mt-2 mb-4">
                                                <select
                                                    placeholder=""
                                                    className="px-2 block w-full rounded-md border-0 px py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                >
                                                    <option>수석</option>
                                                    <option>책임</option>
                                                    <option>선임</option>
                                                    <option>전임</option>
                                                </select>
                                            </div>

                                            <label
                                                for="repassword"
                                                className="block text-base font-medium leading-6 text-gray-900"
                                            >
                                                스킬을 입력하세요
                                            </label>
                                            <div className="mt-2 mb-4">
                                                <input
                                                    type="password"
                                                    name="repassword"
                                                    id="repassword"
                                                    autocomplete="given-id"
                                                    className="block w-full rounded-md border-0 px py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="final-submit flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            가입하기
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
