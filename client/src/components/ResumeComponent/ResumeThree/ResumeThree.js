import { useSelector } from 'react-redux';
import './style.css'

function ResumeThree () {



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
<div className="resume3">
        <div id="print-content" className="printarea">
        <img className="opacity-img" src="/assets/images/Opacity-text.png" alt="" />
        {firstName !=='' || lastName!=='' || profession !==''  || address!=='' || phone!=='' ||  address!==''  || city!=='' ||  email !=='' || profilePhoto   ?

          <div className="header">
            
            {firstName !=='' || lastName!=='' || profession !==''  || address!=='' || phone!=='' ||  address!==''  || city!=='' ||  email !=='' || profilePhoto   ?
            <div className="left">
              {profilePhoto  ?  
              <div className="img1"> <img src={profilePhoto }  alt="" /> </div>
              :
              <></>
              
              }
              


{firstName!=='' || lastName!==''|| profession!=='' ?

              <div className="left-details"> 
              { firstName!=='' || lastName!=='' ?
              
                <h1>{firstName} {lastName}</h1>
                
                

                                 
                :
                <></>
            
                 
                
           
              
               }
              { profession !=='' ?
                <h3>{profession}</h3>:
                  <></>

              }
              </div>
              


               :
              
              <></>
} 



{ city !=='' || address !==''|| phone !=='' || email !== ''?
              <div className="addressfield">
                
                <ul>   
                 
             
              

                { email !=='' ?
                <div>
                   <li>  <i class="fas fa-envelope-square"></i>

                   <p>{email}</p></li>
                   </div>
                  :
                  <></>
                  }
                { address !=='' ?
                     <div>
                   <li>  <i class="far fa-address-card"></i> <p>{address}</p></li>     </div>
                  :
                  <></>
                  }
                { city !=='' ?
                     <div>
                   <li>  <i class="fas fa-city"></i>     

               

                   <p>{city}</p></li></div>
                  :
                  <></>
                  }
                 { phone !=='' ?
                 <div>
                   <li>     <i class="fas fa-phone"></i>  <p>{phone}</p></li></div>
                  :
                  <></>
                  }


                
                </ul>
              </div>
:
<></>
}











<div className="addressfield">
              
                <ul>  
                {socialLinks[0] !== '' ?                   
      <h4>Social Links</h4>
:
<></>} 
                 
           
              



                {socialLinks.map((v, i) =>
                                    socialLinks[i] !== '' ?

<li> 

<p>{v}</p></li>


 : <></>)}

             
               
              
               


                
                </ul>
              </div>






              <div className="addressfield">
              
              <ul>  
              {languages[0] !== '' ? 
                  <h4>Langugaes</h4>
              :
              <></>} 
               
          
            



              {languages.map((v, i) =>
                                    languages[i] !== '' ?

             <li key={i}>     <p >{v}</p> </li>
               

 : <></>)}

           
             
            
             


              
              </ul>
            </div>















{ hobbies[0]!=='' ?
              <div className="otherskills">
                <h4>Hobbies</h4>

                <div className="icons">
                  

{hobbies.map((v,i)=>

v.type==='Other'?


<div key={i} className="icon1">  <i className="fas fa-star"></i>
<p>{v.value}</p>
</div>:


<div className="icon1"> <i class={v==='Aviation'?'fas fa-plane':
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
                    <p>{v.value}</p>
                  </div>

)}

</div>
               
              </div>
              
              
              
              
              :<></>}










            </div>
            
          :
          <></>
          }
            <div className="right">
             


              {profileSummary !== '' ? 
            <>  <h3 className="h31">Profile Summary</h3>
              <div className="biography">
               {profileSummary}</div></>
                :
                <></>
              
              }
             

{ pastJob !=='' || presentJob !=='' || futureJob !==''?

<div className="personality">
<h3>Goals</h3>
<p className="p" > Past Goals / Present Goals /Future Goals </p>

                <div className="subpersonality">


{ pastJob !=='' ?
                  <div> <p>  {pastJob} </p> </div>
                  :
                  <></>}
                  { presentJob !=='' ?
                 
                  <div> <p>  {presentJob}  </p> </div>
                  :
                  <></>}
                  { futureJob !=='' ?
                  
                  <div> <p>  {futureJob}  </p> </div>
                  :
                  <></>}
                 
                 
                 
                 
                  
                
                
                
                </div>
                 </div>
:<></>
}
<div className="Mandf">

{educationInfo.length >= 1 ?
                        educationInfo[0].graduationStartDate === '' &&
                        educationInfo[0].graduationEndDate === '' &&
                        educationInfo[0].instituteName === '' &&
                        educationInfo[0].educationDetail==='' &&
                        educationInfo[0].studyField === '' ? <></> :




             
 
               educationInfo.map((v,i)=>
              v.instituteName !== '' ||
              v.instituteLocation!=='' ||
              v.educationDetail!=='' ||
              v.studyField!=='' ?
             

<div className="motivation">

<div className="motivation1" key={i} >
                    Education</div>
                    <div className="motivation2"> 
                    <li className="title">Institute Name</li>
                    <li key={i}>{v.instituteName} </li>
                    <li className="title">Institute Location</li>
                    <li key={i}>{v.instituteLocation} </li>


                    <li className="title">Field Of Interest</li>
                    <li key={i}>{v.studyField}</li>
                    <li className="title"> Educational Experience</li>
                   
                   
                    <li key={i}>{v.educationDetail}</li>
                    <li className="title">Date</li>

                    {v.graduationStartDate === '' && v.graduationEndDate === '' ? <></> :
                                                    v.graduationEndDate === '' ?

                                                        <li> {`${v.graduationStartDate} To Pesent`}
                                                            <span className='current'></span>
                                                        </li> :
                                                        <li>{`${v.graduationStartDate} To ${v.graduationEndDate}`}
                                                            <span className="previous"></span>
                                                        </li>}
                    
                   
                  </div>
</div>
              :<></>

)    
            

:<></>
                        
             
    }
    </div>
    <div className="Mandf">

{workExperience.length >= 1 ?
                        workExperience[0].StartDate === '' &&
                        workExperience[0].EndDate === '' &&
                        workExperience[0].title === '' &&
                        workExperience[0].workDetail==='' &&
                        workExperience[0].employer === '' ? <></> :




             
 
               workExperience.map((v,i)=>
              v.startDate  === '' &&
              v.title === '' &&
              v.workDetail ==='' &&
              v.employer ==='' ?<></>:
             

<div className="motivation">

<div className="motivation1" key={i} >
                    Work Experience</div>
                    <div className="motivation2"> 
                    <li className="title">Work title</li>
                    <li key={i}>{v.title} </li>

                    <li className="title">Company Name</li>
                    <li key={i}>{v.employer}</li>
                    <li className="title"> Employer</li>
                    <li key={i}>{v.workDetail}</li>
                    <li className="title">Date</li>

                    {v.startDate === '' && v.endDate === '' ? <></> :
                                                    v.endDate === '' ?

                                                        <li> {`${v.startDate} To Pesent`}
                                                            <span className='current'>Current Job</span>
                                                        </li> :
                                                        <li>{`${v.startDate} To ${v.endDate}`}
                                                            <span className="previous">Previous Job</span>
                                                        </li>}
                    
                   
                  </div>
</div>

)    
            

:<></>
                        
             
    }
    </div>

           

    {facts[0].detail !==''?


              <div className="senario"> 
              
            
   <h3>Facts</h3>
        


                {facts.map((v, i) =>
                                v.detail==='Projects'?
                                <div  key={i}className="senariodiv">
                                <h4>{v.detail}</h4>
                                <p>{v.value}</p>
                               </div>
                             :
                             
                             v.detail==='Experience'?
                                  <div  key={i}className="senariodiv">
                 <h4>{v.detail}</h4>
                 <p>{v.value}</p>
                </div>
                            :
                            v.detail==='Customers'?
                            <div key={i} className="senariodiv">
                            <h4>{v.detail}</h4>
                            <p>{v.value}</p>
                           </div>
                            :
                            <div key={i} className="senariodiv">
                 <h4>{v.detail}</h4>
                 <p>{v.value}</p>
                </div>
                            
                            
                            )}





               
               
              </div>
              :
              <></>
              }

{skills[0].title !==''?
<div className="senario"> 
           
<h3>Skills</h3>

<div className="senariodiv1">
                  {skills.map((v, i) => 
                                v.title!==''?
                           
                    
< div key={i}>  <p>{v.title}</p>
<progress id="file"  key={i} value={v.value}  max="100"> 32% </progress></div>
                     :<></>
                                )}

               
                   
                 
                


</div>
</div>
        
        :
            <></>}a
            </div>
            
          </div>
          :
          <></>}
        </div></div>
      
    );
  }
  export default ResumeThree