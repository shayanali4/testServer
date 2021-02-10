
import contact from './images/contact.png'

import map from './images/map.png'


import message from './images/message.png'
import phone1 from './images/phone.png'
import './style.css';
import { useSelector } from 'react-redux';




function ResumeEight() {
  const resumeDetails = useSelector(state => state.resumeDetails);
// Destructuring Personal Info
const { personalInfo } = resumeDetails;
const { firstName, lastName, profession, address, phone, email } = personalInfo;

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
const { languages } = resumeDetails;


const { hobbies } = resumeDetails;
    return (

      <div className="resume8">
        <div id="print-content" className="main">
          <img className="opacity-img" src="/assets/images/Opacity-text.png" alt="" />
        {firstName!=='' || profileSummary !=='' || phone !==''|| address !=='' ?

          <div className="start">

          { firstName !=='' || lastName !=='' || profession !==''?
            <div className="first"> 

              <p className="firstname">{firstName}</p>
              <p className="lastname">{lastName}</p>
              <p className="profession"> {profession} </p>  
            
            
            
            </div>
            :
            <></>}




            <div className="second"> 
              <div className="rightpad">
                {firstName!==''  || profileSummary !==''?
         <>     <p className="firstname">{firstName}</p>
                <p className="summary"> {profileSummary}
                </p></>


:
<></>}
                <div className="details">

                  { address !=='' || firstName !=='' ?
                  <div className="first1">
                    <div className="first11">
                      <img src={contact} alt="" />     <p>{firstName}</p> 
                    </div>
                    
                    <div className="first11">
                    <img src={map}  alt="" />     <p>{address}</p> 
                    </div>
                  </div>
                      
                      :
                      <></>
                      }



{phone !=='' || email !==''?  
                  <div className="second1">
                    <div className="second11">
                    <img src={phone1} alt="" />     <p>{phone}</p> 
                    </div>
                    <div className="second11">
                      <img src={message} alt="" />    <p>{email} </p> 
                    </div>
                    
                 
                 
                 
                 
                  </div>
           :<></>     
              }
                
                
                </div>
               



              </div>
             
            </div>
          </div>
           :
           <></>}

{socialLinks[0] !==''?


<div className="start1 ">
{/* <div className="sociallinks"> sjshjshjsh



</div>  */}
<div className="firstrow">
              <p className="ali">SOCIAL LINKS & GOALS </p> &ensp;
              <span className="line1" />
            </div>

            <div className="secondrow1">
            {socialLinks.map((v, i) =>
                                    socialLinks[i] !== '' ?
                                       
   
<h6 key={i}>{v}</h6>

               
                
              


                

 : <></>)}



              
            </div>





            { pastJob !=='' || presentJob !=='' || futureJob !==''?




<div className="goals">
   

{ pastJob !=='' ?
                  <div>
                  <h6>Past Goals</h6>
                  <p>    {pastJob}    </p>
                  
                  </div>
                  :
                  <></>}

                  { presentJob !=='' ?
                  <div>
                  <h6>Present Goals</h6>
                  <p>   {presentJob} </p>
                  
                  </div>
                  :
                  <></>}
                  { futureJob !=='' ?
                  <div>
                  <h6>future Goals</h6>
                  <p>  {futureJob}  </p>
                  
                  </div>
                  :
                  <></>}










</div>









:
<></>
}

 </div>








:
<></>}











          <div className="start1">


          {workExperience.length >= 1 ?
                        workExperience[0].startDate === '' &&
                        workExperience[0].endDate === '' &&
                        workExperience[0].title === '' &&
                        workExperience[0].workDetail==='' &&
                        workExperience[0].employer === '' ? <></>
                        :
          <div className="firstrow">
              <p>EXPERIENCE</p>
              <span className="line" />
            </div>
            :
            <></>}
           


            <div className="secondrow">


            {workExperience.length >= 1 ?
                        workExperience[0].startDate === '' &&
                        workExperience[0].endDate === '' &&
                        workExperience[0].title === '' &&
                        workExperience[0].workDetail==='' &&
                        workExperience[0].employer === '' ? <></>
                        :
                        <>
              <div className="first">

              {workExperience.map((v, i) =>
                                        v.title === '' &&
                                        v.workDetail==='' &&
                                        v.employer === '' ? <></> :
                                     <>   <div className="companyname" key={i}> 
                                        <p className="company"> {v.employer}</p>
                                        {v.startDate === '' && v.endDate === '' && v.title ==='' && v.workDetail==='' && v.employer === ''?  <></> :
                                            v.endDate === '' ?
                                        <>    <p className="dateandp">{v.title} <span className="date">  {`${v.startDate} To Present `}</span></p>
                                            <p className="p"> {v.workDetail}</p></>
    
                                            :  
                                     <>           <p className="dateandp">{v.title} <span className="date">  {`${v.startDate} - ${v.endDate} `}</span></p>
                                                <p className="p"> {v.workDetail}</p></>

                                              }
                                      </div>
                                     </>
                     
       )}
             





                 </div></>
                 

:
<></>
} 

            
          
            </div>

            {languages[0] !== '' ? 
            <div className="start2">
       
             
              
              <div  className="firstrow" >  
              <p>LANGUGUAGE   </p>
              <span className="line3" />


              </div>
      


              <div className="secondrow1">



                <div className="languages" > 

                {languages.map((v, i) =>
                                    languages[i] !== '' ?

<p>{v} </p>

 : <></>)}



                </div>
</div>



            </div>

            :
            <></>}

            <div className="start2">




            {educationInfo.length >= 1 ?
                         educationInfo[0].graduationStartDate === '' &&
                         educationInfo[0].graduationEndDate === '' &&
                         educationInfo[0].instituteName === '' &&
                         educationInfo[0].educationDetail==='' &&
                         educationInfo[0].instituteLocation==='' &&
                         educationInfo[0].studyField === '' ? <></>
                        :
          <div className="firstrow">
              <p>EDUCATION   </p>
              <span className="line" />
            </div>
            :
            <></>}



              <div className="secondrow">
              {educationInfo.length >= 1 ?
                       educationInfo[0].graduationStartDate === '' &&
                       educationInfo[0].graduationEndDate === '' &&
                       educationInfo[0].instituteName === '' &&
                       educationInfo[0].educationDetail==='' &&
                       educationInfo[0].instituteLocation==='' &&
                       educationInfo[0].studyField === '' ? <></> :

                <div className="first">
                  {educationInfo.map((v, i) =>
                                        v.instituteName !== '' ||
                                            v.instituteLocation!=='' ||
                                            v.educationDetail!=='' ||
                                            v.studyField!=='' ?
                                            <div className="companyname" key={i}> 
                                            <p className="company"> {v.studyField}</p>
                                              <p className="dateandp">{v.instituteName} </p>
                                              <p className="dateandp">{v.instituteLocation} </p>

                                              {v.graduationEndDate === '' && v.graduationStartDate === '' && v.educationDetail==='' ? <></> :
                                            v.graduationEndDate === '' ?
                                       <>     <p className="dateandp">{`${v.graduationStartDate} To Present`} </p>
                                            <p className="dateandp">{v.educationDetail} </p></>


                                                :                                             
                                                 <> <p className="dateandp">{`${v.graduationStartDate} - ${v.graduationEndDate} `}</p>
                                                  <p className="dateandp">{v.educationDetail} </p></>

                                              }
                                            
                                       
                                       
                                       
                                       
                                       
                                        </div> : <></>)}

                 
               
               
               
              
               
                </div>
                 :
                 <></> 
                 }
              
               







              </div>








              { skills[0].title !== ''?
 



              
              <div className="start3">

                
                <div className="firstrow">
                  <p>SKILLS</p>
                  <span className="line" />
                </div>



                <div className="secondrow">
                  <div className="first">
                  <div className="progressbar">

                  {skills.map((v, i) => 
                                v.title!==''?

                     
                     
                      
                     
                                <div> 
                                  <p>{v.title}</p>
                                  <progress id="file" key={i} value={v.value} max={100}> 32% 
                                  </progress>
                                </div>
                               
                             
                             
                             
                             
                             
                             
                           :<></>
                                )}
                                    </div>

                   
                  
                  
                  
                  
                  
                  
                  
                  
                  </div>
                </div>
              </div>
               :
               <></>
             }   {facts[0].detail !=='' ?

             
              <div className="start4">
                <div className="firstrow1">
                  <p>HOBBIES</p>
                  <span className="line" />
                </div>
                
                <div className="firstrow">
                  <p>FACTS </p>
                  <span className="line" />
                </div>
                
                

              </div>
              :
                <></>
                }


{hobbies[0] !==''  ||  facts[0].value !==''? 
              <div className="start5">
                <div className="row">
               
                            
                            
                               
                               {hobbies.map((v, i) =>
                                    v.type === 'Other' ?
                                    <div>
                                    <i className="fas fa-star"></i>
                                    <p className="val">{v.value}</p>
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
  v==='DJ Playing'?"fas fa-headphones":'fas fa-star'} aria-hidden="true"></i>                                        </div>)}
                                        
                         
                    

                  
                 
               
                  
                  
                </div>


                <div className="row1">

                {facts.map((v, i) =>
                                v.detail==='Projects'?
                                <div key={i}>
                                       <h4>{v.detail}</h4>
                    <p className="designation">{v.value}</p>
                              </div>
                             :
                             
                             v.detail==='Experience'?
                             <div key={i}>
                                     <h4>{v.detail}</h4>
                    <p className="designation">{v.value}</p>
                           </div>
                            :
                            v.detail==='Customers'?
                            <div key={i}>
                                      <h4>{v.detail}</h4>
                    <p className="designation">{v.value}</p> 
                              </div>
                            :
                            <div key={i}>
                                 <h4>{v.detail}</h4>
                    <p className="designation">{v.value}</p>
                              </div>)}
                 
                 



                </div>






              </div>
              
            :
            <></>
            }
            </div>
          </div>
        </div></div>
    );
  }
  export default ResumeEight;