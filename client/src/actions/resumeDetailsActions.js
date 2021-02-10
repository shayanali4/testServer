import {
    PROFILE_PHOTO, PERSONAL_INFO, GOALS_INFO, JOB_INFO, EDUCATION_INFO, WORK_EXPERIENCE_INFO,
    HOBBIES_INFO, FACTS_INFO,
    SOCIAL_LINKS_INFO, LANGUAGES_INFO, SKILLS_INFO, PROFILE_SUMMARY
} from "../constants/resumeDetailsConstants";


export const getProfilePhoto = (data) => async (dispatch) => {
    dispatch({
        type: PROFILE_PHOTO,
        payload: data,
    });
};

export const getPersonalInfo = (data) => async (dispatch) => {
    dispatch({
        type: PERSONAL_INFO,
        payload: data,
    });
    localStorage.setItem('personalInfo', JSON.stringify(data));
};
    
export const getGoalsInfo = (data) => async (dispatch) => {
    dispatch({
        type: GOALS_INFO,
        payload: data,
    });
    localStorage.setItem('goalsInfo', JSON.stringify(data));
};
export const getJobInfo = (data) => async (dispatch) => {
    dispatch({
        type: JOB_INFO,
        payload: data,
    });
    localStorage.setItem('jobInfo', JSON.stringify(data));

};

export const getEducationInfo = (data) => async (dispatch) => {
    dispatch({
        type: EDUCATION_INFO,
        payload: data.educationDetailsList,
    });
    localStorage.setItem('educationInfo', JSON.stringify(data.educationDetailsList));
};

export const getSkillsInfo = (data) => async (dispatch) => {
    dispatch({
        type: SKILLS_INFO,
        payload: data.skillsList,
    });
    localStorage.setItem('skillsInfo', JSON.stringify(data.skillsList));
};

export const getSocialLinksInfo = (data) => async (dispatch) => {
    dispatch({
        type: SOCIAL_LINKS_INFO,
        payload: data.socialLinksList,
    });
    localStorage.setItem('socialLinksInfo', JSON.stringify(data.socialLinksList));
};

export const getLanguagesInfo = (data) => async (dispatch) => {
    dispatch({
        type: LANGUAGES_INFO,
        payload: data.languagesList,
    });
    localStorage.setItem('languagesInfo', JSON.stringify(data.languagesList));
};

export const getFactsInfo = (data) => async (dispatch) => {
    dispatch({
        type: FACTS_INFO,
        payload: data.factsList,
    });
    localStorage.setItem('factsInfo', JSON.stringify(data.factsList));
};

export const getWorkExperienceInfo = (data) => async (dispatch) => {
    dispatch({
        type: WORK_EXPERIENCE_INFO,
        payload: data.workExperienceList,
    });
    localStorage.setItem('workInfo', JSON.stringify(data.workExperienceList));

};

export const getHobbiesInfo = (data) => async (dispatch) => {
    dispatch({
        type: HOBBIES_INFO,
        payload: data.hobbiesList,
    });
};

export const getProfileSumary = (data) => async (dispatch) => {
    dispatch({
        type: PROFILE_SUMMARY,
        payload: data,
    });
};

