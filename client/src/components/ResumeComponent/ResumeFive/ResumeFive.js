import { useSelector } from 'react-redux';
import './style.css';


function ResumeFive() {
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
      <div>
        <div id="print-content" className="resume5">
        <img className="opacity-img" src="/assets/images/Opacity-text.png" alt="" />

          {firstName!=='' || lastName !==''  || profession !=='' ?
          <div className="image-background">
            
            
            <div className="main5">
              
              
              <p>.</p>


{firstName !=='' || lastName!=='' || profession!==''?
          <>    <h2 className="name"> { `${firstName}  ${lastName}`}</h2>
              <p className="profession">{profession}</p></>
            
            
              :
              <></>
            }
             
             
             
             
             <div className="socialmedia"> 


             {socialLinks.map((v, i) =>
                                    socialLinks[i] !== '' ?
                                       
      
                                    <div key={i}>
                                    {v.includes("facebook")?
                                    <i class="fab fa-facebook"></i>
                                    :v.includes("linkedin")?
                                    <i class="fab fa-linkedin"></i>
                                    :v.includes("behance")?
                                    <i class="fab fa-behance-square"></i>:<></>
                                    }
                                <p>{v}</p>
                            </div>
               
          
 : <></>)}
                
                
              </div>









              {educationInfo.length >= 1 ?
                       educationInfo[0].graduationStartDate === '' &&
                       educationInfo[0].graduationEndDate === '' &&
                       educationInfo[0].instituteName === '' &&
                       educationInfo[0].educationDetail==='' &&
                       educationInfo[0].instituteLocation==='' &&
                       educationInfo[0].studyField === '' ? <></> :
                        <> 




              <div className="education"> <b> Education </b></div>

              <div className="educationdetails" style={{display: 'flex', marginTop: '1px solid black'}}>

              {educationInfo.map((v, i) =>
                                        v.instituteName !== '' ||
                                            v.instituteLocation!=='' ||
                                            v.educationDetail!=='' ||
                                            v.studyField!=='' ?
                                            <div className="firstdiv"> <span className="dot" />   
                                            <div className="subeducation">
                                                
                                              <h6> {v.studyField}</h6>
                                              <p className="college">{v.instituteName}</p>
                                              <p className="college">{v.instituteLocation}</p>
                                              {v.graduationEndDate === '' && v.graduationStartDate === '' &&  v.educationDetail === ''? <></> :
                                            v.graduationEndDate === '' ?
                                              <>  <p className="date">{`${v.graduationStartDate} To Present`}
                                                 
                                                </p>
                                                 <p className="something">{v.educationDetail} </p></>
                                                :<> <p className="date">{`${v.graduationStartDate} To ${v.graduationEndDate}`}
                                                </p>
                                                <p className="something">{v.educationDetail} </p></>
                                                 }
                                             
                                            </div>
                                          </div> : <></>)}

             
              
                
              </div>
           </>
           :<></>}
           
           
           
           
           
           
     

           
           
           
           
           
            </div>
          </div>

:
<></>                   
}

          <h5 className="personal1">  PERSONAL INFO</h5> 


          <div className="personalinfo"> 



        { phone!=='' ? 
          <div className="first">

           <h5> PHONE</h5>
<p>{phone}</p>





           </div>
           :
           <></> 
           } 
           { email !==''?
           <div className="second">
<h5> EMAIL </h5>
<p>{email}</p>





           </div>
           :
           <></>
           }
           
         
          


          { city !==''|| address !==''?
           <div className="third">

       
<h5> ADDRESS </h5>
<p>{address} {city}</p>





           </div>
           :
           <></>
           }
           

           
          
           
           
           
           
           
           </div>






          <div className="last123">

          {workExperience.length >= 1 ?
                        workExperience[0].startDate === '' &&
                        workExperience[0].endDate === '' &&
                        workExperience[0].title === '' &&
                        workExperience[0].workDetail==='' &&
                        workExperience[0].employer === '' ? <></>
                        :
                        <> 


            <div className="resumezero">

              <span className="span123" /><div className="resumefirst">EXPERIENCE</div>

              {workExperience.map((v, i) =>
                                        v.title === '' &&
                                        v.workDetail==='' &&
                                        v.employer === ''  &&
                                        v.startDate === ''&&
                                        v.endDate ==='' ? <></> :
          
                                        <div key={i}>    <span className="resumefirstall" />      <p className="all"> {v.title}</p>

                                        <p className="date">  {v.employer}</p>
                                        {v.startDate === '' && v.endDate === ''  && v.employer ===''  ? <></> :
                                            v.endDate === '' ?
                                               <> <p className="exp">{`${v.startDate} To Present`}
                                                 
                                                </p>
                                                  <p className="exp">{v.workDetail}</p></>
                                                : <><p className="exp">{`${v.startDate} To ${v.endDate}`}
                                                </p>
                                                  <p className="exp">{v.workExperience}</p></>
                                                }
                                       
                                       
                                      
                                      </div>)}
            





              <div className="white">.</div>


            </div>

</>
:
<></>}











            <div className="resumeone">


            { skills[0].title !== ''?
<> <span className="span123" />
              
              
              
              
 <div className="resumefirst">SKILLS</div></>
  :
  <></>
}  
              
              
              
              
              
              {skills.map((v, i) => 
                                v.title!==''?
                                <div className="second">
                                <span className="resumefirstall" />   <p className="all">{v.title} </p>
                                <p className="progress123">  <progress id="file"  key={i} value={v.value} max={100}> 32% </progress></p>
                              </div>
                            
                                :<></>
                                )}
              
             
              
              
            </div>


            { profileSummary !==''?
<div className="summary">
    <h5> SUMMARY</h5>
    <p className="summary123"> {profileSummary} </p>
    
    </div>
    :
    <></>
    }








          </div>
          <div className="interests">
            
<div className="lang">
   
{languages[0] !== '' ? 
            <h5 className="h5">LANGUGAES</h5>
              :
              <></>}

{languages.map((v, i) =>
                                    languages[i] !== '' ?

                  <p >{v}</p> 

 : <></>)}
            






</div>


            {hobbies[0] !== '' ?
                          <> 
                            <h5 className="h5">HOBBIES</h5>
                            <div className="interest123"> 
                            
                               
                               {hobbies.map((v, i) =>
                                    v.type === 'Other' ?
                                    <div key={i} className="interest1" >
                                    <li> <i className="fas fa-star"></i></li>
                                    <li> {v.value}</li>
                                  </div>
                                  :
                                  <div key={i} className="interest1" >
                                  <li> <i class={v==='Aviation'?'fas fa-plane':
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
  v==='DJ Playing'?"fas fa-headphones":'fas fa-star'} aria-hidden="true"></i></li>
                                  <li> {v.value}</li>
                                </div>)}
                                        </div>
                                        
                            </>
                        : <></>}

          




          </div>


          <div className="facts">
{facts[0].detail !== ''?

<h5 className="h6">FACTS</h5>
:
<></>
}
<div className="factsvalue">
{facts.map((v, i) =>
                                v.detail==='Projects'?
                                <div className="first" key={i}>
   
                                <h6>{v.detail}</h6>
                                <p>{v.value}</p>
                                
                                
                                
                                 </div>
                             :
                             
                             v.detail==='Experience'?
                             <div className="first" key={i}>
   
                             <h6>{v.detail}</h6>
                             <p>{v.value}</p>
                             
                             
                             
                              </div>
                            :
                            v.detail==='Customers'?
                            <div className="first" key={i}>
   
                            <h6>{v.detail}</h6>
                            <p>{v.value}</p>
                            
                            
                            
                             </div>
                            :
                            <div className="first" key={i}>
   
   <h6>{v.detail}</h6>
   <p>{v.value}</p>
   
   
   
    </div>)}

    
   

 








</div>


<div className="facts1">
{ pastJob !=='' || presentJob !=='' || futureJob !==''?
<><h5 className="h6">GOALS</h5>

<div className="factsvalue" > 
{ pastJob !=='' ?
                  <div className="first">
                  <h6>Past Goals</h6>
                  <p> {pastJob}</p>
              </div>
                  :
                  <></>}

{ presentJob !=='' ?
                  <div className="first">
                  <h6>Present Goals</h6>
                  <p> {presentJob} </p>
              </div>
                  :
                  <></>}
{ futureJob !=='' ?
                  <div className="first">
                  <h6>Future Goals</h6>
                  <p>  {futureJob}</p>
              </div>
                  :
                  <></>}

</div>
</>
:
<></>}

</div>










          </div>
        </div>
      </div>
    );
  }
  export default ResumeFive;