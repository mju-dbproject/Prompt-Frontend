import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { surveyScoreState } from "../../../hooks/recoil/atoms";

export default function RadioInput({ name }) {
    const [surveyScore, setSurveyScore] = useRecoilState(surveyScoreState);

    const handleChange = (event) => {
        const { value } = event.target;
        setSurveyScore((prev) => ({ ...prev, [name]: parseInt(value) }));
    };

    useEffect(() => {
        console.log("현재 값", surveyScore);
    }, [surveyScore]);

    return (
        <div
            name="performance"
            className="flex justify-between my-2 pr-5 border-b border-gray-300"
        >
            {[
                "매우 그렇지 않다",
                "그렇지 않다",
                "보통이다",
                "그렇다",
                "매우 그렇다",
            ].map((text, index) => (
                <div key={index} className="mb-1">
                    <input
                        type="radio"
                        name={name}
                        value={index}
                        checked={surveyScore[name] === index}
                        onChange={handleChange}
                    />
                    <span className="ml-2">{text}</span>
                </div>
            ))}
        </div>
    );
}
