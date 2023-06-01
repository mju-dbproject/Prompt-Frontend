import { React, useEffect, useRef, useState } from "react";
import Stepper from "bs-stepper";
import "bootstrap/dist/css/bootstrap.min.css";
import "bs-stepper/dist/css/bs-stepper.min.css";

import "./join.css";
import Input from "../../components/Atoms/Input/Input";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import PwdIcon from "../../components/Atoms/Icon/PwIcon";
import { useNavigate } from "react-router";
import posts from "../../api/posts";
import instance from "../../api/fetch";
import { useRecoilState, useResetRecoilState } from "recoil";
import { availableIdState, joinInfoState } from "../../hooks/recoil/atoms";

export default function JoinPage() {
    const [pwType, setPwType] = useState({
        type: "password",
        visible: false,
        icon: faEye,
    });
    const navigate = useNavigate();

    const stepperRef = useRef(null);

    const [availableId, setAvailableId] = useRecoilState(availableIdState);
    const [correspondPassword, setCorrespondPassword] = useState(true);

    const positionList = [
        "개발자",
        "영업관리",
        "경영관리",
        "사업관리",
        "마케팅",
        "연구개발",
    ];
    const rankList = ["수석", "책임", "선임", "사원"];

    const [joinInfo, setJoinInfo] = useRecoilState(joinInfoState);
    const reset = useResetRecoilState(joinInfoState);

    useEffect(() => {
        stepperRef.current = new Stepper(document.querySelector("#stepper1"), {
            linear: false,
            animation: true,
        });
    }, []);

    const handleCheck = () => {
        validatePassword();
        if (availableId && joinInfo.password === joinInfo.repassword) {
            stepperRef.current.next();
        }
    };

    const handleIdValidation = async () => {
        try {
            const request = await fetch(instance.baseURL + posts.fetchIDCheck, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId: joinInfo.userId }),
            });
            const response = await request.json();
            setAvailableId(response.notDuplicated);
            handleCheck();
        } catch (error) {
            console.log("error occur");
        }
    };

    const validatePassword = () => {
        if (joinInfo.password !== joinInfo.repassword) {
            setCorrespondPassword(false);
        } else {
            setCorrespondPassword(true);
        }
    };
    const handleSubmit = async () => {
        try {
            const dataToSend = { ...joinInfo };
            delete dataToSend.repassword;
            const response = await fetch(instance.baseURL + posts.fetchJoin, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });
            console.log(dataToSend);
            console.log(response);
            reset();
            navigate("/login");
        } catch (error) {
            console.log("error occur");
        }
    };

    const handleValueChange = (e) => {
        if (e.target.name === "experienceYear") {
            setJoinInfo({
                ...joinInfo,
                [e.target.name]: parseInt(e.target.value, 10),
            });
        } else {
            setJoinInfo({
                ...joinInfo,
                [e.target.name]: e.target.value,
            });
        }

        // console.log("hi", e.target.value);
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
                                            htmlFor="id"
                                            className="block text-base font-medium leading-6 text-gray-900"
                                        >
                                            아이디를 입력하세요
                                        </label>
                                        <div className="mt-2.5 mb-7">
                                            <Input
                                                name="userId"
                                                type="text"
                                                page="join"
                                                onChange={(e) =>
                                                    handleValueChange(e)
                                                }
                                            />
                                            {!availableId && (
                                                <div className="text-sm mt-0.5 text-red-700">
                                                    중복된 아이디입니다.
                                                </div>
                                            )}
                                        </div>

                                        <label
                                            htmlFor="password"
                                            className="block text-base font-medium leading-6 text-gray-900"
                                        >
                                            비밀번호를 입력하세요
                                        </label>
                                        <div className="mt-2.5 mb-7 relative">
                                            <Input
                                                name="password"
                                                type={pwType.type}
                                                page="join"
                                            />
                                            <PwdIcon
                                                pwType={pwType}
                                                setPwType={setPwType}
                                            />
                                        </div>

                                        <label
                                            htmlFor="repassword"
                                            className="block text-base font-medium leading-6 text-gray-900"
                                        >
                                            비밀번호를 재입력하세요
                                        </label>
                                        <div className="mt-2.5 relative">
                                            <Input
                                                name="repassword"
                                                page="join"
                                                type={pwType.type}
                                                onChange={(e) => {
                                                    handleValueChange(e);
                                                }}
                                            />
                                            <PwdIcon
                                                pwType={pwType}
                                                setPwType={setPwType}
                                            />
                                            {!correspondPassword && (
                                                <div className="text-sm mt-0.5 text-red-700">
                                                    비밀번호가 일치하지
                                                    않습니다.
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="flex w-full mt-36 justify-center rounded-md bg-sub-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={(e) => {
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
                                                name="name"
                                                type="text"
                                                page="join"
                                                onChange={(e) =>
                                                    handleValueChange(e)
                                                }
                                            />
                                        </div>

                                        <label
                                            htmlFor="registerNumber"
                                            className="block text-base font-medium leading-6 text-gray-900"
                                        >
                                            주민등록번호를 입력하세요 (-로 구분)
                                        </label>
                                        <div className="mt-2 mb-4">
                                            <Input
                                                name="registerNumber"
                                                type="password"
                                                page="join"
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
                                                name="email"
                                                type="email"
                                                required
                                                page="join"
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
                                                name="phoneNumber"
                                                type="text"
                                                page="join"
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
                                                name="education"
                                                type="text"
                                                page="join"
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
                                                name="experienceYear"
                                                type="text"
                                                page="join"
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
                                                id="position"
                                                name="position"
                                                className="px-2 block w-full rounded-md border border-zinc-300 px py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            >
                                                <option>-- 선택 --</option>
                                                {positionList.map(
                                                    (item, index) => (
                                                        <option key={index}>
                                                            {item}
                                                        </option>
                                                    )
                                                )}
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
                                                id="rank"
                                                name="rank"
                                                className="px-2 block w-full rounded-md border border-zinc-300 px py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            >
                                                <option>-- 선택 --</option>
                                                {rankList.map((item, index) => (
                                                    <option key={index}>
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
                                                name="skill"
                                                type="text"
                                                page="join"
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
                                            handleSubmit();
                                            // navigate("/login");
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
