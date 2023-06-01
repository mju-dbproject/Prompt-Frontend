import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import instance from "../../api/fetch";
import posts from "../../api/posts";
import requests from "../../api/requests";
import {
    checkInfoState,
    evaluationInfoQuestionState,
    projectInfoState,
} from "../../hooks/recoil/atoms";

export default function DetailEvaluation({ selectedProject }) {
    const [checkInfo, setCheckInfo] = useState({
        projectId: "",
        evaluationType: "",
        evaluatedId: "",
    });

    const [check, setCheck] = useRecoilState(checkInfoState);

    const [question, setQuestion] = useRecoilState(evaluationInfoQuestionState);
    const [projectInfo, setProjectInfo] = useRecoilState(projectInfoState);

    const [q, setQ] = useState({
        performance: "",
        communication: "",
        content: "",
    });
    const [pj, setPj] = useState({});
    const handleValueChange = (e) => {
        setCheckInfo({
            ...checkInfo,
            [e.target.name]: e.target.value,
        });

        setCheck({
            ...checkInfo,
            [e.target.name]: e.target.value,
        });

        console.log("Updated checkInfo:", checkInfo); // 변경된 상태 출력
    };

    const handleClick = () => {
        const fetchData = async () => {
            const data = await fetchPossibleEvaluateCheck();

            if (!data) {
                fetchEvaluationDetail();
                setProjectInfo(pj);
                setQuestion(q);
            }
        };
        fetchData();
        setCheck(checkInfo);
    };

    useEffect(() => {
        if (selectedProject) {
            checkInfo.projectId = selectedProject.projectId;
            if (
                selectedProject.evaluationType &&
                selectedProject.evaluationType.length > 0
            ) {
                setCheckInfo((prev) => ({
                    ...prev,
                    evaluationType: selectedProject.evaluationType[0],
                }));
            }
            if (
                selectedProject.coworker &&
                selectedProject.coworker.length > 0
            ) {
                setCheckInfo((prev) => ({
                    ...prev,
                    evaluatedId: selectedProject.coworker[0].id,
                }));
            }
            console.log("확인하겠습니다", checkInfo);
        }
    }, [selectedProject]);

    const fetchPossibleEvaluateCheck = async () => {
        try {
            const request = await fetch(
                instance.baseURL + posts.fetchPossibleEvaluateCheck,
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        Authorization:
                            `Bearer ` + localStorage.getItem("login-token"),
                    },
                    body: JSON.stringify(checkInfo),
                }
            );
            const response = await request.json();
            return response.done;
            // console.log(response.done);
        } catch (error) {
            console.log(error);
        }
    };

    // const handleEvaluatedChange = (e) => {
    //     const selectedId = e.target.value;
    //     selectedProject.coworker[0].id = selectedId;

    //     const selectedItem = rawData.find((item) => item.id === selectedId);
    //     setCheckInfo(selectedItem);
    // };

    const handleEvaluatedChange = (e) => {
        const selectedId = e.target.value;
        setCheckInfo((prev) => ({ ...prev, evaluatedId: selectedId }));
    };

    const fetchEvaluationDetail = async () => {
        try {
            const request = await fetch(
                instance.baseURL + requests.fetchEvaluationDetail,
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        Authorization:
                            `Bearer ` + localStorage.getItem("login-token"),
                    },
                    body: JSON.stringify(checkInfo),
                }
            );
            const response = await request.json();
            // console.log(response, "정말인가?");
            console.log(response.evaluationInfo);
            setQ(response.evaluationInfo);
            console.log("제대로 되는가", q);
            setPj(response.projectInfo);
            console.log("제대로 되는가", pj);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex">
            <select
                onChange={handleValueChange}
                value={(e) => e.target.value}
                id="evaluationType"
                name="evaluationType"
                className="w-max ml-2 px-2 block rounded-md border-1.5 border-gray-300 px py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
                {selectedProject.evaluationType &&
                    selectedProject.evaluationType.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
            </select>
            <select
                value={checkInfo.evaluatedId}
                onChange={handleEvaluatedChange}
                id="evaluatedId"
                name="evaluatedId"
                className="w-max ml-2 px-2 block rounded-md border-1.5 border-zinc-300 px py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
                {selectedProject.coworker &&
                    selectedProject.coworker.map((item, index) => (
                        <option key={index} value={item.id}>
                            {item.employeeNumber} {item.name}
                        </option>
                    ))}
            </select>
            <button
                onClick={handleClick}
                type="submit"
                className="w-max ml-2 h-10 rounded-md bg-sub-color px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                확인
            </button>
        </div>
    );
}
