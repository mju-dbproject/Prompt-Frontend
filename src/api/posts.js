const posts = {
    fetchLogin: "/api/auth/login",
    fetchLogout: "/api/auth/logout",
    fetchJoin: "/api/user/join",
    fetchIDCheck: "/api/user/check-id",
    fetchIDfind: "/api/employee/find-id",
    fetchUserApprove: "/api/employee/approval",
    fetchEmployeePromotion: "/api/employee/admin/promotion",
    fetchProjectNew: "/api/admin/project",
    fetchProjectEdit: "/api/project",
    fetchManpowerEvaluation: "/api/evaluation/{evaluated_id}",
    fetchManpowerAddition: "/api/manpower/{project_id}",
    fetchManpowerPossibleList: "/api/manpower/available/1",
};

export default posts;
