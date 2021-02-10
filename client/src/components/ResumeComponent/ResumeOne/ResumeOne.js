import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './styles.css';
import { useSelector } from 'react-redux';

function ResumeOne(props) {
    const resumeDetails = useSelector(state => state.resumeDetails);

    // Destructuring Personal Info
    const { personalInfo } = resumeDetails;
    const { firstName, lastName, profession, city, address, phone, email } = personalInfo;

    // Destructuring Education Info
    const { educationInfo } = resumeDetails;

    // Destructuring Goals
    const { goalsInfo } = resumeDetails;
    const { pastJob, presentJob, futureJob} = goalsInfo;

    const { profilePhoto } = resumeDetails;
    const { facts } = resumeDetails;
    const { profileSummary } = resumeDetails;
    const { socialLinks } = resumeDetails;
    const { languages } = resumeDetails;
    const { skills } = resumeDetails;
    const { workExperience } = resumeDetails;
    const { hobbies } = resumeDetails;
    
    // console.log("resume props===>", resumeDetails);
    return (
        <div className="resumeOne">           
            <div id="print-content" className="content">
                <img className="opacity-img" src="/assets/images/Opacity-text.png" alt="" />
                <div className="left-area">
                    <div className="info">
                        {profilePhoto?<div className="photo">
                            <img src={profilePhoto} alt="" />
                        </div>:<></>}
                        
                        <div className="text">
                            {firstName !== ''||lastName !== '' ?
                                <h1>{firstName} {lastName}</h1>
                                : <></>}
                            {profession!==''?<p>{profession}</p>:<></>}
                        </div>
                    </div>
                    {profileSummary !== '' ?
                        <div className="profile">
                            <h3>PROFILE</h3>
                            <p>{profileSummary}</p>
                        </div>:<></>}
                    
                    <div className="contact">
                        {phone !== '' || email !== '' || address !== '' ?
                            <h3>CONTACT</h3> : <></>}
                        {phone !== '' ?
                            <div className="phone">
                                <p>{phone}</p>
                            </div> : <></>}
                        {email !== '' ?
                            <div className="email">
                                <p>{email}</p>
                            </div> : <></>}
                        {address !== '' || city!=='' ?
                        <div className="home">
                                <p>{address}, {city}=</p>
                        </div>:<></>}
                    </div>
                    {socialLinks.length >= 1 ?
                        <div className="contact">
                            {socialLinks[0] !== '' ?
                            <>
                            <h3>SOCIAL LINKS</h3>
                            {socialLinks.map((v,i)=>
                            <div key={i} className="phone">
                                    <p>{v}</p>
                            </div>)}
                            </>: <></>}
                        </div> : <></>}
                    {hobbies[0]!==''?
                    <div className="interests">
                        <h3>INTERESTS</h3>
                        <div className="bars">
                            {hobbies.map((v,i)=>
                            v.type==='Other'?
                            <div key={i} className="bar">
                                <i className="fas fa-star"></i>
                                <p>{v.value}</p>
                            </div>
                            : <div key={i} className="bar">
                                <i class={v==='Aviation'?'fas fa-plane':
                                v==='Traveling'?'fas fa-route':
                                v==='Video Games'?"fas fa-gamepad":
                                v==='Reading'?"fas fa-book-reader":
                                v==='Writing'?"fas fa-pen-alt":
                                v==='Driving'?"fas fa-car":
                                v==='Riding'?"fas fa-motorcycle":
                                v==='Listening'?"fas fa-headphones":
                                v==='Singing'?"fas fa-microphone":
                                v==='Exercising'?"fas fa-dumbbell":
                                v==='Swimmimg'?"fas fa-swimmer":
                                v==='Running'?"fas fa-running":
                                v==='Chess'?"fas fa-chess":
                                v==='Hiking'?"fas fa-hiking":
                                v==='Skiing'?"fas fa-skiing":
                                v==='Running'?"fas fa-headphones":
                                v==='Socializing'?"fas fa-user-friends":
                                v==='Photography'?"fas fa-camera":
                                v==='DJ Playing'?"fas fa-headphones":'fas fa-star'} aria-hidden="true"></i>
                                <p>{v}</p>
                            </div>
                            )}
                        </div>  
                    </div>:<></>}
                    {languages[0] === '' ?<></>:
                    <div className="profile">
                        <h3>LANGUAGES</h3>
                        {languages.map((v, i) =>
                            <p key={i}><span>&#8226;</span> {v}</p>
                        )}
                    </div>}
                </div>
                <div className="right-area">
                    {educationInfo.length >= 1 ?
                        educationInfo[0].graduationStartDate === '' &&
                        educationInfo[0].graduationEndDate === '' &&
                        educationInfo[0].instituteName === '' &&
                        educationInfo[0].educationDetail==='' &&
                        educationInfo[0].studyField === '' ? <></> :
                    <div className="education">
                        <h3 className="right"><span>EDUCATION</span></h3>
                        <div className="main">
                            {educationInfo.map((v, i) =>
                                v.graduationStartDate !== '' ||
                                    v.graduationEndDate !== '' ||
                                    v.instituteName !== '' ||
                                    v.instituteLocation!=='' ||
                                    v.educationDetail!=='' ||
                                    v.studyField!==''?
                            <div key={i}>
                                <div className="left-part">
                                    <p>{v.graduationStartDate} - {v.graduationEndDate ? v.graduationEndDate :'Present'}</p>
                                    <span>&#8226;</span>
                                </div>
                                <div className="right-part"> 
                                    <h4>{v.studyField}</h4>
                                    <h5>{v.instituteName}, {v.instituteLocation}</h5>
                                    <p>{v.educationDetail}.</p>
                                </div>
                            </div>:<></>)}
                        </div> 
                    </div>:<></>}
                    {skills.length >= 1 ?
                        skills[0].title!==''?
                    <div className="language">
                        <h3 className="right"><span>SKILLS</span></h3>
                        <div className="main">
                            <div className="circles">
                                {skills.map((v, i) =>
                                v.title!==''?
                                    <div key={i} className="loading">
                                        <CircularProgressbar key={i} value={v.value} text={`${v.value}%`} />
                                        <p>{v.title}</p>
                                    </div>:<></>
                                )}
                            </div>
                    </div>
                    </div>:<></>:<></>}
                    {facts[0].detail===''?<></>:
                    <div className='facts'>
                        <h3 className="right"><span>Facts</span></h3>
                        <div>
                        {facts.map((v, i) =>
                            v.detail === 'Projects' ?
                                <p key={i}>
                                    <span>&#8226;</span>
                                {`I have completed ${v.value}+ projects.`}
                                </p> : v.detail === 'Experience' ?
                                <p key={i}>
                                        <span>&#8226;</span>
                                    {`I have  ${v.value}+ years of experience.`}
                                </p> : v.detail === 'Customers' ?
                                <p key={i}>
                                        <span>&#8226;</span>
                                    {`I have ${v.value}+ customers.`}
                                </p>:<p key={i}>
                                        <span>&#8226;</span>
                                    {v.detail}
                                </p>)}
                        </div>
                    </div>}
                    {workExperience.length >= 1 ?
                        workExperience[0].startDate === '' &&
                        workExperience[0].endDate === '' &&
                        workExperience[0].title === '' &&
                        workExperience[0].workDetail==='' &&
                        workExperience[0].employer === '' ?<></>:
                    <div className="education">
                        <h3 className="right"><span>EMPLOYEMENT HISTORY</span></h3>
                        <div className="main">
                            {workExperience.map((v, i) =>
                                    v.employer !== '' ||
                                    v.workDetail !== '' ||
                                    v.title!=='' ||
                                    v.startDate!=='' ||
                                    v.endDate!==''?
                            <div key={i}>
                                <div className="left-part">
                                    <p>{v.startDate} - {v.endDate ? v.endDate :'Present'}</p>
                                    <span>&#8226;</span>
                                </div>
                                <div className="right-part"> 
                                    <h4>{v.title}</h4>
                                    <h5>{v.employerName}</h5>
                                    <p>{v.workDetail}.</p>
                                </div>
                            </div>:<></>)}
                        </div>
                    </div> :<></>}
                    {pastJob==='' && presentJob==='' && futureJob===''?<></>:
                        <div className="goals">
                            <h3 className="right"><span>GOALS</span></h3>
                            <div className="inner-div">
                                {pastJob===''?<></>:
                                <div>
                                    <p>Past Goal :</p>
                                    <p>{pastJob}</p>
                                </div>}
                                {presentJob===''?<></>:
                                <div>
                                    <p>Present Goal :</p>
                                    <p>{presentJob}</p>
                                </div>}
                                {futureJob===''?<></>:
                                <div>
                                    <p>Future Goal :</p>
                                    <p>{futureJob}</p>
                                </div>}                        
                            </div>
                        </div>} 
                </div> 
            </div>  
        </div>   
    )
}

export default ResumeOne;
