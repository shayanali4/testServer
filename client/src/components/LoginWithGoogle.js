import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { googleLogin } from '../actions/userActions';

function LoginWithGoogle() {
    const dispatch = useDispatch();

    const responseSuccessGoogle = (response) => {
       
        dispatch(googleLogin(response.profileObj.email, response.profileObj.name ));
    }

    const responseFailGoogle = (response) => {
        console.log("error", response);
    }
    return (
        <div>
           <GoogleLogin
                clientId="241875015765-j7jeinij0m8par8uco2stsjo4boceiou.apps.googleusercontent.com"
                buttonText="Login With Google"
                onSuccess={responseSuccessGoogle}
                onFailure={responseFailGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default LoginWithGoogle
