import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import ProjectList from "../../components/Organisms/List/ProjectList";

export default function EmployeePage() {
    const [isAdmin, setIsAdmin] = useState(true);

    const role = isAdmin ? "경영인" : "직원";

    // const [subNav, setSubNav] = useState[""];

    // const [startDate, setStartDate] = useState(new Date("2021/08/27"));

    // *** 이런식으로 진행예정
    // useEffect(() => {
    //     if (debouncedSearchTerm) {
    //         fetchSearchProject(debouncedSearchTerm);
    //     }
    // }, [debouncedSearchTerm]);

    return (
        <ProjectList role={role} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
    );
}
