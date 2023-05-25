import React, { useState } from "react";
import EmployeeList from "../../components/Organisms/List/EmployeeList";

export default function EmployeeManage() {
    const [isAdmin, setIsAdmin] = useState(true);

    const role = isAdmin ? "경영인" : "직원";
    return (
        <EmployeeList role={role} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
    );
}
