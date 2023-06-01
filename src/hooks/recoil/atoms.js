import { atom } from "recoil";

export const nameState = atom({
    key: "nameState",
    default: "",
});

export const selectedEmployeesState = atom({
    key: "selectedEmployeesState",
    default: [],
});

export const selectedEmployeeNewState = atom({
    key: "selectedEmployeeNewState",
    default: [],
});

export const allProjectsState = atom({
    key: "allProjectsState",
    default: [],
});

export const allEmployeesState = atom({
    key: "allEmployeesState",
    default: [],
});

export const allNewAddEmployeeState = atom({
    key: "allNewAddEmployeeState",
    default: [],
});

export const allManpowerState = atom({
    key: "allManpowerState",
    default: [],
});

export const allManpowerEndState = atom({
    key: "allManpowerEndState",
    default: [],
});

export const joinInfoState = atom({
    key: "joinInfoState",
    default: {
        userId: "",
        password: "",
        repassword: "",
        name: "",
        registerNumber: "",
        email: "",
        phoneNumber: "",
        education: "",
        experienceYear: "",
        position: "",
        rank: "",
        skill: "",
    },
});

export const loginInfoState = atom({
    key: "loginInfoState",
    default: {
        userId: "",
        password: "",
    },
});

export const findIdInfoState = atom({
    key: "findIdInfoState",
    default: {
        name: "",
        registerNumber: "",
    },
});

export const passwordResetState = atom({
    key: "passwordResetState",
    default: {
        userId: "",
        newPassword: "",
        checkPassword: "",
    },
});

export const adminState = atom({
    key: "adminState",
    default: false,
});

export const employeeProject = atom({
    key: "employeeProject",
    default: [],
});

export const setSendStartState = atom({
    key: "setSendStartState",
    default: null,
});

export const setSendEndState = atom({
    key: "setSendEndState",
    default: null,
});

export const projectStatusState = atom({
    key: "projectStatusState",
    default: "0",
});

export const approvalEmployeeState = atom({
    key: "approvalEmployeeState",
    default: [],
});

export const searchState = atom({
    key: "searchState",
    default: false,
});

export const projectInfoState = atom({
    key: "projectInfoState",
    default: {
        id: "",
        name: "",
        projectNumber: "",
        client: "",
        budget: "",
    },
});

export const evaluationInfoQuestionState = atom({
    key: "evaluationInfoQuestionState",
    default: {
        performance: "",
        communication: "",
        content: "",
    },
});

export const surveyScoreState = atom({
    key: "surveyScore",
    default: [],
});

export const checkInfoState = atom({
    key: "checkInfoState",
    default: {
        projectId: "",
        evaluationType: "",
        evaluatedId: "",
    },
});

export const availableIdState = atom({
    key: "availableIdState",
    default: true,
});

export const statusState = atom({
    key: "statusState",
    defulat: { status: 0 },
});
