import { UserState } from "../atoms/user";
import {selector} from "recoil";

export const userEmailState = selector({
    key: "userEmailState",
    get: ({ get }) => {
        const state = get(UserState);
        return state.userEmail;
    },
});
