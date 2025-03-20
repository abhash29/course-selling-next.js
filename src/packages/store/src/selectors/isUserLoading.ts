import { UserState } from "../atoms/user";
import {selector} from "recoil";

export const isUserLoading = selector({
    key: 'userLoadingState',
    get: ({get}) => {
        const state = get(UserState);
        return state.isLoading;
    },
});