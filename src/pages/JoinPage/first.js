import { React, useEffect, useRef } from "react";
import Stepper from "bs-stepper";
import "bootstrap/dist/css/bootstrap.min.css";
import "bs-stepper/dist/css/bs-stepper.min.css";

export default function JoinPageFirst() {
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
                <div className="flex-col items-center w-full h-3/4 p-6 bg-white rounded shadow lg:w-2/5">
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
                                            Password
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
                                            Validate
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="bs-stepper-content">
                                <form onSubmit={onSubmit}>
                                    <div id="test-l-1" className="content">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                placeholder="Enter email"
                                            />
                                        </div>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() =>
                                                stepperRef.current.next()
                                            }
                                        >
                                            Next
                                        </button>
                                    </div>
                                    <div id="test-l-2" className="content">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() =>
                                                stepperRef.current.next()
                                            }
                                        >
                                            Next
                                        </button>
                                    </div>
                                    <div
                                        id="test-l-3"
                                        className="content text-center"
                                    >
                                        <button
                                            type="submit"
                                            className="btn btn-primary mt-5"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <form className="flex flex-col">
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
                                        className="block w-full rounded-md border-0 px py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                        type="password"
                                        name="password"
                                        id="password"
                                        autocomplete="given-id"
                                        className="block w-full rounded-md border-0 px py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
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
