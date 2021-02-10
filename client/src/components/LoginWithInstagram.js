import React from 'react';
import InstagramLogin from 'react-instagram-login';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { googleLogin } from '../actions/userActions';

function LoginWithGoogle() {
    const dispatch = useDispatch();

    const responseSuccessInstagram = (response) => {
        console.log("user", response);
       
        // dispatch(googleLogin(response.profileObj.email, response.profileObj.name ));
    }

    const responseFailInstagram = (response) => {
        console.log("error", response);
    }
    return (
        <div>
            <InstagramLogin
                clientId="1738298976344127"
                buttonText="Login With Instagram"
                onSuccess={responseSuccessInstagram}
                onFailure={responseSuccessInstagram}
            />
        </div>
    )
}

export default LoginWithGoogle
