import React from "react";

export default function Label({ value }) {
    return (
        <label className="text-md font-medium leading-6 text-gray-900 mr-10">
            {value}
        </label>
    );
}
