const requests = {
    fetchUserInfo: "/api/user/info",
    fetchUserApprove: "/api/user/approval",
    fetchEmployeeList: "/api/employee/admin/all",
    fetchEmployeeDeveloper: "/api/employee/admin/developer",
    fetchEmployeeElse: "/api/employee/admin/else",
    fetchProjectCount: "/api/admin/project/count",
    fetchProjectList: "/api/admin/project/search",
    fetchProjectDetail: "/api/project",
    fetchEmployeeProjectList: "/api/project",
    fetchEmployeeProjectInProgress: "/api/project/in-progress",
    fetchEmployeeProjectDone: "/api/project/done",
    fetchProjectEvaluation: "/api/evaluation/project/list",
    fetchManpowerList: "/api/manpower",
    fetchManpowerPossibleList: "/api/manpower/admin/new/available/all",
};

export default requests;
