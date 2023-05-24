import { atom } from "recoil";

let selectedEmployeesState = atom({
    key: "selectedEmployeesState",
    default: [],
});

export default selectedEmployeesState;;
