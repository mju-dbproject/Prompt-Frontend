import React, { useState } from "react";
import "./SubNav.css";

export default function SubNav({ subTitle }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleButtonClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="subNav bg-white w-6/7 grid grid-cols-5 border border-gray-300 drop-shadow-md rounded pl-7">
            {subTitle.map((sub, index) => (
                <button
                    key={index}
                    className={
                        " bg-sub-color " +
                        (index === activeIndex ? "activeBtn" : "") +
                        " my-3 py-2.5 mr-5 rounded "
                    }
                    onClick={() => handleButtonClick(index)}
                >
                    <div className="text-left pl-4 mt-0.5 text-white text-medium">
                        {sub.title}
                    </div>
                    <div className="text-2xl text-end mr-5 text-slate-50">
                        {sub.total}건
                    </div>
                </button>
            ))}
        </section>
    );
}
