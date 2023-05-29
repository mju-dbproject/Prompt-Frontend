import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
    setSendEndState,
    setSendStartState,
} from "../../../hooks/recoil/atoms";

export default function DatePick() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const [sendStart, setSendStart] = useRecoilState(setSendStartState);
    const [sendEnd, setSendEnd] = useRecoilState(setSendEndState);

    useEffect(() => {
        console.log("start date", startDate);
    });

    return (
        <div className="period mr-44">
            <div className="flex items-center w-1/2 ">
                <div className="whitespace-nowrap mr-5 w-10">기간</div>

                <DatePicker
                    dateFormat="yyyy년 MM월 dd일"
                    placeholderText="----년 --월 --일"
                    selected={startDate}
                    onChange={(date) => {
                        const d = new Date(date).toISOString();
                        console.log("시작날짜", d.split("T")[0]);
                        setSendStart(d.split("T")[0]);
                        setStartDate(date);
                    }}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    locale={ko}
                    className="rounded text-center w-40 py-0.5 px-3.5 border-2 border-sub-color"
                />
                <span>&nbsp;~&nbsp;</span>
                <DatePicker
                    dateFormat="yyyy년 MM월 dd일"
                    placeholderText="----년 --월 --일"
                    selected={endDate}
                    onChange={(date) => {
                        const d = new Date(date).toISOString();
                        console.log("시작날짜", d.split("T")[0]);
                        setSendEnd(d.split("T")[0]);
                        setEndDate(date);
                    }}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    locale={ko}
                    className="rounded text-center w-40 py-0.5 px-3.5 border-2 border-sub-color"
                />
            </div>
        </div>
    );
}
