import { EDUCATION_INFO, JOB_INFO, PERSONAL_INFO, SKILLS_INFO, HOBBIES_INFO, WORK_EXPERIENCE_INFO, SOCIAL_LINKS_INFO, FACTS_INFO, PROFILE_SUMMARY, PROFILE_PHOTO, GOALS_INFO, LANGUAGES_INFO } from "../constants/resumeDetailsConstants";

export const resumeDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case PROFILE_PHOTO:
            return {
                ...state,
                profilePhoto: action.payload,
            }
        case PERSONAL_INFO:
            return {
                ...state,
                personalInfo: action.payload,
            }
        case GOALS_INFO:
            return {
                ...state,
                goalsInfo: action.payload,
            }
        case JOB_INFO:
            return {
                ...state,
                recentJobs: action.payload,
            }
        case EDUCATION_INFO:
            return {
                ...state,
                educationInfo: action.payload,
            }
        case SKILLS_INFO:
            return {
                ...state,
                skills: action.payload,
            }
        case SOCIAL_LINKS_INFO:
            return {
                ...state,
                socialLinks: action.payload,
            }
        case LANGUAGES_INFO:
            return {
                ...state,
                languages: action.payload,
            }
        case FACTS_INFO:
            return {
                ...state,
                facts: action.payload,
            }
        case WORK_EXPERIENCE_INFO:
            return {
                ...state,
                workExperience: action.payload,
            }
        case HOBBIES_INFO:
            return {
                ...state,
                hobbies: action.payload,
            }
        case PROFILE_SUMMARY:
            return {
                ...state,
                profileSummary: action.payload,
            }
        default:
            return state
    };
};

