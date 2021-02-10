import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import DetailsForm from '../../components/DetailsForm/DetailsForm';
import ResumeOne from '../../components/ResumeComponent/ResumeOne/ResumeOne';
import ResumeTwo from '../../components/ResumeComponent/ResumeTwo/ResumeTwo';
import ResumeThree from '../../components/ResumeComponent/ResumeThree/ResumeThree';
import ResumeFour from '../../components/ResumeComponent/ResumeFour/ResumeFour';
import ResumeFive from '../../components/ResumeComponent/ResumeFive/ResumeFive';
import ResumeSix from '../../components/ResumeComponent/ResumeSix/ResumeSix';
import ResumeSeven from '../../components/ResumeComponent/ResumeSeven/ResumeSeven';
import ResumeEight from '../../components/ResumeComponent/ResumeEight/ResumeEight';
import ResumeNine from '../../components/ResumeComponent/ResumeNine/ResumeNine';
import ResumeTen from '../../components/ResumeComponent/ResumeTen/ResumeTen';
import ResumeEleven from '../../components/ResumeComponent/ResumeEleven/ResumeEleven';
import ResumeTwelve from '../../components/ResumeComponent/ResumeTwelve/ResumeTwelve';
import ResumeThirteen from '../../components/ResumeComponent/ResumeThirteen/ResumeThirteen';
import ResumeFourteen from '../../components/ResumeComponent/ResumeFourteen/ResumeFourteen';
import ResumeFifteen from '../../components/ResumeComponent/ResumeFifteen/ResumeFifteen';
import useWindowDimensions from '../../components/windowDimensions';
import './styles.css';
import { Redirect } from 'react-router-dom';

function MainScreen(props) {
    const { width } = useWindowDimensions();
    const [modalStatus, setModalStatus] = useState(false);
    const scaleValue = 0.44;
    const wheel = { disabled: true };
    const pinch = { disabled: false, step:10 };
    const pan = { disabled: false, step:10 };
    const doubleClick = { disabled: true, step:10 };
    const zoomIn = { step: 5};
    const zoomOut = { step: 5};
    const options = { minScale: scaleValue, maxScale: 1.42 };
    const choosenResume = useSelector(state => state.choosenResume.choosenResume);

    if (choosenResume === '') {
        return <Redirect to='/' />
    }

    return (
        
        <div className="main-screen">

            <div id="myModal" className={`modal ${modalStatus ? "d-block" : "d-none"}`}>
                <div className={`modal-content ${width<=320?'point-three':width>320 && width<=375?'point-four':width>375 && width<=420?'point-five':''}`}>
                    <div className="modal-header">
                        {width <= 820 ?<>
                        <div className="back"><i onClick={()=>setModalStatus(false)} class="fa fa-arrow-left" aria-hidden="true"></i></div>
                        <div className="text"><h2>Your Resume</h2></div>
                            <div><p>a</p></div></> :<>
                            <span onClick={()=>setModalStatus(false)} className="close">&times;</span>
                            <h2>Your Resume</h2></>
                        }
                    </div>
                    <div className="modal-body">
                        <div className={`${width <= 420 ? 'point-three' : ''}`}>
                            {choosenResume === "ResumeOne" ?<ResumeOne />
                            : choosenResume === "ResumeTwo" ?<ResumeTwo />
                            : choosenResume === "ResumeThree" ?<ResumeThree />
                            : choosenResume === "ResumeFour" ?<ResumeFour />
                            : choosenResume === "ResumeFive" ?<ResumeFive />
                            : choosenResume === "ResumeSix" ?<ResumeSix />
                            : choosenResume === "ResumeSeven" ?<ResumeSeven />
                            : choosenResume === "ResumeEight" ?<ResumeEight />
                            : choosenResume === "ResumeNine" ?<ResumeNine />
                            : choosenResume === "ResumeTen" ?<ResumeTen />
                            : choosenResume === "ResumeEleven" ?<ResumeEleven />
                            : choosenResume === "ResumeTwelve" ?<ResumeTwelve />
                            : choosenResume === "ResumeThirteen" ?<ResumeThirteen />
                            : choosenResume === "ResumeFourteen" ?<ResumeFourteen />
                            : choosenResume === "ResumeFifteen" ?<ResumeFifteen />:<></> }
                        </div>
                    </div>
                </div>
                {width<=820?
                <div className='mobile-tools'>
                        <button onClick={() => setModalStatus(false)}>Close Preview</button>
                    </div>
                :<></>}
            </div>
            <div className={`form-area ${modalStatus ? "blur" : ""}`}>
                <DetailsForm />
            </div>
            <div className={`resume-area ${modalStatus ? "blur" : ""}`}>
                <div className="tool-box">
                    <div className="preview">
                        <button onClick={()=>setModalStatus(true)}>Preview</button>
                    </div>
                    <div className="resume">
                        
                        <TransformWrapper
                            defaultScale={scaleValue}
                            scale={scaleValue}
                            wheel={wheel}
                            pinch={pinch}
                            pan={pan}
                            doubleClick={doubleClick}
                            zoomIn={zoomIn}
                            zoomOut={zoomOut}
                            options={options}
                            >

                            {({ zoomIn, zoomOut, ...rest }) => (
                            <React.Fragment>
                                <div className="tools">
                                    <div onClick={zoomIn} className="button">
                                        <i className="fa fa-search-plus" aria-hidden="true"></i>
                                        <p>Zoom In</p>
                                    </div>
                                    <div onClick={zoomOut} className="button">
                                        <i className="fa fa-search-minus" aria-hidden="true"></i>
                                        <p>Zoom Out</p>
                                    </div>
                                </div>
                                <TransformComponent>
                                    {choosenResume === "ResumeOne" ?<ResumeOne />
                                    : choosenResume === "ResumeTwo" ?<ResumeTwo />
                                    : choosenResume === "ResumeThree" ?<ResumeThree />
                                    : choosenResume === "ResumeFour" ?<ResumeFour />
                                    : choosenResume === "ResumeFive" ?<ResumeFive />
                                    : choosenResume === "ResumeSix" ?<ResumeSix />
                                    : choosenResume === "ResumeSeven" ?<ResumeSeven />
                                    : choosenResume === "ResumeEight" ?<ResumeEight />
                                    : choosenResume === "ResumeNine" ?<ResumeNine />
                                    : choosenResume === "ResumeTen" ?<ResumeTen />
                                    : choosenResume === "ResumeEleven" ?<ResumeEleven />
                                    : choosenResume === "ResumeTwelve" ?<ResumeTwelve />
                                    : choosenResume === "ResumeThirteen" ?<ResumeThirteen />
                                    : choosenResume === "ResumeFourteen" ?<ResumeFourteen />
                                    : choosenResume === "ResumeFifteen" ?<ResumeFifteen />:<></> }
                                </TransformComponent>
                            </React.Fragment>
                            )}
                        </TransformWrapper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainScreen;
