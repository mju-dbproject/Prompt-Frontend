import { React, useEffect, useRef, useState } from "react";
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

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {});

    useEffect(() => {
        stepperRef.current = new Stepper(document.querySelector("#stepper1"), {
            linear: false,
            animation: true,
        });
    }, []);

    // const fetchPostData(

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
                                                    className="block w-full rounded-md border border-zinc-300 px py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>

                                            <label
                                                for="password"
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
                                                    className="block w-full rounded-md border border-zinc-300 px py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                                    className="block w-full rounded-md border border-zinc-300 px py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="flex w-full mt-48 justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            onClick={() =>
                                                stepperRef.current.next()
                                            }
                                        >
                                            다음
                                        </button>
                                    </div>
                                    <div id="test-l-2" className="content">
                                        <div className="form-group mt-2">
                                            <label
                                                for="name"
                                                className="block text-base font-medium leading-6 text-gray-900"
                                            >
                                                이름을 입력하세요
                                            </label>
                                            <div className="mt-2 mb-4">
                                                <input
                                                    type="name"
                                                    name="name"
                                                    id="id"
                                                    autocomplete="given-id"
                                                    className="block w-full rounded-md border border-zinc-300 px py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>

                                            <label
                                                for="registration-number"
                                                className="block text-base font-medium leading-6 text-gray-900"
                                            >
                                                주민등록번호를 입력하세요
                                                (-제외)
                                            </label>
                                            <div className="mt-2 mb-4">
                                                <input
                                                    type="password"
                                                    name="registration-number"
                                                    id="registration-number"
                                                    autocomplete="given-id"
                                                    className="block w-full rounded-md border border-zinc-300 px py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>

                                            <label
                                                for="email"
                                                className="block text-base font-medium leading-6 text-gray-900"
                                            >
                                                이메일을 입력하세요
                                            </label>
                                            <div className="mt-2 mb-4">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    autocomplete="given-id"
                                                    className="block w-full rounded-md border border-zinc-300 px py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            <label
                                                for="phone-number"
                                                className="block text-base font-medium leading-6 text-gray-900"
                                            >
                                                전화번호를 입력하세요 (-제외)
                                            </label>
                                            <div className="mt-2 mb-4">
                                                <input
                                                    type="text"
                                                    name="phone-number"
                                                    id="phone-number"
                                                    autocomplete="given-id"
                                                    className="block w-full rounded-md border border-zinc-300 px py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            <label
                                                for="education"
                                                className="block text-base font-medium leading-6 text-gray-900"
                                            >
                                                최종학력을 선택하세요
                                            </label>
                                            <div className="mt-2 mb-4">
                                                <select
                                                    id="education"
                                                    name="education"
                                                    placeholder=""
                                                    className="px-2 block w-full rounded-md border border-zinc-300 px py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                >
                                                    <option value="1">
                                                        고등학교
                                                    </option>
                                                    <option value="2">
                                                        대학교
                                                    </option>
                                                    <option value="3">
                                                        석사
                                                    </option>
                                                    <option value="4">
                                                        박사
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="flex w-full mt-7 justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            onClick={() =>
                                                stepperRef.current.next()
                                            }
                                        >
                                            다음
                                        </button>
                                    </div>
                                    <div id="test-l-3" className="content">
                                        <div className="form-group mt-2">
                                            <label
                                                for="experience-year"
                                                className="block text-base font-medium leading-6 text-gray-900"
                                            >
                                                경력년수를 입력하세요
                                            </label>
                                            <div className="mt-2 mb-4">
                                                <input
                                                    type="text"
                                                    name="experience-year"
                                                    id="experience-year"
                                                    autocomplete="given-id"
                                                    className="block w-full rounded-md border border-zinc-300 px py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>

                                            <label
                                                for="position"
                                                className="block text-base font-medium leading-6 text-gray-900"
                                            >
                                                포지션을 선택하세요
                                            </label>
                                            <div className="mt-2 mb-4">
                                                <select
                                                    id="position"
                                                    name="position"
                                                    placeholder=""
                                                    className="px-2 block w-full rounded-md border border-zinc-300 px py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                >
                                                    <option value="1">
                                                        개발자
                                                    </option>
                                                    <option value="2">
                                                        영업관리
                                                    </option>
                                                    <option value="3">
                                                        경영관리
                                                    </option>
                                                    <option value="4">
                                                        사업관리
                                                    </option>
                                                    <option value="5">
                                                        마케팅
                                                    </option>
                                                    <option value="6">
                                                        연구개발
                                                    </option>
                                                </select>
                                            </div>

                                            <label
                                                for="rank"
                                                className="block text-base font-medium leading-6 text-gray-900"
                                            >
                                                직급을 선택하세요
                                            </label>
                                            <div className="mt-2 mb-4">
                                                <select
                                                    id="rank"
                                                    name="rank"
                                                    placeholder=""
                                                    className="px-2 block w-full rounded-md border border-zinc-300 px py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                >
                                                    <option value="1">
                                                        수석
                                                    </option>
                                                    <option value="2">
                                                        책임
                                                    </option>
                                                    <option value="3">
                                                        선임
                                                    </option>
                                                    <option value="4">
                                                        전임
                                                    </option>
                                                </select>
                                            </div>

                                            <label
                                                for="skill"
                                                className="block text-base font-medium leading-6 text-gray-900"
                                            >
                                                스킬을 입력하세요
                                            </label>
                                            <div className="mt-2 mb-4">
                                                <input
                                                    type="text"
                                                    name="skill"
                                                    id="skill"
                                                    autocomplete="given-id"
                                                    className="block w-full rounded-md border border-zinc-300 px py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
