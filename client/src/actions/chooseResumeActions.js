import { CHOOSE_RESUME } from "../constants/chooseResumeConstants";


export const getChoosenResume = (data) => async (dispatch) => {
    dispatch({
        type: CHOOSE_RESUME,
        payload: data,
    });
    localStorage.setItem('choosenResume', JSON.stringify(data));
};