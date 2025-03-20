import { CourseState } from "../atoms/course";
import { UserState } from "../atoms/user";
import { selector } from "recoil";

export const isCourseLoading = selector({
    key: "isCourseLoadingState",
    get: ({ get }) => {
        const state = get(CourseState);
        return state.isLoading;
    },
});

export const courseDetails = selector({
    key: "courseDetailState",
    get: ({ get }) => {
        const state = get(CourseState);
        return state.course;
    },
});
