const requests = {
    fetchUserInfo: "/api/user/info",
    fetchEmployeeList: "/api/employee/admin/all",
    fetchEmployeeDeveloper: "/api/employee/admin/developer",
    fetchEmployeeElse: "/api/employee/admin/else",
    fetchProjectCanceled: "/api/project/cancel",
    fetchProjectList: "/api/admin/project/search",
    fetchProjectInProgress: "/api/project/in-progress",
    fetchProjectDone: "/api/project/done",
    fetchProjectDetail: "/api/project",
    fetchEmployeeProjectList: "/api/project",
    fetchEmployeeProjectInProgress: "/api/project/in-progress",
    fetchEmployeeProjectDone: "/api/project/done",
    fetchProjectEvaluation: "/api/evaluation/project/list",
    fetchManpowerList: "/api/manpower",
    fetchManpowerPossibleList: "/api/manpower/admin/new/available/all",
};

export default requests;
