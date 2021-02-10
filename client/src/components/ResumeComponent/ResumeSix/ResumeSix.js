
import React from 'react'
import './style.css'
import message from './image/message.png';
import phone1 from './image/phone.png';
import location from './image/location.png';
import { useSelector } from 'react-redux';










function ResumeSix()  {
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


console.log ("skills",skills)
// console.log(  "work",workExperience)
console.log(  "social",)



      return (
  
        <div className="resume6">
          <div id="print-content" className='content'>
            <img className="opacity-img" src="/assets/images/Opacity-text.png" alt="" />
{ firstName !=='' || lastName !=='' || profession !==''?
          <div className="nameandprofession">
            <h3>  <span className="bolder">{firstName}</span>  <span className="lighter">{lastName}</span> </h3>
            <div className="combine"> <p>{profession}</p> <span className="span"> </span></div>
          </div>
          :
          <></>

}



{ phone !=='' || email !=='' || address!=='' || profileSummary!==''|| city !=='' ?


          <div className="start">
            <div className="first">
              <p> Contact </p>
              <div className="contact1">   <img src={message} alt="" />
                <li>{email}</li> </div>
              <div className="contact1"> <img src={phone1} alt="" /> 
                <li>{phone}</li> </div>
              <div className="contact1">   <img src={location} alt="" />
                <li>{address}{city}</li> </div>
             
            </div>
       
            <div className="second">
{ profileSummary !==''?
              <div className="secondfirst">
                <p className="intro"> INTRODUCTION</p>
                <p className="paragraph">{profileSummary}</p>
              </div>
              :<></>



}</div>
</div>

: <> </>  }













{workExperience[0].title !=='' ?


<div className="third1">
  

<div className="first">


{workExperience.length >= 1 ?
                        workExperience[0].startDate === '' &&
                        workExperience[0].endDate === '' &&
                        workExperience[0].title === '' &&
                        workExperience[0].workDetail==='' &&
                        workExperience[0].employer === '' ? <></>
                        :
                        <> 
  <div className="line">



 {workExperience.map((v, i) =>
                                        v.title === '' &&
                                        v.workDetail==='' &&
                                        v.employer === '' ? <></> :
                                        <div className="workdate">
                                        
                                        {v.startDate === '' && v.endDate === '' && v.title ==='' && v.workDetail===''  && v.employer ==='' ? <></> :
                                            v.endDate === '' ?
                                                <p>{`${v.startDate} To Present`}
                                                 
                                                </p>
                                                : <p>{`${v.startDate} To ${v.endDate}`}
                                                </p>}
                                    </div>)}


 

</div> </>


:<></>}







{/* <div  className="workdate" > 

<p> 2020-2040 </p>
<p> 2020-2040 </p>



 </div> */}


<div  className="Workexperience" >
{workExperience.length >= 1 ?
                        workExperience[0].startDate === '' &&
                        workExperience[0].endDate === '' &&
                        workExperience[0].title === '' &&
                        workExperience[0].workDetail==='' &&
                        workExperience[0].employer === '' ? <></>
                        :
                        <> 
  <div>
 <h4 className="h4">Work Experience</h4>



 {workExperience.map((v, i) =>
                                        v.title === '' &&
                                        v.workDetail==='' &&
                                        v.employer === '' ? <></> :
            <div >
  <span className="round"> </span>  < p className="companyname">  {v.title} </p> 
  <p className="companyname2">  {v.employer} </p>  
  < p className="workexp">  {v.workDetail} </p> 
                                            </div>)}


 

</div> </>


:<></>}



   
   </div>




</div>





<div className="second">


{ pastJob !=='' || presentJob !=='' || futureJob !==''?

<div className="skills">
<h4>Goals</h4>

                <div className="skills1">


{ pastJob !=='' ?
                  <div className="skills1"> 
                  <h6> Past Goals </h6> 
                  <p>{pastJob}</p>
                  
                  
                  
                  </div>
                  :
                  <></>}
                  { presentJob !=='' ?
                 
                 <div className="skills1"> 
                 <h6> Present Goals </h6> 
                 <p>{presentJob}</p>
                 
                 
                 
                 </div>
                  :
                  <></>}
                  { futureJob !=='' ?
                   <div className="skills1"> 
                   <h6> Future Goals </h6> 
                   <p>{futureJob}</p>
                   
                   
                   
                   </div>
                  :
                  <></>}
                 
                 
                 
                 
                  
                
                
                
                </div>
                 </div>
:<></>
 }







  







<div className="progress">
  { skills[0].title !== ''?
  <h4 className="skillsh4">Skills</h4>
  :
  <></>
}                                <div className="progress12345" >     


{skills.map((v, i) => 
                                v.title!==''?
                             <>   <p class="progress123">  <progress  key={i} value={v.value}  max="100"> 32% </progress></p>
                                <p className="title">{v.title}</p></>
                            
                                :<></>
                                )}
  
  
                                </div> 
</div>

</div>





</div>
:
<></>




}










{ educationInfo[0].instituteName !==''?

<div className="third1">
<div className="first">




{educationInfo.length >= 1 ?
                          educationInfo[0].graduationStartDate === '' &&
                          educationInfo[0].graduationEndDate === '' &&
                          educationInfo[0].instituteLocation ==='' &&
                          educationInfo[0].instituteName ==='' 
                           ? <></> :
                        <> 
                        
  <div className="line">



 {educationInfo.map((v, i) =>
                                        v.graduationEndDate === '' && 
                                        v.graduationStartDate===''
                                        &&  v.instituteName ==='' && 
                                        v.instituteLocation ==='' ? <></>
                                         :
                                        <div className="workdate">
                                        
                                        {v.graduationEndDate === '' && v.instituteName ===''  && v.instituteLocation ===''  ? <></> :
                                            v.graduationEndDate === ''  ?
                                                <p>{`${v.graduationStartDate} To Present`}
                                                 
                                                </p>
                                                : <p>{`${v.graduationStartDate} To ${v.graduationEndDate}`}
                                                </p>}
                                    </div>)}


 

</div> </>


:<></>}






















<div  className="Workexperience" >
  
  
  




  {educationInfo.length >= 1 ?
                       educationInfo[0].graduationStartDate === '' &&
                       educationInfo[0].graduationEndDate === '' &&
                       educationInfo[0].instituteName === '' &&
                       educationInfo[0].educationDetail==='' &&
                       educationInfo[0].instituteLocation==='' &&
                       educationInfo[0].studyField === '' ? <></> :
                        <> 
  <div>
  <h4>Education </h4>



 {educationInfo.map((v, i) =>
                                        v.instituteName !== '' ||
                                            v.instituteLocation!=='' ||
                                            v.educationDetail!=='' ||
                                            v.studyField!=='' ?
                                            <div >
  <span className="round"> </span>  < p className="companyname">  {v.instituteName} </p> 
  <p className="companyname2">  {v.instituteLocation} </p>  
  < p className="workexp">  {v.studyField} </p> 
  < p className="workexp">  {v.educationDetail} </p> 

                                            </div> : <></>)}


 

</div> </>


:<></>}














   
   </div>





</div>





<div className="second">



{hobbies[0] !== '' ?
                          <>  <h4>Hobbies</h4>
                            
                            <div className="flex"> 
                            
                               
                               {hobbies.map((v, i) =>
                                    v.type === 'Other' ?
                                        <div  className="interests" key={i}>
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
  v==='DJ Playing'?"fas fa-headphones":'fas fa-star'} aria-hidden="true"></i>                                        </div>)}
                                        </div>
                                        
                            </>
                        : <></>}







</div>




</div>

:
<></>

}




          <div className="fourth">

           
            <div className="first">

            {facts.map((v, i) =>
                                v.detail==='Projects'?
                                <div key={i}>
                                <h4 className="heading">  {v.detail} </h4>
                                <p> {v.value}</p> 
                              </div>
                             :
                             
                             v.detail==='Experience'?
                             <div key={i}>
                              <h4 className="heading">  {v.detail} </h4>
                             <p> {v.value}</p> 
                           </div>
                            :
                            v.detail==='Customers'?
                            <div key={i}>
                                <h4 className="heading">  {v.detail} </h4>
                                <p> {v.value}</p> 
                              </div>
                            :
                            <div key={i}>
                                 <h4 className="heading">  {v.detail} </h4>
                                <p> {v.value}</p> 
                              </div>)}

                              </div>
                              :
                              <></>

                               <div className="second">
                               {languages[0] !== '' ? 
                                            <div className="heading1">    <p className="p" > LANGUAGE</p></div>

              :
              <></>}
                               {languages.map((v, i) =>
                                    languages[i] !== '' ?

<div>
                  <p  className="language">{v}</p> 
                </div>

 : <></>)}



                               </div>

             
                              <div className="second"> 

                              {socialLinks[0] !== '' ?                   
                              <div className="heading1">    <p className="p" > Social Skills</p></div>
                              :
                              <></>
                            }
              

                              {socialLinks.map((v, i) =>
                                    socialLinks[i] !== '' ?
                                       
      
<div className="heading2">

<div className="subheading2">
                  <div key={i} >    </div>
                  
                    <p>{v}</p>
                </div>
               
                
              


                
</div>

 : <></>)}
 </div>

  {/* <div className="subheading2">
                  <div key={i} >     <img src={facebook1} /></div>
                  <div><p className="first">Facebook</p>
                    <p>{v}</p></div>
                </div> */}

              
              
            
          </div>
          </div>
          
        </div>
      );
};
export default ResumeSix;