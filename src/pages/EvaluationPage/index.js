import React, { useState, useEffect } from "react";
import DetailEvaluation from "../../components/Organisms/DetailEvaluation";
import Header from "../../components/Molecules/Header/Header";
import RadioInput from "../../components/Atoms/Input/RadioInput";
import Sidebar from "../../components/Molecules/Sidebar/Sidebar";
import instance from "../../api/fetch";
import requests from "../../api/requests";
import { useRecoilState } from "recoil";
import {
    adminState,
    checkInfoState,
    evaluationInfoQuestionState,
    projectInfoState,
    surveyScoreState,
} from "../../hooks/recoil/atoms";
import posts from "../../api/posts";

export default function EvaluationPage() {
    const [surveyScore, setSurveyScore] = useRecoilState(surveyScoreState);

    const [isAdmin, setIsAdmin] = useRecoilState(adminState);

    const [isSelect, setSelect] = useState(false);

    const [isDone, setIsDone] = useState(false);

    const [comment, setComment] = useState("");

    const [evaluation, setEvaluation] = useState([
        {
            projectId: "",
            projectName: "",
            evaluationType: [],
            coworker: [],
        },
    ]);

    const [coworker, setCoworker] = useState([]);

    const [checkInfo, setCheckInfo] = useRecoilState(checkInfoState);

    const [question, setQuestion] = useRecoilState(evaluationInfoQuestionState);
    const [projectInfo, setProjectInfo] = useRecoilState(projectInfoState);

    const [sendData, setSendData] = useState({
        projectId: "",
        evaluatedId: "",
        type: "",
        performance: "",
        communication: "",
        contents: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            const all = await fetchPossibleEvaluateProject();
            setEvaluation(all);
            // console.log("지금은 왔나?????????????", all);
            setCoworker();
            // console.log("뭔데", evaluation[0].coworker);
            console.log("지금 선택", selectedProject);
            console.log("comment", comment);

            sendData.projectId = projectInfo.id;
            sendData.evaluatedId = checkInfo.evaluatedId;
            sendData.type = checkInfo.evaluationType;
            sendData.performance = surveyScore.performance;
            sendData.communication = surveyScore.communication;
            sendData.contents = comment;
            console.log("Sdfksdjfkjsdkfjhs", sendData);
        };
        fetchData();
    }, []);

    const [selectedProject, setSelectedProject] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("저장되었습니다!");
        sendData.projectId = projectInfo.id;
        sendData.evaluatedId = checkInfo.evaluatedId;
        sendData.type = checkInfo.evaluationType;
        sendData.performance = surveyScore.performance;
        sendData.communication = surveyScore.communication;
        sendData.contents = comment;
        console.log("제대로 되는가 ㅜㅜㅜㅜㅜ", sendData);
        // console.log("cklsjdl", checkInfo);
        setIsDone(true);
        fetchSendEvaluation();
    };

    const handleProjectSelect = (e) => {
        // console.log("value", e.target.value);
        const projectId = parseInt(e.target.value, 10);
        // console.log("evaluation", evaluation); // 여기에서 출력
        const foundProject = evaluation.find(
            (project) => project.projectId === projectId
        );

        // console.log("ddd", foundProject);
        setSelectedProject(foundProject);
        console.log("Selected Project:", foundProject);
    };

    // const fetchManpowerEvaluation = as;
    const fetchPossibleEvaluateProject = async () => {
        try {
            const request = await fetch(
                instance.baseURL + requests.fetchPossibleEvaluateProject,
                {
                    method: "GET",
                    headers: {
                        "content-type": "application/json",
                        Authorization:
                            `Bearer ` + localStorage.getItem("login-token"),
                    },
                }
            );
            const response = await request.json();
            // console.log("응답ㄷ이 잘 갔다", response);
            return response.canEvaluateProjectList;

            // console.log(response.canEvaluateProjectList, "평가옴");
        } catch (error) {
            console.log(error);
        }
    };

    const fetchSendEvaluation = async () => {
        try {
            const request = await fetch(
                instance.baseURL + posts.fetchSendEvaluation,
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        Authorization:
                            `Bearer ` + localStorage.getItem("login-token"),
                    },
                    body: JSON.stringify(sendData),
                }
            );
            const response = await request;
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Header></Header>

            <div className="grid grid-cols-6 mx-auto">
                <Sidebar className="col-span-1"></Sidebar>
                <div className="bg-gray-100 col-span-5 h-screen px-20 pt-10 auto-rows-auto">
                    <div className="bg-white drop-shadow-md container w-5/6 h-5/6 mx-40 rounded border border-gray-300 px-5 mb-20">
                        <div className="flex justify-between pt-10 pb-3">
                            <div className="text-2xl font-medium text-start">
                                평가하기
                            </div>
                            <button
                                type="submit"
                                className="w-30 h-10 rounded-md bg-sub-color px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={handleSubmit}
                            >
                                저장하기
                            </button>
                        </div>
                        <section className=" justify-start place-content-between h-16 px-2 border border-gray-300 drop-shadow-sm rounded align-center">
                            <div className="flex mt-2.5 mb-4">
                                <select
                                    onChange={handleProjectSelect}
                                    id="position"
                                    name="position"
                                    className="px-2 block w-max rounded-md border-1.5 border-gray-300 px py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                >
                                    <option>-- 선택 --</option>
                                    {evaluation.map((project) => (
                                        <option
                                            key={project.projectId}
                                            value={project.projectId}
                                        >
                                            {project.projectName}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    type="submit"
                                    className="w-max ml-2 h-10 rounded-md bg-sub-color px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => setSelect(true)}
                                >
                                    확인
                                </button>
                                {isSelect && (
                                    <DetailEvaluation
                                        selectedProject={selectedProject}
                                    />
                                )}
                            </div>
                        </section>
                        <section className="mt-2 flex items-center h-20 px-2 border border-gray-300 drop-shadow-sm rounded align-center">
                            <div className="rounded w-full h-16  border border-gray-300 divide-y divide-white">
                                <div className="grid grid-cols-2">
                                    <div className="flex text-sm">
                                        <div className="bg-sub-color w-40 pt-1.5 pb-1 pl-5 rounded-tl-lg text-white">
                                            프로젝트명
                                        </div>
                                        <div className="pl-5 mt-1">
                                            {projectInfo.name}
                                        </div>
                                    </div>
                                    <div className="flex text-sm">
                                        <span className="bg-sub-color w-40 pt-1.5 pb-1 pl-5  text-white">
                                            프로젝트 코드
                                        </span>
                                        <span className="pl-5 mt-1">
                                            {projectInfo.projectNumber}
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 text-sm">
                                    <div className="flex">
                                        <span className="bg-sub-color w-40 pt-1.5 pb-1 pl-5 rounded-bl-lg text-white ">
                                            발주처
                                        </span>
                                        <span className="pl-5 mt-1">
                                            {projectInfo.client}
                                        </span>
                                    </div>
                                    <div className="flex">
                                        <span className="bg-sub-color w-40 pt-1.5 pb-1 pl-5 text-white">
                                            예산
                                        </span>
                                        <span className="pl-5 mt-1">
                                            {projectInfo.budget}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {isDone && (
                            <section className="mt-2 h-80 flex justify-center items-center pl-4 pr-4 border border-gray-300 drop-shadow-sm rounded align-center">
                                <div className="pt-3 pb-1">
                                    평가를 이미 완료하셨습니다.
                                </div>
                            </section>
                        )}
                        {!isDone && (
                            <section className="mt-2 h-80 pl-4 pr-4 border border-gray-300 drop-shadow-sm rounded align-center">
                                <div className="pt-3 pb-1 border-b-2 border-gray-300">
                                    문항을 읽고 가장 적절한 곳에 체크 해 주세요.
                                </div>
                                <div className="question mt-2">
                                    <div>1. {question.communication}</div>
                                    <RadioInput name="performance" />
                                    <div>2.{question.performance}</div>
                                    <RadioInput name="communication" />
                                    <div>3.{question.content}</div>
                                    <input
                                        className="h-16 w-full rounded border border-gray-300 mt-2 mr-5"
                                        onChange={(e) => {
                                            setComment(e.target.value);
                                            // console.log("comment", comment);
                                        }}
                                    ></input>
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
