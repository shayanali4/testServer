import React from 'react';
import emailIco from './images/Group 14.png';
import phoneIco from './images/Group 15.png';
import addressIco from './images/Group 16.png';
import curve from './images/curved line.png';
import './styles.css';
import { useSelector } from 'react-redux';

function ResumeTwo() {
    const resumeDetails = useSelector(state => state.resumeDetails);

    // Destructuring Personal Info
    const { personalInfo } = resumeDetails;
    const { firstName, lastName, profession, city, address, phone, email } = personalInfo;

    // Destructuring Goals
    const { goalsInfo } = resumeDetails;
    const { pastJob, presentJob, futureJob} = goalsInfo;

    // Destructuring Education Info
    const { educationInfo } = resumeDetails;

    const { profilePhoto } = resumeDetails;
    const { facts } = resumeDetails;
    const { profileSummary } = resumeDetails;
    const { socialLinks } = resumeDetails;
    const { languages } = resumeDetails;
    const { skills } = resumeDetails;
    const { workExperience } = resumeDetails;
    const { hobbies } = resumeDetails;
    
    return (
        <div className="resumeTwo">
            <div id="print-content" className="content">
                <img className="opacity-img" src="/assets/images/Opacity-text.png" alt="" />
                <div className="left-area">
                    <div className="personal-info">
                        {firstName !== '' || lastName !== '' || profession !== '' || profileSummary !== '' ? <>
                            <h4>Personal Information</h4>
                            <div className="profile">
                                {profilePhoto ?
                                    <img src={profilePhoto} alt="" />
                                    : <></>}
                                {firstName !== '' || lastName !== '' ?
                                    <h4>{firstName} {lastName}</h4>
                                    : <></>}
                                {profession !== '' ? <h5>{profession}</h5> : <></>}
                                {profileSummary !== '' ?
                                    <p>{profileSummary}.</p> : <></>}
                            </div></>
                            : <></>}
                        <div className="work">
                            {facts.map((v, i) =>
                                v.detail==='Projects'?
                            <div key={i} className="projects">
                                <h4>+{v.value}</h4>
                                <p>{v.detail}</p>
                            </div>:v.detail==='Experience'?
                            <div key={i} className="experience">
                                <h4>{v.value} years</h4>
                                <p>{v.detail}</p>
                            </div>:v.detail==='Customers'?
                            <div key={i} className="customers">
                                <h4>+{v.value}</h4>
                                <p>{v.detail}</p>
                            </div>:
                            <div key={i} className="">
                                <h4>+{v.value}</h4>
                                <p>{v.detail}</p>
                            </div>)}
                            
                           
                        </div>
                        <div className="contact">
                            <div className="inner-div">
                                {email !== '' ?
                                    <div>
                                        <img src={emailIco} alt="" />
                                        <p>{email}</p>
                                    </div>
                                    : <></>}
                                {phone !== '' ?
                                    <div>
                                        <img src={phoneIco} alt="" />
                                        <p>{phone}</p>
                                    </div>
                                    : <></>}
                                {address !== '' ?
                                    <div>
                                        <img src={addressIco} alt="" />
                                        <p>{address}, {city}</p>
                                    </div>
                                    : <></>}
                                {socialLinks.map((v, i) =>
                                    socialLinks[i] !== '' ?
                                        <div key={i}>
                                            {v.includes("facebook")?
                                            <i class="fab fa-facebook"></i>
                                            :v.includes("linkedin")?
                                            <i class="fab fa-linkedin"></i>
                                            :v.includes("behance")?
                                            <i class="fab fa-behance-square"></i>
                                            :<i class="fas fa-user-friends"></i>
                                            }
                                            <p>{v}</p>
                                        </div>
                                    : <></>)}
                            </div>
                        </div>
                    </div>
                    {pastJob === '' && presentJob === '' && futureJob === '' ? <></> :
                        <div className="goal">
                            <h4>Professional Goal</h4>
                            <div className="graph">
                                <span className="point old" />
                                <span className="point current" />
                                <span className="point next" />
                                <span className="job old-job">{pastJob}</span>
                                <span className="job current-job">{presentJob} <span /></span>
                                <span className="job next-job">{futureJob}</span>
                                <img src={curve} alt="" />
                            </div>
                        </div>}
                    {languages[0]===''?<></>:
                    <div className="skills">
                        <h4>Languages</h4>
                        <div className="software-skills">
                            {languages.map((v, i) =>
                                v !== '' ?
                                    <div key={i}>
                                        <p>{v}</p>
                                    </div> : <></>)}  
                        </div>
                    </div>}
                </div>
                <div className="right-area">
                    {workExperience.length >= 1 ?
                        workExperience[0].startDate === '' &&
                        workExperience[0].endDate === '' &&
                        workExperience[0].title === '' &&
                        workExperience[0].workDetail==='' &&
                        workExperience[0].employer === '' ?<></>:
                        <div className="experience">
                            <h4>Experience</h4>
                            <div className="work-experience">
                                <div className="left">
                                    {workExperience.map((v, i) =>
                                        workExperience[i].startDate !== '' ?
                                            <div key={i}>
                                                <p><b>{v.startDate}</b></p>
                                                <span>O</span>
                                            </div> : <></>)}
                                </div>
                                <div className="right">
                                    {workExperience.map((v, i) =>
                                        v.title === '' &&
                                        v.workDetail==='' &&
                                        v.employer === '' ? <></> :
                                            <div key={i}>
                                                <h4>{v.title} - {v.employer}</h4>
                                                {v.startDate === '' && v.endDate === '' ? <></> :
                                                    v.endDate === '' ?
                                                        <div>{`${v.startDate} To Present`}
                                                            <span className="current">Current JOB</span>
                                                        </div>
                                                        : <div>{`${v.startDate} To ${v.endDate}`}
                                                            <span>Previous Job</span>
                                                        </div>}
                                                <p>{v.workDetail}</p>
                                            </div>)}
                                </div>
                            </div>
                        </div>:<></>}
                    {educationInfo.length >= 1 ?
                        educationInfo[0].graduationStartDate === '' &&
                        educationInfo[0].graduationEndDate === '' &&
                        educationInfo[0].instituteName === '' &&
                        educationInfo[0].educationDetail==='' &&
                        educationInfo[0].studyField === '' ? <></> :
                        <div className="education">
                            <h4>Education</h4>
                            <div className="education-details">
                                <div className="left">
                                    {educationInfo.map((v, i) =>
                                        v.graduationStartDate !== '' ?
                                            <div key={i}>
                                                <p><b>{v.graduationStartDate}</b></p>
                                                <span>O</span>
                                            </div> : <></>)}
                                </div>
                                <div className="right">
                                    {educationInfo.map((v, i) =>
                                        v.instituteName !== '' ||
                                            v.instituteLocation!=='' ||
                                            v.educationDetail!=='' ||
                                            v.studyField!=='' ?
                                            <div key={i}>
                                                <h4>{v.studyField} -{v.instituteName} </h4>
                                                {v.graduationStartDate === '' && v.graduationEndDate === '' ? <></> :
                                                    v.graduationEndDate === '' ?
                                                        <div>{`${v.graduationStartDate} To Pesent`}
                                                            <span className='current'>CURRENTLY STUDYING</span>
                                                        </div> :
                                                        <div>{`${v.graduationStartDate} To ${v.graduationEndDate}`}
                                                            <span>PREVIOUS EDUCATION</span>
                                                        </div>}
                                                <p>{v.educationDetail}</p>
                                                
                                            </div> : <></>)}
                                </div>
                            </div>
                        </div>:<></>}
                    {skills[0].title === '' ? <></> :
                    <div className="skills">
                        <h4>Skills</h4>
                        <div className="software-skills">
                            {skills.map((v, i) =>
                                v.title !== '' ?
                                    <div key={i}>
                                        <p>{v.title}</p>
                                        <progress min={0} max={100} value={v.value} className="slider" />
                                    </div> : <></>)}  
                        </div>
                    </div>}
                    {hobbies[0] === "" ?<></>:
                        <div className="interests">
                            <h4>Interests</h4>
                            <div className="interest-details">
                                {hobbies.map((v, i) =>
                                    v.type === 'Other' ?
                                        <div key={i}>
                                            <i className="fas fa-star"></i>
                                            <p>{v.value}</p>
                                        </div> :
                                        <div>
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
                                            v==='DJ Playing'?"fas fa-headphones":""} aria-hidden="true"></i>
                                            <p>{v}</p>
                                        </div>)}
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default ResumeTwo;
