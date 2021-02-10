import { useSelector } from 'react-redux';
import email1 from './images/Group 26.png'
import phone1 from './images/Group 27.png'
import map from './images/Group 28.png'
import name from './images/Group 30.png'
import './style.css'

function ResumeTwelve() {
    const resumeDetails = useSelector(state => state.resumeDetails);
    // Destructuring Personal Info
    const { personalInfo } = resumeDetails;
    const { firstName, lastName, profession, city, address, phone, email } = personalInfo;

    // Destructuring Personal Info
    const { goalsInfo } = resumeDetails;
    const { pastJob, presentJob, futureJob} = goalsInfo;

    // Destructuring Education Info
    const { educationInfo } = resumeDetails;
    // const { instituteName, instituteLocation, degreeProgram, studyField, graduationStartDate, graduationEndDate, } = educationInfo;


    const { facts } = resumeDetails;
    const { profileSummary } = resumeDetails;
    const { socialLinks } = resumeDetails;
    const { skills } = resumeDetails;
    const { workExperience } = resumeDetails;
    const { hobbies } = resumeDetails;
    const { languages } = resumeDetails;

    return (
    

        <div className="resume12">
            <div id="print-content" className="content">
            <img className="opacity-img" src="/assets/images/Opacity-text.png" alt="" />
        {firstName!=='' ||  lastName!==''  ||  profession !=='' || profileSummary !=='' || email!==''|| phone!=='' || address!=='' ?
        <div className="main123">

        <div className="heading">

        {firstName!==''  ?
            <div className="first">
        <h2>  {` ${firstName} ${lastName} `}</h2>
            </div>
        :
        <></>  
        }
        {profession !==''?
        <>  <div className="second">
        <h6> {profession} </h6>
        </div>


        <p className="line"></p></>
        

        :
        <></>
        }
        </div>



        










        { firstName!=='' || lastName!=='' || profession!=='' || profileSummary !=='' || email!==''|| phone!=='' || address!==''?

            <div className="heading1">

            {profileSummary !==''?
        <div className="first">


        <div className="summary">
        <h4> SUMMARY</h4>

        <p>{profileSummary}</p>

        </div>

        </div>
        :
        <></>}

        {firstName !=='' || email!=='' || phone!=='' || address !=='' || city !==''?

        <div className="second">
        <div className="summary">
        <h4> PROFILE</h4>

        <div className="details">

        <div>    
            <img src={name} alt="" />
            <p>{firstName}</p> 
        </div>
        <div>    
            <img src={phone1} alt="" /> 
            <p>{phone}</p> 
        </div>
        <div>    
            <img src={email1} alt="" /> 
            <p>{email}</p> 
        </div>
        <div>    
            <img src={map} alt="" /> 
            <p>{address}{city}</p> 
        </div>




        </div>


        </div>
        </div>


        :
        <></>
        }


        </div>





        :
        <></>
        }




        {socialLinks[0] !==''  ||  facts[0].detail !==''?  



        <div className="heading1">

        {facts[0].detail!=='' ?
        <div className="first">


        <div className="summary">
        
        <h4> Facts</h4>






        <div  className="facts2">

        {facts.map((v, i) =>
                                        v.detail==='Projects'?
                                        <div key={i}>  <h5>{v.detail}</h5>
                                        <p>{v.value} </p>
                                        </div>
                                    :
                                    
                                    v.detail==='Experience'?
                                    <div key={i}>  <h5>{v.detail}</h5>
                                    <p>{v.value} </p>
                                    </div>
                                    :
                                    v.detail==='Customers'?
                                    <div key={i}>  <h5>{v.detail}</h5>
                                        <p>{v.value} </p>
                                        </div>
                                    :
                                    <div key={i}>  <h5>{v.detail}</h5>
                                    <p>{v.value} </p>
                                    </div>)}




        </div>















        </div>
        </div>
        :
        <></>
        }


        {socialLinks[0] !== '' ?  
        <div className="second">
        <div className="summary">
        <h4> Social Links</h4>


        <div className="flex1">

        {socialLinks.map((v, i) =>
                                            socialLinks[i] !== '' ?
                                            
            


                        
                        
                            <p key={i}>{v}</p>
                    
                        
                    


                        

        : <></>)}














        </div>




        </div>
        </div>
        :
        <></>
        }




        </div>




        :
        <></>
        }




























        {workExperience.length >= 1 ?
                                workExperience[0].startDate === '' &&
                                workExperience[0].endDate === '' &&
                                workExperience[0].title === '' &&
                                workExperience[0].workDetail==='' &&
                                workExperience[0].employer === '' ? <></>
                                :
                                <> 

        <div className="heading2">



        <h4> Experience</h4>

        <div className="first">
        
        



        {workExperience.map((v, i) =>
                                                v.title === '' &&
                                                v.workDetail==='' &&
                                                v.employer === '' ? <></> :
                                                <div>
                                                <h5>{v.employer}</h5>
                                                
                                                
                                                <h5> {v.title}</h5>
                                                {v.startDate === '' && v.endDate === '' ? <></> :
                                                    v.endDate === '' ?
                                                    <>   <h5>{`${v.startDate} To Present`}
                                                        
                                                        </h5>
                                                        <h5>{v.workDetail}</h5>
        </>
                                                        :<> <h5>{`${v.startDate} To ${v.endDate}`}
                                                        </h5>
                                                        
                                                        <h5>{v.workDetail}</h5>
        </>
                                                        
                                                        }


                                            
                                                
                                                
                                                
                                                
                                                </div>)}






        </div>









        </div></>
        :
        <></>}






        {educationInfo.length >= 1 ?
                            educationInfo[0].graduationStartDate === '' &&
                            educationInfo[0].graduationEndDate === '' &&
                            educationInfo[0].instituteName === '' &&
                            educationInfo[0].educationDetail==='' &&
                            educationInfo[0].instituteLocation==='' &&
                            educationInfo[0].studyField === '' ? <></> :
                                <> 



        <div className="heading2">

        <h4> Education</h4>

        <div className="first">
            
            
            
            
        {educationInfo.map((v, i) =>
                                                v.instituteName !== '' ||
                                                    v.instituteLocation!=='' ||
                                                    v.educationDetail!=='' ||
                                                    v.studyField!=='' ?
                                                    <div>




                                                    <h5> {v.studyField}</h5>
                                                
                                                
                                                <h5> {v.instituteName}</h5>
                                                <h5>{v.instituteLocation}</h5>
                                                {v.graduationEndDate === '' && v.graduationStartDate === '' ? <></> :
                                                    v.graduationEndDate === '' ?
                                                        <h5>{`${v.graduationStartDate} To Present`}
                                                        
                                                        </h5>
                                                        : <h5>{`${v.graduationStartDate} To ${v.graduationEndDate}`}
                                                        </h5>}
                                                
                                                <h5>{v.educationDetail}</h5>
                                                
                                                </div>
                                                : <></>)}

            
            
            
            
            
        








        </div>







        </div>




        </>
        :
        <></>
        }


        {skills[0].title !=='' ||  pastJob !=='' || presentJob !=='' || futureJob !=='' || hobbies[0]!==''? 

        <div className="heading3">



        {skills[0].title!==''? 
        <div className="first">
        <h4> Skills</h4>

        {skills.map((v, i) => 
                                        v.title!==''?
                                        <div key={i}>
                                        <h5 className="darkblue"> {v.title}</h5>
                                        <progress  key={i} value={v.value}  max="100"> 32% </progress>
                                    </div>
                                    
                                        :<></>
                                        )}
            

        




        </div>


        :
        <></>
        }




        <div className="first">



            
        { pastJob !=='' || presentJob !=='' || futureJob !==''?

        <>  <h4>Goals</h4>

                


        { pastJob !=='' ?
                            <div>
                            <h5 className="darkblue"> Past Goals</h5>
                        <p>{pastJob}</p>
                        </div>
                        :
                        <></>}
                        { presentJob !=='' ?
                        
                        <div>
                            <h5 className="darkblue"> Present Goals</h5>
                        <p>{presentJob}</p>
                        </div>
                        :
                        <></>}
                        { futureJob !=='' ?
                            <div>
                            <h5 className="darkblue"> future Goals</h5>
                            <p>{futureJob}</p>
                        </div>
                        :
                        <></>}
                        
                        
                        
                        
                        
                        
                        
                        
                        </>
        :<></>
        }
            



            

        



        </div>











































        <div className="second">
        <h4> Hobbies</h4>
        <div className="flex">

        {hobbies.map((v, i) =>
                                            v.type === 'Other' ?
                                            <div key={i} className="width">
                                        <i className="fas fa-star"></i>   
                                            <p   className="text">{v.value}</p></div> 
                                        :
                                        <div className="width">
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
                                    </div> )}
            
            


            














        </div>








        </div>
        <div className="languages">
            <h4> Languages </h4>



            {languages.map((v, i) =>
                                            languages[i] !== '' ?

        <p  className="lang" >  {v}</p>
        : <></>)}

            
        
        
        
        
        
        
        
        
        
            </div>








        </div>



        :
        <></>
        }





















        </div>


        :
        <></>}
    </div>
    </div>

    )
}
export default ResumeTwelve;