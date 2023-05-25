import React, { useState } from "react";
import ProjectList from "../../components/Organisms/List/ProjectList";

export default function ProjectManage() {
    const [isAdmin, setIsAdmin] = useState(true);

    const role = isAdmin ? "경영인" : "직원";

    return (
        <ProjectList role={role} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
    );
}
