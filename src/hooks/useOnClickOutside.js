import React, { useEffect } from "react";

export default function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (event) => {
            // console.log("ref", ref.current);
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler();
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("torchstart", listener);

        // unmount 될때
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("torchstart", listener);
        };
    }, []);
}
