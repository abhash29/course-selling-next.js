import {atom} from "recoil";

export const CourseState = atom({
    key: 'CourseState',
    default: {
        isLoading: true,
        course: null
    },
});