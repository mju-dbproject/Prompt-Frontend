import React from "react";

export default function SubNav() {
    return (
        <div>
            <section className="subNav w-6/7 grid grid-cols-5 bg-gray-300 h-1/5 rounded pl-7">
                <div className="bg-gray-100 my-5 mr-5 rounded">
                    <div className="pl-5 mt-3">전체</div>
                    <div className="text-2xl text-center">12</div>
                </div>
                <div className="bg-gray-100 my-5 mr-5 rounded"></div>
                <div className="bg-gray-100 my-5 mr-5 rounded"></div>
            </section>
        </div>
    );
}
