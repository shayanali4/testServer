import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { useDispatch } from 'react-redux';
import { facebookLogin } from '../actions/userActions';

function LoginWithFacebook() {
    const dispatch = useDispatch();

    const responseSuccessFacebook = (response) => {
        console.log("user", response);
       
        dispatch(facebookLogin(response.email, response.name ));
    }

    const responseFailFacebook = (response) => {
        console.log("error", response);
    }
    return (
        <div>
           <FacebookLogin
            appId="374523087223253"
            autoLoad={false}
            fields="name,email,picture"
            onClick={responseFailFacebook}
            callback={responseSuccessFacebook} />
        </div>
    )
}

export default LoginWithFacebook
