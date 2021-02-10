import React from 'react';
import './styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useSelector } from 'react-redux';

function ResumeTen() {
    const resumeDetails = useSelector(state => state.resumeDetails);

    // Destructuring Personal Info
    const { personalInfo } = resumeDetails;
    const { firstName, lastName, profession, city, address, phone, email } = personalInfo;

    // Destructuring Personal Info
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
        <div className='resumeTen'>
            
            <div id="print-content" className="content">
                <img className="opacity-img" src="/assets/images/Opacity-text.png" alt="" />
                {firstName === '' && lastName === '' && profilePhoto === null && profession === ''
                    && address === '' && languages[0]===''?<></>:<>
                {firstName === '' && lastName === '' && address===''
                && languages[0]==='' &&
                    profession === '' && profilePhoto === null ? <></> :
                    <div className="name">
                        {firstName === '' && lastName === '' &&
                            profession === '' ? <></> :
                            <div className='text'>
                                <h1>{firstName} {lastName}</h1>
                                <p>{profession}</p>
                            </div>}
                        {profilePhoto === null ? <></> :
                            <div className='img'>
                                <img src={profilePhoto} alt="profile" />
                            </div>}
                    </div>}
                {profileSummary === '' ?<></>:
                    <div className="profile">
                        <p>{profileSummary}</p>
                    </div>}
                <div className="main">
                    <div className='left'>
                        {firstName === '' && lastName === '' &&
                            phone === '' && email === ''? <></> :
                            <div className="personal">
                                <h4>Personal</h4>
                                <div>
                                    {firstName === '' && lastName === '' ? <></> : <>
                                        <p>Name :</p><p>{firstName} {lastName}</p></>}
                                    {email === '' ? <></> : <>
                                        <p>Email :</p><p>{email}</p></>}
                                    {phone === '' ? <></> : <>
                                        <p>Phone :</p><p>{phone}</p></>}
                                </div>
                            </div>}
                        {address === '' && city==='' ?<></>:
                            <div className="address">
                                <h4>Address</h4>
                                <div>
                                    <p>{address}, {city}</p>
                                </div>
                            </div>}
                            {languages[0]===''?<></>:
                            <div className="address">
                                <h4>Languages</h4>
                                <div>
                                    {languages.map((v, i) =>
                                        <p key={i}><span>&#8226;</span>{v}</p>
                                    )}
                                </div>
                            </div>}
                            {facts[0].detail===''?<></>:
                            <div className="address">
                                <h4>Facts</h4>
                                <div>
                                    {facts.map((v, i) =>
                            v.detail === 'Projects' ?
                                <p key={i}>
                                    <span>&#8226;</span>
                                {`I have completed ${v.value}+ projects.`}.
                                </p> : v.detail === 'Experience' ?
                                <p key={i}>
                                        <span>&#8226;</span>
                                    {`I have  ${v.value}+ years of experience.`}.
                                </p> : v.detail === 'Customers' ?
                                <p key={i}>
                                        <span>&#8226;</span>
                                    {`I have ${v.value}+ customers.`}.
                                </p>:<p key={i}>
                                        <span>&#8226;</span>
                                    {v.detail}.
                                </p>)}
                                </div>
                            </div>}
                            {pastJob==='' && presentJob==='' && futureJob===''?<></>:
                        <div className="goals">
                            <h4>GOALS</h4>
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
                        {hobbies[0]===''?<></>:
                        <div className="hobbies">
                            <h4>Hobbies</h4>
                            <div>
                                {hobbies.map((v, i) =>
                                    v.type === 'Other' ?
                                <div>
                                <i className="fas fa-star"></i>
                                    <p>{v.value}</p>
                                </div>:
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
                                        v==='DJ Playing'?"fas fa-headphones":''} aria-hidden="true"></i>
                                    <p>{v}</p>
                                </div>)}
                            </div>
                        </div>}
                    </div>
                    {workExperience.length >= 1 &&
                    workExperience[0].startDate === '' &&
                    workExperience[0].endDate === '' &&
                    workExperience[0].title === '' &&
                    workExperience[0].workDetail === '' &&
                    workExperience[0].employer === '' &&
                    skills[0].title === '' &&
                    educationInfo[0].graduationStartDate === '' &&
                    educationInfo[0].graduationEndDate === '' &&
                    educationInfo[0].studyField === '' &&
                    educationInfo[0].instituteLocation === '' &&
                    educationInfo[0].educationDetail === '' &&
                    educationInfo[0].instituteName === ''? <></> :
                    <div className='right'>
                        {workExperience.length >= 1 ?
                            workExperience[0].startDate === '' &&
                                workExperience[0].endDate === '' &&
                                workExperience[0].title === '' &&
                                workExperience[0].workDetail === '' &&
                                workExperience[0].employer === '' ? <></> :
                                <div className="work">
                                    <h4>Work</h4>
                                    {workExperience.map((v, i) =>
                                        <div key={i}>
                                            <div>
                                                {v.title === '' && v.employer === '' ? <></> :
                                                    <h5>{v.title} @ {v.employer}</h5>}
                                                {v.workDetail === '' ? <></> :
                                                    <p>{v.workDetail}.</p>}
                                            </div>
                                            {v.startDate === '' && v.endDate === '' ? <></> :
                                                v.endDate === '' ?
                                                    <span>{v.startDate} to Present</span> :
                                                    <span>{v.startDate} to {v.endDate}</span>
                                            }
                                        </div>)}
                                </div> : <></>}
                        {skills[0].title === '' ? <></> :
                        <div className="skills">
                            <h4>Professional Skills</h4>
                            <div>
                                {skills.map((v, i) =>
                                v.title !== '' ?
                                <div key={i}>
                                    <CircularProgressbar value={v.value} text={v.title} />
                                </div>:<></>)}
                            </div>
                        </div>}
                        {educationInfo.length >= 1 ?
                            educationInfo[0].graduationStartDate === '' &&
                                educationInfo[0].graduationEndDate === '' &&
                                educationInfo[0].studyField === '' &&
                                educationInfo[0].instituteLocation === '' &&
                                educationInfo[0].educationDetail === '' &&
                                educationInfo[0].instituteName === '' ? <></> :
                        <div className="education">
                            <h4>Education</h4>
                            {educationInfo.map((v, i) =>
                            <div key={i}>
                                <div>
                                    {v.studyField === '' && v.instituteName === '' &&
                                     v.instituteLocation===''? <></> :
                                        <h5>{v.studyField} @ {v.instituteName}, {v.instituteLocation}</h5>}
                                    {v.educationDetail===''?<></>:
                                    <p>{v.educationDetail}.</p>}
                                </div>
                                {v.graduationStartDate === '' && v.graduationEndDate === '' ? <></> :
                                v.graduationEndDate === '' ?
                                    <span>{v.graduationStartDate} to Present</span> :
                                    <span>{v.graduationStartDate} to {v.graduationEndDate}</span>
                                }
                            </div>)}
                        </div>:<></>}
                    </div>}
                </div>
                {socialLinks[0]===''?<></>:
                <div className="links">
                    {socialLinks.map((v, i) =>
                    socialLinks[i] !== '' ?
                    <div>
                        {v.includes("facebook")?
                                <i class="fab fa-facebook"></i>
                                :v.includes("linkedin")?
                                <i class="fab fa-linkedin"></i>
                                :v.includes("behance")?
                                <i class="fab fa-behance-square"></i>
                                :<i class="fas fa-user-friends"></i>
                                }
                        <p>{v}</p>
                    </div>:<></>)}
                </div>}</>}
            </div>
        </div>
    )
}

export default ResumeTen
