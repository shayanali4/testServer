import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../actions/userActions';
import Loadingbox from '../../components/LoadingBox/LoadingBox';
import MessageBox from '../../components/MessageBox/MessageBox';
import './styles.css';


function RegisterScreen(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [profession, setProfession] = useState("");
    const [birthDate, setBirthDate] = useState("");

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;  

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password, gender, profession, birthDate));
    };

    useEffect(() => {
        if (userInfo) {
            props.history.push("/generate");
        }
    }, [props.history, userInfo]);

    return (
        <div className="register">
            <div className="image-background">
                <div className="content">
                    <form className="form" onSubmit={submitHandler}>
                        <div>
                            <h1>Sign Up</h1>
                        </div>
                        {loading && <Loadingbox/>}
                        {error && <MessageBox variant="danger">{error}</MessageBox>}
                        <div className="username">
                            <label htmlFor="username">Full Name</label>
                            <input type="text" id="username" placeholder="Your Name" required
                            onChange={e=>setName(e.target.value)} />
                        </div>
                        <div className="username">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" required
                            onChange={e=>setEmail(e.target.value)} />
                        </div>
                        <div className="username">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter Password" required
                            onChange={e=>setPassword(e.target.value)} />
                        </div>
                        <div className="gender">
                            <label htmlFor="gender">Gender</label>
                            <select onChange={(e)=>setGender(e.target.value)} name="gender" id="gender">
                                <option default>Iam a</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="username">
                            <label htmlFor="date">Your Birth Date</label>
                            <input type="date" id="date" required
                            onChange={e=>setBirthDate(e.target.value)} />
                        </div>
                        <div className="field">
                            <label htmlFor="profession">Your Profession</label>
                            <input type="text" id="profession" placeholder="Designer, Banking, Business " required
                            onChange={e=>setProfession(e.target.value)} />
                        </div>
                        <div className="form-button">
                            <button className="primary" type="submit">Sign Up</button>
                        </div>
                        <div className="confirm">
                            <p>Already Have An Account ? {' '}
                                <Link to='/signin'>Sign In</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterScreen
