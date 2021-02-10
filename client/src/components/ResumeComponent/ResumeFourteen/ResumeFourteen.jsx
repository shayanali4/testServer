import './style.css'
import { useSelector } from 'react-redux';





function ResumeFourteen() {
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
    

<div className="resume14">



            <div id="print-content" className="main">
            <img className="opacity-img" src="/assets/images/Opacity-text.png" alt="" />
            {firstName!=='' || lastName!=='' || profileSummary!=='' || profession!==''||  skills[0].title !=='' || city!==''|| address!=='' || phone!=='' ? 

    <div className="start">




<div className="left">
    {firstName!==''  || lastName!=='' ||  profession !==''?

    <div className="container1">



        <h4>Basic Information</h4>
        <div className="container11">
        <h3>{`${firstName}  ${lastName}`}</h3>
        <h4>{profession}</h4>
        <hr/>
        {/* <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque nostrum facere aliquid dolores dignissimos vero minus at, adipisci nisi repellendus minima, asperiores voluptatibus, amet beatae provident molestias dolore nulla!</h6> */}
        </div>
    </div>
:
<></>   
}


{firstName!=='' ||  lastName!=='' || city!=='' ||  address !=='' || phone !==''? 

    <div className="container2">



        <h4>Personal Information</h4>
        
        <div className="info">

<h6>FirstName</h6>
<p>{firstName}</p>


        </div>

        <div className="info">

<h6>Address</h6>
<p> {`${address} ${city}`}</p>


        </div>
        <div className="info">

<h6>Email</h6>
<p>{email}</p>


        </div>
        <div className="info">

<h6>Phone</h6>
<p>{phone}</p>


        </div>
    </div>
    :
    <></>

}

{languages[0] !== '' ? 

<div className="container3">


<h4>Languages</h4>

<div className="language">



{languages.map((v, i) =>
                                    languages[i] !== '' ?

                                    <div  key={i}>

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


</div>



:
<></>}



{hobbies[0] !== '' ?
<div className="container4">

<h4 > Hobbies</h4>



<div>
{hobbies.map((v, i) =>
                                    v.type === 'Other' ?
                                    <p key={i}>
                                    {v.value}         <i className="fas fa-star"></i>
                                           </p>
   :
 <p key={i}>{v.value}  <i class={v=='Aviation'?'fas fa-plane':
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
  v=='DJ Playing'?"fas fa-headphones":'fas fa-star'} aria-hidden="true"></i>  </p>                                      )}




</div>



</div>

:
<></>}


</div>














<div className="right">
    {profileSummary!==''?

    <div className="container5">
        <h4>Summary</h4>
        <div className="summary">
<h5>{profileSummary}</h5>

        </div>

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
    <div className="container6">
<h4>Work Experience</h4>


{workExperience.map((v, i) =>
                                        v.title === '' &&
                                        v.workDetail==='' &&
                                        v.employer === '' && v.startDate === '' &&
                                        <v className="end"></v>===''  ? <></> :
           
<div key={i} className="right1">
   

   <div  className="right11"> 
   
      <h5>{ `${v.startDate}-${v.endDate}`}</h5>
       
       </div>
   <div className="right22">
       
   
   
   <h5>{v.title}</h5>
   
   <h6>{v.employer}</h6> 
   <h6>{v.workDetail}</h6> 
   </div>
   
   
   
   </div>)}











</div>



</>

:<></>}


{educationInfo.length >= 1 ?
                       educationInfo[0].graduationStartDate === '' &&
                       educationInfo[0].graduationEndDate === '' &&
                       educationInfo[0].instituteName === '' &&
                       educationInfo[0].educationDetail==='' &&
                       educationInfo[0].instituteLocation==='' &&
                       educationInfo[0].studyField === '' ? <></> :
                       <>


<div className="container6">
<h4>Education</h4>





{educationInfo.map((v, i) =>
                                        v.instituteName !== '' ||
                                            v.instituteLocation!=='' ||
                                            v.educationDetail!=='' ||
                                            v.graduationStartDate!=='' ||
                                            v.graduationEndDate!=='' ||
                                            v.studyField!=='' ?
                                            <>
                                                <div className="right1">

                                            <div key={i} className="right11"> 

                                            <h5> {`${v.graduationStartDate} - ${v.graduationEndDate}`}</h5>
                                             
                                             </div>
                                         <div className="right22" key={i}>
                                             
                                         <h5>{v.studyField}</h5>
                                         
                                         <h5>{v.instituteName}</h5>
                                         
                                         <h6>{v.instituteLocation}</h6> 
                                         <h6>{v.educationDetail}</h6> 
                                         
                                          
                                         
                                         
                                         </div></div> </>: <></>)}





</div>


</>

:<></>}


{ skills[0].title !== ''  ||facts[0].detail !==''?    

<div className="container7">

    <div className="flex">
    {skills[0].title !== '' ?                   

<div className="skills">
<h4>Skills</h4>

{skills.map((v, i) => 
                                v.title!==''?
                                                           
<div key={i}>
    
    <h5> {v.title}</h5>
 <progress   value={v.value} max="100"> 32% </progress>
 
 </div>
                            
                                :<></>
                                )}





</div>
:
<></>}
{facts[0].detail !==''?

<div className="facts">
<h4>Facts</h4>

{facts.map((v, i) =>
                                v.detail==='Projects'?
                                <div key={i} >
                                <h5>{v.detail}</h5>
                                <h6>{v.value}</h6>
                                </div>
                             :
                             
                             v.detail==='Experience'?
                             <div key={i} >
                             <h5>{v.detail}</h5>
                             <h6>{v.value}</h6>
                             </div>
                            :
                            v.detail==='Customers'?
                            <div key={i} >
                            <h5>{v.detail}</h5>
                            <h6>{v.value}</h6>
                            </div>
                            :
                            <div key={i} >
<h5>{v.detail}</h5>
<h6>{v.value}</h6>
</div>)}




</div>
:
<></>}
</div>

</div>


:
<></>}




{ pastJob !=='' || presentJob !='' || futureJob !==''|| socialLinks[0] !== '' ?


<div className="container7">

    <div className="flex">
    {socialLinks[0] !== '' ?  

<div className="skills">
<h4> Social Links</h4>

{socialLinks.map((v, i) =>
                                    socialLinks[i] !== '' ?
                                       
    
  
<div>
    
    <h5 className="sc"> {v}</h5>
    
    </div>




    : <></>)}



</div>
:
<></>}


{ pastJob !=='' || presentJob !='' || futureJob !==''?


<div className="facts">
<h4>Goals</h4>


{ pastJob !=='' ?
                   <div >
                   <h5>Past Goals</h5>
                   <h6>{pastJob}</h6>
                   </div>
                  :
                  <></>}
                    { presentJob !=='' ?
                 
                 <div >
                 <h5>Present Goals</h5>
                 <h6>{presentJob}</h6>
                 </div>
                  :
                  <></>}
                  { futureJob !=='' ?
                  
<div >
<h5>Future Goals</h5>
<h6>{futureJob}</h6>
</div>           :
                  <></>}



</div>
:
<></>
}
</div>


</div> 
:
<></>}























</div>



</div>

:
<></>}
</div>
</div>
)
}
export default ResumeFourteen;