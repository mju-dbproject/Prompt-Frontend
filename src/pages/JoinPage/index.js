import { React, useEffect, useRef, useState } from "react";
import Stepper from "bs-stepper";
import "bootstrap/dist/css/bootstrap.min.css";
import "bs-stepper/dist/css/bs-stepper.min.css";

import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./join.css";
import axios from "axios";
import posts from "../../api/posts";

export default function JoinPage() {
    const [pwType, setPwType] = useState({
        type: "password",
        visible: false,
        icon: faEye,
    });

    const handlePasswordType = (e) => {
        setPwType(() => {
            if (!pwType.visible) {
                return { type: "text", visible: true, icon: faEyeSlash };
            } else {
                return { type: "password", visible: false, icon: faEye };
            }
        });
    };

    const stepperRef = useRef(null);

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

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [name, setName] = useState("");
    const [registrationNumber, setRegisterationNumber] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [education, setEducation] = useState("");
    const [experienceYear, setExperienceYear] = useState("");
    const [position, setPosition] = useState("");
    const [rank, setRank] = useState("");
    const [skill, setSkill] = useState("");

    const userInfo1 = {
        userid: userId,
        password: password,
        repassword: repassword,
    };

    useEffect(() => {
        stepperRef.current = new Stepper(document.querySelector("#stepper1"), {
            linear: false,
            animation: true,
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios
            .post(posts.fetchJoin, {
                headers: {
                    "Content-Type": "application/json",
                },
                data: userInfo1,
            })
            .then(console.log);

        stepperRef.current.next();
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
                                            <input
                                                type="text"
                                                name="id"
                                                id="id"
                                                autocomplete="given-id"
                                                className="block w-full rounded-md border border-zinc-300 px py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onChange={(e) =>
                                                    setUserId(e.target.value)
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
                                            <input
                                                type={pwType.type}
                                                name="password"
                                                id="password"
                                                autocomplete="given-password"
                                                className="block w-full rounded-md border border-zinc-300 px py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                            />
                                            <FontAwesomeIcon
                                                icon={pwType.icon}
                                                className="absolute top-4 right-3 mb-1.5 text-gray-500"
                                                onClick={handlePasswordType}
                                            />
                                        </div>

                                        <label
                                            for="repassword"
                                            className="block text-base font-medium leading-6 text-gray-900"
                                        >
                                            비밀번호를 재입력하세요
                                        </label>
                                        <div className="mt-2.5 relative">
                                            <input
                                                type={pwType.type}
                                                name="repassword"
                                                id="repassword"
                                                autocomplete="given-password"
                                                className="block w-full rounded-md border border-zinc-300 px py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onChange={(e) =>
                                                    setRepassword(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <FontAwesomeIcon
                                                icon={pwType.icon}
                                                className="absolute top-4 right-3 mb-1.5 text-gray-500"
                                                onClick={handlePasswordType}
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="flex w-full mt-44 justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={handleSubmit}
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
                                                id="name"
                                                autocomplete="given-name"
                                                className="block w-full rounded-md border border-zinc-300 px py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onChange={(e) => {
                                                    setName(e.target.value);
                                                }}
                                            />
                                        </div>

                                        <label
                                            for="registration-number"
                                            className="block text-base font-medium leading-6 text-gray-900"
                                        >
                                            주민등록번호를 입력하세요 (-제외)
                                        </label>
                                        <div className="mt-2 mb-4">
                                            <input
                                                type="password"
                                                name="registration-number"
                                                id="registration-number"
                                                autocomplete="given-registration-number"
                                                className="block w-full rounded-md border border-zinc-300 px py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onClick={(e) =>
                                                    setRegisterationNumber(
                                                        e.target.value
                                                    )
                                                }
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
                                                autocomplete="given-email"
                                                className="block w-full rounded-md border border-zinc-300 px py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onClick={(e) =>
                                                    setEmail(e.target.value)
                                                }
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
                                                autocomplete="given-phone-number"
                                                className="block w-full rounded-md border border-zinc-300 px py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onClick={(e) =>
                                                    setPhoneNumber(
                                                        e.target.value
                                                    )
                                                }
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
                                                onChange={(e) =>
                                                    setEducation(e.target.value)
                                                }
                                                value={education}
                                                id="education"
                                                name="education"
                                                className="px-2 block w-full rounded-md border border-zinc-300 px py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            >
                                                {educationList.map((item) => (
                                                    <option
                                                        value={item}
                                                        key={item}
                                                    >
                                                        {item}
                                                    </option>
                                                ))}
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
                                                autocomplete="given-experience-year"
                                                className="block w-full rounded-md border border-zinc-300 px py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onChange={(e) =>
                                                    setExperienceYear(
                                                        e.target.value
                                                    )
                                                }
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
                                                onChange={(e) =>
                                                    setPosition(e.target.value)
                                                }
                                                value={position}
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
                                            for="rank"
                                            className="block text-base font-medium leading-6 text-gray-900"
                                        >
                                            직급을 선택하세요
                                        </label>
                                        <div className="mt-2 mb-4">
                                            <select
                                                onChange={(e) =>
                                                    setRank(e.target.value)
                                                }
                                                value={rank}
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
                                                onChange={(e) =>
                                                    setSkill(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="final-submit mt-48 flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
