import React from "react";

export default function RadioInput() {
    return (
        <div className="flex justify-between my-2 pr-5 border-b border-gray-300">
            <div className="mb-1">
                <input type="radio" value="0" />
                <span className="ml-2">매우 그렇지 않다</span>
            </div>
            <div className="mb-1">
                <input type="radio" value="1" />
                <span className="ml-2">그렇지 않다</span>
            </div>
            <div className="mb-1">
                <input type="radio" value="2" />
                <span className="ml-2">보통이다</span>
            </div>
            <div className="mb-1">
                <input type="radio" value="3" />
                <span className="ml-2">그렇다</span>
            </div>
            <div className="mb-1">
                <input type="radio" value="4" />
                <span className="ml-2">매우 그렇다</span>
            </div>
        </div>
    );
}
