import { CHOOSE_RESUME } from "../constants/chooseResumeConstants";

export const chooseResumeReducer = (state = {}, action) => {
    switch (action.type) {
        case CHOOSE_RESUME:
            return {
                ...state,
                choosenResume: action.payload,
            }
        default:
            return state;
    };
}