import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../../components/windowDimensions';
import ResumeOneImg from './images/one.png';
import ResumeTwoImg from './images/two.png';
import ResumeThreeImg from './images/three.png';
import ResumeFourImg from './images/four.jpg';
import ResumeFiveImg from './images/five.png';
import ResumeSixImg from './images/six.png';
import ResumeSevenImg from './images/seven.png';
import ResumeEightImg from './images/eight.png';
import ResumeNineImg from './images/nine.jpg';
import ResumeTenImg from './images/ten.jpg';
import ResumeElevenImg from './images/eleven.png';
import ResumeTwelveImg from './images/twelve.png';
import ResumeThirteenImg from './images/thirteen.png';
import ResumeFourteenImg from './images/fourteen.png';
import ResumeFifteenImg from './images/fifteen.png';
import { useDispatch, useSelector } from 'react-redux';
import { getChoosenResume } from '../../actions/chooseResumeActions';
import { Link } from 'react-router-dom';
import './styles.css';

function ChooseTemplateScreen() {
    const [selectedImage, setSelectedImage] = useState('');
    const [choosenResume, setChoosenResume] = useState('');
    const [modalStatus, setModalStatus] = useState(false);
    const { width } = useWindowDimensions();
    const dispatch = useDispatch();

    const data = useSelector(state => state);
    console.log('data in choose template==>',data)

    useEffect(() => {
        dispatch(getChoosenResume(choosenResume));
    }, [dispatch,choosenResume]);
    
    return (
        <div className="template-screen">
            <div id="myModal" className={`modal ${modalStatus ? "d-block" : "d-none"}`}>
                <div className={`modal-content ${width<=420?'point-three':''}`}>
                    <div className="modal-header">
                        {width <= 820 ?<>
                        <div className="back"><i onClick={()=>setModalStatus(false)} class="fa fa-arrow-left" aria-hidden="true"></i></div>
                        <div className="text"><h2>Your Resume</h2></div>
                            <div><p>a</p></div></> :<>
                            <span onClick={()=>setModalStatus(false)} className="close">&times;</span>
                            <h2>Your Choosen Template</h2></>
                        }
                    </div>
                    <div className="modal-body">
                        
                        <img src={selectedImage} alt="" />
                        
                    </div>
                </div>
                {width<=820?
                <div className='mobile-tools'>
                        <button onClick={() => setModalStatus(false)}>Close Preview</button>
                    </div>
                :<></>}
            </div>
            <div className='first-portion'>
                <div className='text'>
                    <p className='first-text'>Professional</p>
                    <p className='second-text'> Resume Maker</p>
                    <p className='third-text'> For <b>Profession</b> Lover</p>
                </div>
                <div className='steps-part'>
                    <div className='info'>
                        <p>How To Do :</p>
                    </div>
                    <div className='steps'>
                        <div>
                            <span className='first-circle current'></span>
                            <p>Choose Template</p>
                        </div>
                        <div>
                            <span className='second-circle'></span>
                            <p>Fill Up Out</p>
                        </div>
                        <div>
                            <span className='third-circle'></span>
                            <p>Setup</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='second-portion'>
                <div className="container">
                    <img src={selectedImage} alt="" />
                </div>
            </div>
            <div className='third-portion'>
                <div className="gallery">
                    <div className={`column ${choosenResume==='ResumeOne'?'selected':''}`}>
                        <img src={ResumeOneImg} alt=""
                            onClick={() => {
                                setSelectedImage(ResumeOneImg);
                                setChoosenResume('ResumeOne')
                            }} />
                    </div>
                    <div className={`column ${choosenResume==='ResumeTwo'?'selected':''}`}>
                        <img src={ResumeTwoImg} alt=""
                            onClick={() => {
                                setSelectedImage(ResumeTwoImg);
                                setChoosenResume('ResumeTwo')
                            }} />
                    </div>
                    <div className={`column ${choosenResume==='ResumeThree'?'selected':''}`}>
                        <img src={ResumeThreeImg} alt=""
                            onClick={() => {
                            setSelectedImage(ResumeThreeImg);
                            setChoosenResume('ResumeThree')
                        }} />
                    </div>
                    <div className={`column ${choosenResume==='ResumeFour'?'selected':''}`}>
                        <img src={ResumeFourImg} alt=""
                            onClick={() => {
                            setSelectedImage(ResumeFourImg);
                                    setChoosenResume('ResumeFour')
                            }} />
                    </div>
                    <div className={`column ${choosenResume==='ResumeFive'?'selected':''}`}>
                        <img src={ResumeFiveImg} alt=""
                            onClick={() => {
                                setSelectedImage(ResumeFiveImg)
                                setChoosenResume('ResumeFive')
                            }} />
                    </div>
                    <div className={`column ${choosenResume==='ResumeSix'?'selected':''}`}>
                        <img src={ResumeSixImg} alt=""
                            onClick={() => {
                                setSelectedImage(ResumeSixImg);
                                setChoosenResume('ResumeSix')
                            }} />
                    </div>
                    <div className={`column ${choosenResume==='ResumeSeven'?'selected':''}`}>
                        <img src={ResumeSevenImg} alt=""
                            onClick={() => {
                                setSelectedImage(ResumeSevenImg);
                                setChoosenResume('ResumeSeven')
                            }} />
                    </div>
                    <div className={`column ${choosenResume==='ResumeEight'?'selected':''}`}>
                        <img src={ResumeEightImg} alt=""
                            onClick={() => {
                                setSelectedImage(ResumeEightImg);
                                setChoosenResume('ResumeEight')
                            }} />
                    </div>
                    <div className={`column ${choosenResume==='ResumeNine'?'selected':''}`}>
                        <img src={ResumeNineImg} alt=""
                            onClick={() => {
                                setSelectedImage(ResumeNineImg);
                                setChoosenResume('ResumeNine')
                            }} />
                    </div>
                    <div className={`column ${choosenResume==='ResumeTen'?'selected':''}`}>
                        <img src={ResumeTenImg} alt=""
                            onClick={() => {
                                setSelectedImage(ResumeTenImg)
                                setChoosenResume('ResumeTen')
                            }} />
                    </div>
                    <div className={`column ${choosenResume==='ResumeEleven'?'selected':''}`}>
                        <img src={ResumeElevenImg} alt=""
                            onClick={() => {
                                setSelectedImage(ResumeElevenImg)
                                setChoosenResume('ResumeEleven')
                            }} />
                    </div>
                    <div className={`column ${choosenResume==='ResumeTwelve'?'selected':''}`}>
                        <img src={ResumeTwelveImg} alt=""
                            onClick={() => {
                            setSelectedImage(ResumeTwelveImg)
                            setChoosenResume('ResumeTwelve')
                        }} />
                    </div>
                    <div className={`column ${choosenResume==='ResumeThirteen'?'selected':''}`}>
                        <img src={ResumeThirteenImg} alt=""
                            onClick={() => {
                            setSelectedImage(ResumeThirteenImg)
                            setChoosenResume('ResumeThirteen')
                        }} />
                    </div>
                    <div className={`column ${choosenResume==='ResumeFourteen'?'selected':''}`}>
                        <img src={ResumeFourteenImg} alt=""
                            onClick={() => {
                            setSelectedImage(ResumeFourteenImg)
                            setChoosenResume('ResumeFourteen')
                        }} />
                    </div>
                    <div className={`column ${choosenResume==='ResumeFifteen'?'selected':''}`}>
                        <img src={ResumeFifteenImg} alt=""
                            onClick={() => {
                            setSelectedImage(ResumeFifteenImg)
                            setChoosenResume('ResumeFifteen')
                        }} />
                    </div>
                </div>
                {width <= 600 ?
                    <p className="select">Select Any Design :</p>
                    : <></>}
                <div className="buttons">
                    {selectedImage === '' ? <></> :<>
                        <button onClick={() => setModalStatus(true)}
                            className="preview">Preview</button>
                        <Link to='/create'>
                            <button className="create">Create Resume</button>
                        </Link></>}
                    
                </div>
            </div>
            
        </div>
    )
}

export default ChooseTemplateScreen;
