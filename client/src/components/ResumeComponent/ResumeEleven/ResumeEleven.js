import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';

function ResumeEleven() {
    const resumeDetails = useSelector(state => state.resumeDetails);

    // Destructuring Personal Info
    const { personalInfo } = resumeDetails;
    const { firstName, lastName, profession, phone, email } = personalInfo;

    // Destructuring Goals
    const { goalsInfo } = resumeDetails;
    const { pastJob, presentJob, futureJob} = goalsInfo;

    // Destructuring Education Info
    const { educationInfo } = resumeDetails;
    // const { instituteName, instituteLocation, degreeProgram, studyField, graduationStartDate, graduationEndDate, } = educationInfo;


    const { facts } = resumeDetails;
    const { profileSummary } = resumeDetails;
    const { socialLinks } = resumeDetails;
    const { languages } = resumeDetails;
    const { skills } = resumeDetails;
    const { workExperience } = resumeDetails;
    const { hobbies } = resumeDetails;
    // console.log("resume props==>", resumeDetails);    

    return (
        <div className="resumeEleven">
            <div id="print-content" className="content">
                <img className="opacity-img" src="/assets/images/Opacity-text.png" alt="" />
                <div class="head">
                    {firstName === '' && lastName === '' && profession===''?<></>:
                    <div className="profile">
                        {firstName === '' && lastName === ''?<></>:
                        <div className="name">
                            <h1>{firstName}</h1>
                            <h1>{lastName}</h1>
                        </div>}
                        {profession === '' ?<></>:
                        <div className="profession">
                            <p>{profession}</p>
                        </div>}
                    </div>}
                    {phone === '' && email === '' && socialLinks[0]==='' ? <></> :
                    <div className="personal">
                        {email === '' ? <></> :
                        <div>
                            <i className="fas fa-envelope"></i>
                            <p>{email}</p>
                        </div>}
                        {phone === '' ? <></> :
                        <div>
                            <i class="fas fa-phone-volume"></i>
                            <p>{phone}</p>
                        </div>}
                        {socialLinks.map((v,i)=>(
                        v===''?<></>:
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
                        </div>))}
                    </div>}
                </div>
                <div className="main">
                    <div className="left">
                        {educationInfo.length >= 1 ?
                            educationInfo[0].graduationStartDate === '' &&
                                educationInfo[0].graduationEndDate === '' &&
                                educationInfo[0].studyField === '' &&
                                educationInfo[0].instituteLocation === '' &&
                                educationInfo[0].educationDetail === '' &&
                                educationInfo[0].instituteName === '' ? <></> :
                        <div className="education">
                            <h3>EDUCATION</h3>
                            <div className="inner-div">
                                {educationInfo.map((v, i) =>
                                <div key={i}>
                                    {v.graduationStartDate === '' && v.graduationEndDate === '' ? <></> :
                                    <div className="left">
                                        {v.graduationEndDate === '' ?
                                        <><p>{v.graduationStartDate}</p>
                                        <p>to</p>
                                        <p>Present</p></>:<>
                                        <p>{v.graduationStartDate}</p>
                                        <p>to</p> 
                                        <p>{v.graduationEndDate}</p>
                                        </>}
                                    </div>}
                                    {v.studyField === '' && v.instituteName === '' &&
                                     v.instituteLocation==='' && v.educationDetail? <></> :
                                    <div className="right">
                                        <h4>{v.studyField}</h4>
                                        <h4>{v.instituteName}, {v.instituteLocation}</h4>
                                        <p>{v.educationDetail}</p>
                                    </div>}
                                </div>)}
                            </div>
                        </div>:<></>}
                        {skills[0].title === '' ? <></> :
                        <div className="skills">
                            <h3>SKILLS</h3>
                            <div className="inner-div">
                                {skills.map((v, i) =>
                                v.title === '' ?<></>:
                                <div key={i}>
                                    <p>{v.title}</p>
                                    {v.value<=20?
                                    <div className="rating">
                                        <span><i class="fa fa-circle active" aria-hidden="true"></i></span>
                                        <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                        <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                        <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                        <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                    </div>:v.value<=40?
                                    <div className="rating">
                                        <span><i class="fa fa-circle active" aria-hidden="true"></i></span>
                                        <span><i class="fa fa-circle active" aria-hidden="true"></i></span>
                                        <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                        <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                        <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                    </div>:v.value<=60?
                                    <div className="rating">
                                        <span><i class="fa fa-circle active" aria-hidden="true"></i></span>
                                        <span><i class="fa fa-circle active" aria-hidden="true"></i></span>
                                        <span><i class="fa fa-circle active" aria-hidden="true"></i></span>
                                        <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                        <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                    </div>:v.value<=80?
                                    <div className="rating">
                                        <span><i class="fa fa-circle active" aria-hidden="true"></i></span>
                                        <span><i class="fa fa-circle active" aria-hidden="true"></i></span>
                                        <span><i class="fa fa-circle active" aria-hidden="true"></i></span>
                                        <span><i class="fa fa-circle active" aria-hidden="true"></i></span>
                                        <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                    </div>:v.value<=100?
                                    <div className="rating">
                                        <span><i class="fa fa-circle active" aria-hidden="true"></i></span>
                                        <span><i class="fa fa-circle active" aria-hidden="true"></i></span>
                                        <span><i class="fa fa-circle active" aria-hidden="true"></i></span>
                                        <span><i class="fa fa-circle active" aria-hidden="true"></i></span>
                                        <span><i class="fa fa-circle active" aria-hidden="true"></i></span>
                                    </div>:<></>}
                                </div>)}
                            </div>
                        </div>}
                        {hobbies[0]===''?<></>:
                        <div className="interests">
                            <h3>INTERESTS</h3>
                            <div className="inner-div">
                                 {hobbies.map((v, i) =>
                                    v.type === 'Other' ?
                                <div key={i}>
                                <i className="fas fa-star"></i>
                                    <p>{v.value}</p>
                                </div>:
                                <div key={i}>
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
                        {pastJob==='' && presentJob==='' && futureJob===''?<></>:
                        <div className="goals">
                            <h3>GOALS</h3>
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
                    <div className="right">
                        {profileSummary === '' ?<></>:
                        <div className="about">
                            <h3>ABOUT ME</h3>
                            <div className="inner-div">
                                <p>{profileSummary}.</p>
                            </div>
                        </div>}
                        {workExperience.length >= 1 ?
                            workExperience[0].startDate === '' &&
                                workExperience[0].endDate === '' &&
                                workExperience[0].title === '' &&
                                workExperience[0].workDetail === '' &&
                                workExperience[0].employer === '' ? <></> :
                        <div className="experience">
                            <h3>EXPERIENCE</h3>
                            <div className="inner-div">
                                {workExperience.map((v, i) =>
                                <div key={i}>
                                     {v.startDate === '' && v.endDate === '' ? <></> :
                                    <div className="left">
                                         {v.endDate === '' ?
                                        <><p>{v.startDate}</p>
                                        <p>to</p>
                                        <p>Present</p></>:<>
                                        <p>{v.startDate}</p>
                                        <p>to</p> 
                                        <p>{v.endDate}</p>
                                        </>}
                                    </div>}
                                    {v.title === '' && v.employer === '' &&
                                     v.workDetail === ''? <></> :
                                    <div className="right">
                                        <h4>{v.title}</h4>
                                        <h4>{v.employer}</h4>
                                        <p>{v.workDetail}</p>
                                    </div>}
                                </div>)}
                            </div>
                        </div> : <></>}
                        {languages[0]===''?<></>:
                        <div className="languages">
                            <h3>LANGUAGES</h3>
                            <div className="inner-div">
                                {languages.map((v, i) =>
                                        <p key={i}><span>&#8226;</span>{v}</p>
                                    )}
                            </div>
                            </div>}
                        {facts[0].detail===''?<></>:
                        <div className="languages">
                            <h3>FACTS</h3>
                        <div className="inner-div">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeEleven
