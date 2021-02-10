import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../actions/userActions';
import Loadingbox from '../../components/LoadingBox/LoadingBox';
import MessageBox from '../../components/MessageBox/MessageBox';
import './styles.css';
import LoginWithGoogle from '../../components/LoginWithGoogle';
import LoginWithFacebook from '../../components/LoginWithFacebook';


function SigninScreen(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;  

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    };

    useEffect(() => {
        if (userInfo) {
            props.history.push("/generate");
        }
    }, [props.history, userInfo]);

    return (
        <div className="login">
            <div className="image-background">
                <div className="content">
                    <form className="form" onSubmit={submitHandler}>
                        <div>
                            <h1>Sign In</h1>
                        </div>
                        {loading && <Loadingbox/>}
                        {error && <MessageBox variant="danger">{error}</MessageBox>}
                        <div className="username">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" required
                            onChange={e=>setEmail(e.target.value)} />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter password" required
                            onChange={e=>setPassword(e.target.value)} />
                        </div>
                        <div className="forgot-pass">
                            <Link>Forgot Password ?</Link>
                        </div>
                        <div className="form-button">
                            <button className="primary" type="submit">LOGIN</button>
                        </div>
                        <div className="confirm">
                            <p>DON'T Have An Account ? {' '}
                                <Link to='/register'>Sign Up</Link>
                            </p>
                        </div>
                        <LoginWithGoogle />
                        <LoginWithFacebook />
                        {/* <LoginWithInstagram /> */}
                    </form>
                </div>
            </div>
        </div>  
    )
}

export default SigninScreen
