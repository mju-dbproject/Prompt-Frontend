const posts = {
    fetchLogin: "/user/info",
    fetchLogout: "/api/auth/logout",
    fetchJoin: "/employee/join",
    fetchIDCheck: "/api/employee/check-id",
    fetchIDfind: "/api/employee/find-id",
    fetchUserApprove: "/api/employee/approval",
    fetchEmployeePromotion: "/api/employee/promotion",
    fetchProjectNew: "/api/project",
    fetchManpowerEvaluation: "/api/evaluation/{evaluated_id}",
    fetchManpowerAddition: "/api/manpower/{project_id}",
    fetchManpowerPossibleList: "/api/manpower/available/1",
};

export default posts;
