import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

import React, { useState } from "react";

export default function DatePick() {
    const [startDate, setStartDate] = useState(null);

    const [endDate, setEndDate] = useState(null);
    return (
        <div className="period mr-44">
            <div className="flex items-center w-1/2 ">
                <div className="whitespace-nowrap mr-5 w-10">기간</div>

                <DatePicker
                    dateFormat="yyyy년 MM월 dd일"
                    placeholderText="----년 --월 --일"
                    selected={startDate}
                    onChange={(date) => {
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
                    onChange={(date) => setEndDate(date)}
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