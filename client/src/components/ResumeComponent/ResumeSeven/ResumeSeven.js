import React from 'react'
import { useSelector } from 'react-redux';
import heart from './images/heart.png'
import message from './images/message.png'
import phone1 from './images/phone.png'
import degree from './images/degree.png'
import './style.css'







function ResumeSeven (){


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
  const { languages } = resumeDetails;

  const { hobbies } = resumeDetails;
    return (

      <div className="resume77">
        <div id="print-content" className="resume7">
        <img className="opacity-img" src="/assets/images/Opacity-text.png" alt="" />
          <div className="start">
            <div className="first">  

            {firstName !=='' || lastName !=='' || profession !==''  || address !=='' || city !==''?
           <>   <h3 className="firstnamelastname">{`${firstName} ${lastName}`}</h3>
           <h6 className="firstnamelastname">{profession}</h6>
           
              { email !== ''?
              <div className="first1">
                <div className="email"><img src={message} alt="" /></div>
                <div className="email">{email}</div>
             
             
              </div>
              :
              <></>
              }
            
              
              
              
              
               </>
              
             :
            <></>
            }




{phone !==''  ?

              <div className="first2">
                <div className="phonenumber"><img src={phone1} alt="" /> </div>
                <div className="phonenumber">{phone}</div>
              </div> 
              :
              <></>

}
{address !=='' || city !==''  ?

              <div className="first2">
                <div className="phonenumber1">  <p> {address}   {city} </p> </div>
              </div> 
              :
              <></>

}




</div>

{  profilePhoto !=='' ?

            <div className="second"> 
            
            
            
             <div className="imagediv  profilepic">
               
               
                <img src={profilePhoto} alt="" />  </div>
            </div>



          :
          <></>  
          }

</div>


  

{profileSummary!==''?
          <div className="summary">   <p> {profileSummary} </p>  </div>
          :
          <></>
          
        }  


        
         
          
          <div className="skills">

 

         {skills[0].title!==''?
          
            <div className="first">   <i className="degree"> 
                <img src={degree} alt="" /> </i>

 <p className="skills1">skills</p>
 {skills.map((v, i) => 
                                v.title!==''?
                                
                                
                                <div  key={i}className="skillset">
                <p>{v.title}</p>   
                <p className="text">  <progress  key={i} value={v.value}   max="100"> 32% </progress></p>
              </div>
                                
                                
                                :<></>
                                )}










              
              
           </div>


:
<></>
} 















{presentJob !=='' || pastJob !=='' || futureJob !=='' ?
            <div className="second">  
              <i className="degree"> <img src={heart} alt="" /> </i>
              <p className="skills2">Goals</p>


              { pastJob !=='' ?
                 <div className="skillset">
                 <p>Past Goals</p>   
                 <p className="text">{pastJob}</p>
               </div>
                  :
                  <></>}


{ presentJob !=='' ?
                 <div className="skillset">
                 <p>Present Goals</p>   
                 <p className="text">{presentJob}</p>
               </div>
                  :
                  <></>}
                  { futureJob !=='' ?
                 <div className="skillset">
                 <p>Future Goals</p>   
                 <p className="text">{futureJob}</p>
               </div>
                  :
                  <></>}


              
             
            </div>
            :
            <></>
            }









            
            <div className="third"> 

            



            {hobbies[0] !== '' ?

         <>   <i className="degree"> <img src={heart} alt="" /> </i>
              <p className="skills3">Hobbies</p>
                       <div className="flex1">
              
                                {hobbies.map((v, i) =>
                                    v.type === 'Other' ?
                                    <div key={i} className="skillset">
                                   <i className="fas fa-star"></i>   
                                    <p   className="text">{v.value}</p></div> 
                                   :
                                   <div className="skillset">
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
  v==='DJ Playing'?"fas fa-headphones":'fas fa-star'} aria-hidden="true"></i>                                   <p className="text123">{v}</p>
                               </div> )}
</div>
</>

                        : <></>}





              
           


              
            </div>




            
          </div>





          <div className="skills12345">


            {facts[0].detail !=='' ?
            <div className="first">

        
        
              <div className="first">  
              <p className="skills1">Facts</p></div>

              {facts.map((v, i) =>
                                v.detail==='Projects'?
                                <div className="projects">


                                <p>  <span> {v.detail}</span></p> 
                                <p>  <span> {v.value}</span></p>  

                              </div>
                             :
                             
                             v.detail==='Experience'?
                             <div className="projects">


                                <p>  <span> {v.detail}</span></p> 
                                <p>  <span> {v.value}</span></p>  
                           </div>
                            :
                            v.detail==='Customers'?
                            <div className="projects">


                               <p>  <span> {v.detail}</span></p> 
                                <p>  <span> {v.value}</span></p>             </div>
                            :
                            <div className="projects">


                               <p>  <span> {v.detail}</span></p> 
                                <p>  <span> {v.value}</span></p>             </div>)}
              
              




<div> 




  
</div>
             







            </div>
            


           
:
<></>
          }







<div className="second" > 
  

<div className="first">  
{languages[0] !== '' ? 
                 <p className="skills1">     Languages      </p>
              :
              <></>}
           
              
              
              {languages.map((v, i) =>
                                    languages[i] !== '' ?

<div>
<p style={{fontSize:"14px"}}>{v} </p>
                </div>

 : <></>)}
              
            
            
              
              
              
              
              
              </div>



  </div> 





            


            
          </div>










          <div className="skills123456">











          {workExperience.length >= 1 ?
                      workExperience[0].startDate === '' &&
                      workExperience[0].endDate === '' &&
                      workExperience[0].title === '' &&
                      workExperience[0].workDetail==='' &&
                      workExperience[0].employer === '' ? <></>:








                       <div className="first">
                       <div className="first">    
                         <p className="skills1">Experience</p>
                       </div>

<div className="merge">
                       {workExperience.map((v, i) =>
                                        v.title === '' &&
                                        v.workDetail==='' &&
                                        v.employer === '' ? <></> :
                                        <div  key={i}  className="subfirst">
                                        <div className="first"><span />
                                          <p>{v.title} </p>
                                          <p className="location">{v.employer}</p>
                                          <p className="date">{v.workDetail}</p>
                 
                                          {v.startDate === '' && v.endDate === '' ? <></> :
                                            v.endDate === '' ?
                                                <p className="date">{`${v.startDate} To Present`}
                                                 
                                                </p>
                                                : <p className="date">{`${v.startDate} To ${v.endDate}`}
                                                </p>}
                 
                                        
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                        </div>
                                      </div>)}


                                      </div>



                     





                       
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     </div>
































       : <></>   }

























           




















            <div className="second">




            {educationInfo.length >= 1 ?
                       educationInfo[0].graduationStartDate === '' &&
                       educationInfo[0].graduationEndDate === '' &&
                       educationInfo[0].instituteName === '' &&
                       educationInfo[0].educationDetail==='' &&
                       educationInfo[0].instituteLocation==='' &&
                       educationInfo[0].studyField === '' ? <></> :



         <>     <div className="first">   
                <p className="skills1">Education</p></div>

<div className="merge"> 
                {educationInfo.map((v, i) =>
                                        v.instituteName !== '' ||
                                            v.instituteLocation!=='' ||
                                            v.educationDetail!=='' ||
                                            v.studyField!=='' ||
                                            v.instituteName !==''||
                                            v.graduationStartDate !== '' ||
                                            v.graduationEndDate !== '' ?
                                            <div className="subfirst">
                                            <div className="first"><span />
                                              <p>{v.instituteName}</p>
                                              <p className="location">{v.instituteLocation}</p>
                                              <p className="location">{v.studyField}</p>
                                             <p className="date">{v.educationDetail}</p>
                                             {v.graduationEndDate === '' && v.graduationStartDate === '' ? <></> :
                                            v.graduationEndDate === '' ?
                                                <p className="date">{`${v.graduationStartDate} To Present`}
                                                 
                                                </p>
                                                : <p className="date">{`${v.graduationStartDate} To ${v.graduationEndDate}`}
                                                </p>}
                                                </div>
                                            
                                          </div> : <></>)}
                                          </div>




             
              
              
              
              
              
              
              
              
              
              
              
              
              </>








              : <></> }


<div></div>




            </div>






        












          </div>







          {socialLinks[0] !== '' ?                   
    <div className="lastdiv">

    {socialLinks.map((v, i) =>
                              socialLinks[i] !== '' ?
                                 
                              <div  className="first" key={i}>
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
                             
                             
                             
                              :
                          
                              <></>



                            }
              


      
        </div>
      </div>
    );
  }  
export default ResumeSeven;