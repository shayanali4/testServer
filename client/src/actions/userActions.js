import Axios from "axios";
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants"

export const googleLogin = (email, name) => async (dispatch) => {
        console.log("user in actions", email);

    dispatch({
        type: USER_SIGNIN_REQUEST,
        payload: {
            email, name
        }
    });
    try {
        const { data } = await Axios.post('/api/users/googleLogin', { email, name });
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data,
            });
        localStorage.setItem('userInfo', JSON.stringify(data));
        } catch (err) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: err.response && err.response.data.message ?
            err.response.data.message : err.message,
        });
    }
}

export const facebookLogin = (email, name) => async (dispatch) => {
        // console.log("user in actions", email);

    dispatch({
        type: USER_SIGNIN_REQUEST,
        payload: {
            email, name
        }
    });
    try {
        const { data } = await Axios.post('/api/users/facebookLogin', { email, name });
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data,
            });
        localStorage.setItem('userInfo', JSON.stringify(data));
        } catch (err) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: err.response && err.response.data.message ?
            err.response.data.message : err.message,
        });
    }
}

export const signin = (email, password) => async (dispatch) => {
    dispatch({
        type: USER_SIGNIN_REQUEST,
        payload: {
            email,
            password
        }
    });
    try {
        const { data } = await Axios.post('/api/users/signin', { email, password });
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data,
        });
        localStorage.setItem('userInfo', JSON.stringify(data));
     } catch (err) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: err.response && err.response.data.message ?
                err.response.data.message : err.message,
        });
    }
};

export const register = (name, email, password, gender, profession, birthDate) => async (dispatch) => {
    dispatch({
        type: USER_REGISTER_REQUEST,
        payload: {
            name,
            email,
            password, 
            gender,
            profession,
            birthDate,
            // loginType:"Email/Password"
        }
    });
    try {
        const { data } = await Axios.post('/api/users/register', {
            name, email, password, gender, profession, birthDate
        });
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        });
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data,
        });
        localStorage.setItem('userInfo', JSON.stringify(data));
     } catch (err) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: err.response && err.response.data.message ?
                err.response.data.message : err.message,
        });
    }
};

export const signout = () => (dispatch) => {
    console.log("sign out action");
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    dispatch({ type: USER_SIGNOUT });
};