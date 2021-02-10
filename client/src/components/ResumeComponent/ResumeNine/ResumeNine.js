
import map from './images/map.png'
import interest5 from './images/interest5.png'
import phone1 from './images/phone.png'
import './style.css'
import { useSelector } from 'react-redux';



function ResumeNine() {

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
  const { languages } = resumeDetails;
  const { workExperience } = resumeDetails;
  const { hobbies } = resumeDetails;









    return (

      <div className="resume9">
        <div id="print-content" className="main">
     <img className="opacity-img" src="/assets/images/Opacity-text.png" alt="" />
      
         <div className="left">
            { firstName !=='' || lastName  !=='' || profession ?

            <div className="details"> 
              <p className="name">{firstName}  {lastName} </p>
              <p className="passion">{profession}</p>
            </div>
            :
            <></>

            }
 

     <div className="info">

{phone !=='' ?
          <div className="first">   <div className="first1"><img src={phone1} height="25px" width="25px" alt="" /></div>   
                <div className=" first2">{phone}</div>
              </div>

:
<></>

}



          {email !=='' ?    <div className="second">    <div className="second1">
                  <img src={interest5} height="25px" width="25px" alt="" /></div> 
                <div className="second2">  {email}</div>
              </div>
              
            :
            <></>
            
            }

{city !=='' || address !=='' ?

              <div className="third"> <div className="third1">    <img src={map} height="25px" width="25Px" alt="" /> </div>  
                <div className="third2"> {address}{city}</div>
              </div>
             :
             <></>
            }
          


            </div>  
             


  
            <div className="lang">
            
            {languages[0] !== '' ? 
                <>
                  <br />
              <h3>LANGUAGE</h3>
                  
                </>
              :
              <></>}
             
              <div className="progress">

              {languages.map((v, i) =>
                                    languages[i] !== '' ?

<div>
                  <p >{v}</p> 
                </div>

 : <></>)}
                
                
                
                
                
              </div>
            </div>

            { pastJob !=='' || presentJob !=='' || futureJob !==''?

<div className="lang">
<br />
              <h3>Goals</h3>
              


{ pastJob !=='' ?
                 <div className="ref">
                 <h4>Past Goals</h4>
                 <p className="design">{pastJob}</p>
                
               </div>
             
                  :
                  <></>}
                  { presentJob !=='' ?
                 
                 <div className="ref">
                 <h4>Present Goals</h4>
                 <p className="design">{presentJob}</p>
                
               </div>
                  :
                  <></>}
                  { futureJob !=='' ?
                  <div className="ref">
                  <h4>Future Goals</h4>
                  <p className="design">{futureJob}</p>
                 
                </div>
                  :
                  <></>}
                 
                 
                 
                 
                  
                
                
                
                 </div>
:<></>
 }










{ hobbies[0] !=='' ?

<div className="lang">



  
           <>   <br />
              <h3>HOBBIES </h3>
              </>
   




              <div className="hobbies">       


        
{hobbies.map((v, i) =>
                                    v.type === 'Other' ?
                                    <div>                                <i className="fas fa-star"></i>
                                    
                                    <p className="value">{v.value}</p>
                                    </div>
                                    
                                :
   
  <div> <i class={v==='Aviation'?'fas fa-plane':
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
          </div>)}


      
            
                                        </div>
            
            

                                        </div>






         
        
:
<></>



}
        
        
          </div>




   
















          <div className="right">

{profileSummary !==''?
            <div className="summary">
              <h3>SUMMARY</h3>
              
              <p className="summary1">{profileSummary}
              </p>
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

            <div className="exp">
              <h3>EXPERIENCE</h3>
              
              {workExperience.map((v, i) =>
                                        v.title === '' &&
                                        v.workDetail==='' &&
                                        v.employer === '' ? <></> :
                                        <div key={i} className="exp1">
                                        
                                        {v.startDate === '' && v.endDate === ''  && v.title === '' && v.workDetail ===''  &&v.employer==='' ? <></> :
                                            v.endDate === '' ?
                                         <>  <h5>  {` ${v.startDate} To present  / ${v.title} / ${v.employer}` } </h5>
                                            <p className="work">{v.workDetail}</p>
                                            </>
                                            
                                            
                                            
                                          
                                          



                                                : <> <h5>{`${v.startDate} To ${v.endDate}  / ${v.title} / ${v.employer} `  
                                                
                                                
                                                
                                                }
                                                </h5>
                                                                                            <p className="work">{v.workDetail}</p></>

                                                
                                                
                                                }
                                    </div>)}








              
          
            </div>
            
            
            </>
            :
            <></>}
            
 







            <div className="education">



         

              {educationInfo.length >= 1 ?
                       educationInfo[0].graduationStartDate === '' &&
                       educationInfo[0].graduationEndDate === '' &&
                       educationInfo[0].instituteName === '' &&
                       educationInfo[0].educationDetail==='' &&
                       educationInfo[0].instituteLocation==='' &&
                       educationInfo[0].studyField === '' ? <></> :
                        <> 
                         <h3>EDUCATION</h3>
              
              
              {educationInfo.map((v, i) =>
                                        v.instituteName === '' &&
                                        v.instituteLocation==='' &&
                                        v.studyField === '' ? <></> :
                                        <div key={i} className="exp1">
                                        
                                        {v.graduationStartDate === '' && v.graduationEndDate === ''  && v.instituteName === '' && v.educationDetail ===''  && v.instituteLocation ==='' ? <></> :
                                            v.graduationEndDate === '' ?
                                         <>  <h5>  {` ${v.graduationStartDate} To present  / ${v.studyField} / ` } </h5>
                                           <p className="education1">{`${v.instituteName}`} {`${v.instituteLocation}`}  </p>
                                                  <p className="work"> {v.educationDetail}</p>
                                            </>
                                            
                                            
                                            
                                          
                                          



                                                : <> <h5>{`${v.graduationStartDate} To ${v.graduationEndDate}  / ${v.studyField} ` }</h5>
                                                <p className="education1">{`${v.instituteName}`} {`${v.instituteLocation}`}  </p>
                                                  <p className="work"> {v.educationDetail}</p>

                                                                                    </>

                                                
                                                
                                                }
                                    </div>)} </>

                                    :
                                    <></ >}












                            









              <div className="skills">
             {  skills[0].title !==''?
                
                <><h3>SKILLS</h3>
                </>
                :
                <></>
              } 


                <div className="skillsall">
                  <div className="progress">
                  {skills.map((v, i) => 
                                v.title!==''?
                           
                    <div key={i}>
                    <p>{v.title}</p>
                    <progress id="file" key={i} value={v.value}  max="100"> 32% </progress>
                  </div>
                     :<></>
                                )}


                    
                  
                    



                    
                  </div>
                </div>

              </div>



<div className="sociallinks" > 
{socialLinks[0] !== '' ?                   
 <>
<h3>SOCIAL LINKS</h3>
</>
:
<></>}
<div className="social1" >
{socialLinks.map((v, i) =>
                                    socialLinks[i] !== '' ?

<p className="sociallink">   {v}</p>


 : <></>)}
 </div>



</div>










            </div>




<div className="facts">

  {facts[0].detail !==''?
 <> <h3>FACTS</h3>
 </>
:
<></>
}




{facts.map((v, i) =>
                                v.detail==='Projects'?
                                <div key={i}>
<p className="fact">  {v.detail} </p>
<p className="valuefact">  {v.value} </p>


</div>
                             :
                             
                             v.detail==='Experience'?
                             <div key={i}>
<p className="fact">  {v.detail} </p>
<p className="valuefact">  {v.value}</p>


</div>
                            :
                            v.detail==='Customers'?
                            <div key={i}>
<p className="fact">  {v.detail} </p>
<p className="valuefact">  {v.value} </p>


</div>
                            :
                            <div>
                            <p className="fact">  {v.detail} </p>
                            <p className="valuefact">  {v.value} </p>
                            
                            
                            </div>
                            
                            
                            )}












 </div>

          </div>
        </div>
      </div>
    );
  }
  export default ResumeNine;