import React from "react";

export default function Input({ label, type }) {
    return (
        <input
            type={type}
            name={label}
            id={label}
            autocomplete="on"
            className="block w-full rounded-md border border-zinc-300 px py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
    );
}
