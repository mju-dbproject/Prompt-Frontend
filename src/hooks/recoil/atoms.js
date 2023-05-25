import { atom } from "recoil";

export const selectedEmployeesState = atom({
    key: "selectedEmployeesState",
    default: [],
});

export const approvalEmployeesState = atom({
    key: "approvalEmployeesState",
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
