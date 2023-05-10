import React from "react";

export default function SubNav() {
    return (
        <div className="">
            <section className="subNav w-6/7 grid grid-cols-5 border-2 border-slate-200 rounded pl-7">
                <button className="bg-blue-400 my-3 py-2.5 mr-5 rounded">
                    <div className="text-left pl-4 mt-0.5 text-white text-medium">
                        전체
                    </div>
                    <div className="text-2xl text-end mr-5 text-slate-50">
                        12건
                    </div>
                </button>
                <button className="bg-blue-300 my-3 mr-5 rounded"></button>
                <button className="bg-blue-300 my-3 mr-5 rounded"></button>
            </section>
        </div>
    );
}
