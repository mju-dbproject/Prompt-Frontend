import { atom } from "recoil";

export const selectedEmployeesState = atom({
    key: "selectedEmployeesState",
    default: [],
});

export const approvalEmployeesState = atom({
    key: "approvalEmployeesState",
    default: [],
});
