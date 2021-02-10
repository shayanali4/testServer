import './style.css'
import { useSelector } from 'react-redux';





function ResumeThirteen() {
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


const { profilePhoto } = resumeDetails;
const { facts } = resumeDetails;
const { profileSummary } = resumeDetails;
const { socialLinks } = resumeDetails;
const { skills } = resumeDetails;
const { workExperience } = resumeDetails;
const { hobbies } = resumeDetails;
const { languages } = resumeDetails;





return (
    

<div className="resume13">




        <div id="print-content" className="main">
            <img className="opacity-img" src="/assets/images/Opacity-text.png" alt="" />
{firstName!=='' || lastName!=='' || profileSummary!=='' || profession!==''||  skills[0].title !=='' || city!==''|| address!=='' || phone!=='' ? 



<div className="start">




    <div className="left">

    { firstName !=='' || lastName !=='' || profession !==''?
<div className="name"> 
<div className="namedetail">
<h4>{`${firstName} ${lastName}`}</h4>
<p>{profession}</p>
</div>
</div>
:
<></>}






{firstName!=='' || lastName!=='' ||address!==''|| email!=='' || address!=='' || email !==''|| phone!==''?  

<div className="info">
    
    <h6  className="h6">Personal Information</h6>
    
    <div>

<h6>FullName</h6>
<p>{firstName} </p>
</div>







<div>

<h6>ADDRESS</h6>
<p>{address}</p>
</div>



<div>

<h6>EMAIL</h6>
<p>{email}</p>
</div>
<div>

<h6>PHONE</h6>
<p>{phone}</p>
</div>

<div>

<h6>CITY</h6>
<p>{city}</p>
</div>


</div>
:
<></>}








{languages[0] !== '' ? 

            
                        

<div className="info">
    
    <h6  className="h6">Languages</h6>
    
    {languages.map((v, i) =>
                                    languages[i] !== '' ?

                                    <div key={i}>

                                    <h6>{v}</h6>
                                    <p className="p"><span class="dot"></span>
                                    <span class="dot"></span>
                                    <span class="dot"></span>
                                    <span class="dot"></span>
                                    <span class="dot"></span>
                                    <span class="dot"></span>
                                    <span class="dot"></span>
                                    <span class="dot"></span>
                                    <span class="dot"></span></p>
                                    
                                    </div>

 : <></>)}














</div>
  :
  <></>}



























{ pastJob !=='' || presentJob !='' || futureJob !==''?

<div className="info">
   

    
    <h6  className="h6">Goals</h6>
    { pastJob !=='' ?
                    <div>

                    <h6>Past Goal</h6>
                    <p>{pastJob}</p>
                    </div>
                  :
                  <></>}
                    { presentJob !=='' ?
                 
                 <div>

<h6>Present goal</h6>
<p>{presentJob}</p>
</div>
                  :
                  <></>}
                  { futureJob !=='' ?
                  
<div>

<h6>future goal</h6>
<p>{futureJob}</p>
</div>
                  :
                  <></>}
  





</div>




:
<></>
}



    </div>








    <div className="right">

{firstName!==''?

<h2>Hellow i am {firstName}</h2>
:
<></>
}
{ profileSummary !==''?
<p className="para">{profileSummary}</p>
:
<></>}



<div className="skills">
<div className="facts">
    {facts[0].detail !==''?
<h4>FACTS</h4>
:
<></>
}
{facts.map((v, i) =>
                                v.detail==='Projects'?
                                <div key={i}>
                                <h5>{v.detail}</h5>
                                <p>{v.value}</p>
                            </div>
                             :
                             
                             v.detail==='Experience'?
                             <div key={i}>
                             <h5>{v.detail}</h5>
                             <p>{v.value}</p>
                         </div>
                            :
                            v.detail==='Customers'?
                            <div key={i}>
                            <h5>{v.detail}</h5>
                            <p>{v.value}</p>
                        </div>
                            :
                            <div key={i}>
    <h5>{v.detail}</h5>
    <p>{v.value}</p>
</div>)}



</div>
<div className="professional">
{skills[0].title !== '' ?                   
<h4>PROFESSIONAL SKILLS</h4>
                              :
                              <></>
                            }
                            
                            {skills.map((v, i) => 
                                v.title!==''?
                                                           
<div key={i}>
    <h5>{v.title}</h5>
    <progress   value={v.value}  key={i} max="100"> 32% </progress>
</div>
                            
                                :<></>
                                )}


 



</div>


</div>

                        
<div className="exp">
<div className="left">

{workExperience.length >= 1 ?
                        workExperience[0].startDate === '' &&
                        workExperience[0].endDate === '' &&
                        workExperience[0].title === '' &&
                        workExperience[0].workDetail==='' &&
                        workExperience[0].employer === '' ? <></>
                        :

   <>
    <h4 className="expleft">WORK EXPERIENCE</h4>
   
   

    {workExperience.map((v, i) =>
                                        v.title === '' &&
                                        v.workDetail==='' &&
                                        v.employer === '' && v.startDate === '' &&
                                        <v className="end"></v>===''  ? <></> :
           
<div key={i} className="left1">
   

   <div  className="left11"> 
   
      <h5>{ `${v.startDate}-${v.endDate}`}</h5>
       
       </div>
   <div className="left22">
       
   
   
   <h5>{v.title}</h5>
   
   <h6>{v.employer}</h6> 
   <h6>{v.workDetail}</h6> 
   </div>
   
   
   
   </div>)}




</>

:<></>}










    </div>
    
    
   
    
    
    
    
    <div className="right">

        
  {educationInfo.length >= 1 ?
                       educationInfo[0].graduationStartDate === '' &&
                       educationInfo[0].graduationEndDate === '' &&
                       educationInfo[0].instituteName === '' &&
                       educationInfo[0].educationDetail==='' &&
                       educationInfo[0].instituteLocation==='' &&
                       educationInfo[0].studyField === '' ? <></> :
                       <>
    <h4 className="experience">EDUCATION</h4>


    {educationInfo.map((v, i) =>
                                        v.instituteName !== '' ||
                                            v.instituteLocation!=='' ||
                                            v.educationDetail!=='' ||
                                            v.graduationStartDate!=='' ||
                                            v.graduationEndDate!=='' ||
                                            v.studyField!=='' ?
                                            <>
                                                <div className="left1">

                                            <div key={i} className="left11"> 

                                            <h5> {`${v.graduationStartDate} - ${v.graduationEndDate}`}</h5>
                                             
                                             </div>
                                         <div className="left22" key={i}>
                                             
                                         <h5>{v.studyField}</h5>
                                         
                                         <h5>{v.instituteName}</h5>
                                         
                                         <h6>{v.instituteLocation}</h6> 
                                         <h6>{v.educationDetail}</h6> 
                                         
                                          
                                         
                                         
                                         </div></div> </>: <></>)}
                                            


   




</>

:<></>}








    </div>
    
    
    
    
    



</div>



{hobbies[0] !== '' ?
<div className="interests" >

<h4>HOBBIES</h4>


<div className="main123">


     
      
            
                               
{hobbies.map((v, i) =>
                                    v.type === 'Other' ?
                                        <div  className="interest123" key={i}>
                                             <i className="fas fa-star"></i>
                                            <p>{v.value}</p>
      </div> :
    <div className="interest123">
<i class={v=='Aviation'?'fas fa-plane':
  v=='Traveling'?'fas fa-route':
  v=='Video Games'?"fas fa-gamepad":
  v=='Reading'?"fas fa-book-reader":
  v=='Writing'?"fas fa-pen-alt":
  v=='Driving'?"fas fa-car":
  v=='Riding'?"fas fa-motorcycle":
  v=='Listening'?"fas fa-headphones":
  v=='Singing'?"fas fa-microphone":
  v=='Exercising'?"fas fa-dumbbell":
  v=='Swimmimg'?"fas fa-swimmer":
  v=='Running'?"fas fa-running":
  v=='Chess'?"fas fa-chess":
  v=='Hiking'?"fas fa-hiking":
  v=='Skiing'?"fas fa-skiing":
  v=='Running'?"fas fa-headphones":
  v=='Socializing'?"fas fa-user-friends":
  v=='Photography'?"fas fa-camera":
  v=='DJ Playing'?"fas fa-headphones":'fas fa-star'} aria-hidden="true"></i>                                        </div>)}
     

    
     





      </div>


      
      
</div> 
:
<></>}



<div className="social" >
{socialLinks[0] !== '' ?  
    <h4>SOCIAL LINKS</h4>
    :
    <></>}
    <div className="social1">
    {socialLinks.map((v, i) =>
                                    socialLinks[i] !== '' ?
                                       
    
    <p>{v}</p>




    : <></>)}

</div>



</div>

    </div>

   




    
    </div>



:
<></>}
</div>

    </div>

)
}
export default ResumeThirteen