const posts = {
    fetchLogin: "/api/auth/login",
    fetchLogout: "/api/auth/logout",
    fetchJoin: "/api/user/join",
    fetchIDCheck: "/api/user/check-id",
    fetchIDfind: "/api/user/find-id",
    fetchPasswordEdit: "/api/user/password",
    fetchUserApprove: "/api/user/approval",
    fetchEmployeePromotion: "/api/employee/admin/promotion",
    fetchProjectNew: "/api/admin/project",
    fetchProjectEdit: "/api/admin/project",
    fetchManpowerEvaluation: "//api/evaluation/save",
    fetchPossibleEvaluateCheck: "/api/evaluation/check",
    fetchSendEvaluation: "/api/evaluation",
    fetchManpowerAddition: "/api/manpower/{project_id}",
    fetchManpowerPossibleList: "/api/manpower/available/1",
};

export default posts;
