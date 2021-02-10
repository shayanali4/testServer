import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { chooseResumeReducer } from "./reducers/chooseResumeReducer";
import { resumeDetailsReducer } from './reducers/resumeDetailsReducer';
import { userRegisterReducer, userSigninReducer } from "./reducers/userReducers";

const initialState = {
    resumeDetails: localStorage.getItem('resumeDetails') ?
            JSON.parse(localStorage.getItem('resumeDetails'))
            :{
        profileSummary: '',
        personalInfo: localStorage.getItem('personalInfo') ?
            JSON.parse(localStorage.getItem('personalInfo'))
            :{
                firstName: '', lastName: '', profession: '', city: '', province: '', phone: '', email: ''
            },
        goalsInfo: localStorage.getItem('jobInfo') ?
            JSON.parse(localStorage.getItem('jobInfo'))
            :{
            pastJob:'',presentJob:'',futureJob:''
        },
        workExperience: localStorage.getItem('workInfo') ?
            JSON.parse(localStorage.getItem('workInfo'))
            :[{ title: '', startDate: '', endDate: '' }, { title: '', startDate: '', endDate: '' }],
        facts: ["", ""],
        skills: localStorage.getItem('skillsInfo') ?
            JSON.parse(localStorage.getItem('skillsInfo'))
            :[{}],
        educationInfo: localStorage.getItem('educationInfo') ?
            JSON.parse(localStorage.getItem('educationInfo'))
            :[{
            instituteName: '',
            instituteLocation: '',
            studyField: '',
            studyStatus: false,
            graduationStartDate: '',
            graduationEndDate: '',
            }
        ],
        socialLinks: localStorage.getItem('socialLinksInfo') ?
            JSON.parse(localStorage.getItem('socialLinksInfo'))
            :['', ''],
        languages: ['', ''],
        hobbies: ['', ''],
        recentJobs:{job:'', employer:'', jobCity:'', jobStartDate:'', jobEndDate:'', stillWorking:false}

    },
    // choosenResume: { choosenResume: '', },
    choosenResume: {
        choosenResume: localStorage.getItem('choosenResume') ?
            JSON.parse(localStorage.getItem('choosenResume'))
            :'',
    },
    // userSignin: {
    //     userInfo: localStorage.getItem('userInfo') ?
    //         JSON.parse(localStorage.getItem('userInfo'))
    //         :null,
    // },
};
const reducer = combineReducers({
    resumeDetails: resumeDetailsReducer,
    choosenResume: chooseResumeReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;