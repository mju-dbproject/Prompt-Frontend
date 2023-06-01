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
        console.log("start date", sendStart);
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
                        const d = new Date(date).toLocaleDateString();
                        const dates = d.split(".");

                        const year = parseInt(dates[0].trim());
                        const month = parseInt(dates[1].trim());
                        const day = parseInt(dates[2].trim());
                        // console.log(`${year}-${month}-${day}`);
                        setSendStart(`${year}-${month}-${day}`);
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
                        const d = new Date(date).toLocaleDateString();
                        const dates = d.split(".");

                        const year = parseInt(dates[0].trim());
                        const month = parseInt(dates[1].trim());
                        const day = parseInt(dates[2].trim());
                        // console.log(`${year}-${month}-${day}`);
                        setSendEnd(`${year}-${month}-${day}`);
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
