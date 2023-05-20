import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function NotApprovePage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <FontAwesomeIcon icon={faLock} size="xl" />
            <div className="text-xl ml-3 font-semibold">
                접근 권한이 없습니다. 회원 승인 후 서비스 이용이 가능합니다.
            </div>
        </div>
    );
}
