import React, { useState } from "react";
import "./SubNav.css";

export default function SubNav({ subTitle }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleButtonClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="subNav w-6/7 grid grid-cols-5 border-2 border-slate-200 rounded pl-7">
            {subTitle.map((sub, index) => (
                <button
                    key={index}
                    className={
                        " bg-blue-400 " +
                        (index === activeIndex ? "active" : "") +
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
