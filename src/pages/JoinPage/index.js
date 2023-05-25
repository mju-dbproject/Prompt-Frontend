import { React, useEffect, useRef, useState } from "react";
import Stepper from "bs-stepper";
import "bootstrap/dist/css/bootstrap.min.css";
import "bs-stepper/dist/css/bs-stepper.min.css";

import "./join.css";
import Input from "../../components/Atoms/Input/Input";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import PwdIcon from "../../components/Atoms/Icon/PwIcon";
import { useNavigate } from "react-router";

export default function JoinPage() {
    const [pwType, setPwType] = useState({
        type: "password",
        visible: false,
        icon: faEye,
    });

    const stepperRef = useRef(null);

    const navigate = useNavigate();

    const educationList = ["고등학교", "대학교", "석사", "박사"];
    const positionList = [
        "개발자",
        "영업관리",
        "경영관리",
        "사업관리",
        "마케팅",
        "연구개발",
    ];
    const rankList = ["수석", "책임", "선임", "전임"];

    const [joinInfo, setJoinInfo] = useState({
        userId: "",
        password: "",
        repassword: "",
        name: "",
        registrationNumber: "",
        email: "",
        phoneNumber: "",
        education: "",
        experienceYear: "",
        position: "",
        rank: "",
        skill: "",
    });

    useEffect(() => {
        stepperRef.current = new Stepper(document.querySelector("#stepper1"), {
            linear: false,
            animation: true,
        });
    }, []);

    const handleIdValidation = async () => {
        const response = await fetch(
            "https://2d55b3a9-65f0-40be-9a3b-9348ac5d5303.mock.pstmn.io/employee/check-id",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: joinInfo.userId,
                }),
            }
        );

        if (response.status === 400 || response.status === 500) {
            console.log("Error occurred..");
        }

        console.log(response);
        stepperRef.current.next();
    };

    const handleValueChange = (e) => {
        setJoinInfo({
            ...joinInfo,
            [e.target.label]: e.target.value,
        });
        console.log(joinInfo);
    };

    return (
        <div>
            <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
                <div className="box flex-col items-center w-screen h-full p-6 bg-white rounded shadow lg:w-2/5">
                    <div className="text-2xl font-medium mt-3 text-center">
                        회원가입
                    </div>

                    <div id="stepper1" className="bs-stepper">
                        <div className="bs-stepper-header">
                            <div className="step" data-target="#test-l-1">
                                <button className="step-trigger">
                                    <span className="bs-stepper-circle">1</span>
                                    <span className="bs-stepper-label">
                                        ID/PWD
                                    </span>
                                </button>
                            </div>
                            <div className="line"></div>
                            <div className="step" data-target="#test-l-2">
                                <button className="step-trigger">
                                    <span className="bs-stepper-circle">2</span>
                                    <span className="bs-stepper-label">
                                        Personal
                                    </span>
                                </button>
                            </div>
                            <div className="line"></div>
                            <div className="step" data-target="#test-l-3">
                                <button className="step-trigger">
                                    <span className="bs-stepper-circle">3</span>
                                    <span className="bs-stepper-label">
                                        info
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="bs-stepper-content">
                            <form>
                                <div id="test-l-1" className="content">
                                    <div className="form-group mt-2">
                                        <label
                                            for="id"
                                            className="block text-base font-medium leading-6 text-gray-900"
                                        >
                                            아이디를 입력하세요
                                        </label>
                                        <div className="mt-2.5 mb-7">
                                            <Input
                                                label="userId"
                                                type="text"
                                                onChange={(e) =>
                                                    handleValueChange(e)
                                                }
                                            />
                                        </div>

                                        <label
                                            for="password"
                                            className="block text-base font-medium leading-6 text-gray-900"
                                        >
                                            비밀번호를 입력하세요
                                        </label>
                                        <div className="mt-2.5 mb-7 relative">
                                            <Input
                                                label="password"
                                                type={pwType.type}
                                            />
                                            <PwdIcon
                                                pwType={pwType}
                                                setPwType={setPwType}
                                            />
                                        </div>

                                        <label
                                            for="repassword"
                                            className="block text-base font-medium leading-6 text-gray-900"
                                        >
                                            비밀번호를 재입력하세요
                                        </label>
                                        <div className="mt-2.5 relative">
                                            <Input
                                                label="repassword"
                                                type={pwType.type}
                                                onChange={(e) => {
                                                    handleValueChange(e);
                                                }}
                                            />
                                            <PwdIcon
                                                pwType={pwType}
                                                setPwType={setPwType}
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="flex w-full mt-44 justify-center rounded-md bg-sub-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={async (e) => {
                                            e.preventDefault();
                                            handleIdValidation();
                                        }}
                                    >
                                        다음
                                    </button>
                                </div>
                                <div id="test-l-2" className="content">
                                    <div className="form-group mt-2">
                                        <label
                                            htmlFor="name"
                                            className="block text-base font-medium leading-6 text-gray-900"
                                        >
                                            이름을 입력하세요
                                        </label>
                                        <div className="mt-2 mb-4">
                                            <Input
                                                label="name"
                                                type="text"
                                                onChange={(e) =>
                                                    handleValueChange(e)
                                                }
                                            />
                                        </div>

                                        <label
                                            htmlFor="registration-number"
                                            className="block text-base font-medium leading-6 text-gray-900"
                                        >
                                            주민등록번호를 입력하세요 (-제외)
                                        </label>
                                        <div className="mt-2 mb-4">
                                            <Input
                                                label="registrationNumber"
                                                type="password"
                                                onChange={(e) =>
                                                    handleValueChange(e)
                                                }
                                            />
                                        </div>

                                        <label
                                            htmlFor="email"
                                            className="block text-base font-medium leading-6 text-gray-900"
                                        >
                                            이메일을 입력하세요
                                        </label>
                                        <div className="mt-2 mb-4">
                                            <Input
                                                label="email"
                                                type="text"
                                                onChange={(e) =>
                                                    handleValueChange(e)
                                                }
                                            />
                                        </div>
                                        <label
                                            htmlFor="phone-number"
                                            className="block text-base font-medium leading-6 text-gray-900"
                                        >
                                            전화번호를 입력하세요 (-제외)
                                        </label>
                                        <div className="mt-2 mb-4">
                                            <Input
                                                label="phoneNumber"
                                                type="text"
                                                onChange={(e) =>
                                                    handleValueChange(e)
                                                }
                                            />
                                        </div>
                                        <label
                                            htmlFor="education"
                                            className="block text-base font-medium leading-6 text-gray-900"
                                        >
                                            최종학력을 입력하세요 (예,
                                            명지대학교 학사 졸업)
                                        </label>
                                        <div className="mt-2 mb-4">
                                            <Input
                                                label="education"
                                                type="text"
                                                onChange={(e) =>
                                                    handleValueChange(e)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="flex w-full mt-7 justify-center rounded-md bg-sub-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            stepperRef.current.next();
                                        }}
                                    >
                                        다음
                                    </button>
                                </div>
                                <div id="test-l-3" className="content">
                                    <div className="form-group mt-2">
                                        <label
                                            htmlFor="experience-year"
                                            className="block text-base font-medium leading-6 text-gray-900"
                                        >
                                            경력년수를 입력하세요
                                        </label>
                                        <div className="mt-2 mb-4">
                                            <Input
                                                label="experienceYear"
                                                type="text"
                                                onChange={(e) =>
                                                    handleValueChange(e)
                                                }
                                            />
                                        </div>

                                        <label
                                            htmlFor="position"
                                            className="block text-base font-medium leading-6 text-gray-900"
                                        >
                                            포지션을 선택하세요
                                        </label>
                                        <div className="mt-2 mb-4">
                                            <select
                                                onChange={(e) =>
                                                    handleValueChange(e)
                                                }
                                                value="position"
                                                id="position"
                                                name="position"
                                                className="px-2 block w-full rounded-md border border-zinc-300 px py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            >
                                                {positionList.map((item) => (
                                                    <option
                                                        value={item}
                                                        key={item}
                                                    >
                                                        {item}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <label
                                            htmlFor="rank"
                                            className="block text-base font-medium leading-6 text-gray-900"
                                        >
                                            직급을 선택하세요
                                        </label>
                                        <div className="mt-2 mb-4">
                                            <select
                                                onChange={(e) =>
                                                    handleValueChange(e)
                                                }
                                                value="rank"
                                                id="rank"
                                                name="rank"
                                                className="px-2 block w-full rounded-md border border-zinc-300 px py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            >
                                                {rankList.map((item) => (
                                                    <option
                                                        value={item}
                                                        key={item}
                                                    >
                                                        {item}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <label
                                            htmlFor="skill"
                                            className="block text-base font-medium leading-6 text-gray-900"
                                        >
                                            스킬을 입력하세요 (예, java,
                                            python..)
                                        </label>
                                        <div className="mt-2 mb-4">
                                            <Input
                                                label="skill"
                                                type="text"
                                                onChange={(e) =>
                                                    handleValueChange(e)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="final-submit mt-48 flex w-full justify-center rounded-md bg-sub-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            navigate("/login");
                                        }}
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
    );
}
