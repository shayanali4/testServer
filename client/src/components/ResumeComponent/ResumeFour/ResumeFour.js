import { useSelector } from 'react-redux';
import email1 from './images/email.png'
import location1 from './images/location.png'
import phone1 from './images/phone.png'
import './style.css'




function ResumeFour() {
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

      
        <div className="resume4">
        <div id="print-content" className="main">
          <img className="opacity-img" src="/assets/images/Opacity-text.png" alt="" />
         {profilePhoto ?
        <>  <div className="plane">
            i
          </div>
          <div className="profilepic">  <img src={profilePhoto} alt="" />
          </div></>
          
          :
          <></>
          }
          {firstName !=='' || lastName !=='' || profession !=='' ?
          <div className="nandf"> <h1>{ `${firstName} ${lastName}`}</h1>
            <h5>{profession}</h5>
          </div>
          :
          <></>
        }



          <div className="Aboutme">
            {profileSummary !==''? 
            <div className="first">
              <h4>About me</h4>
              <p>  
                {profileSummary}</p></div>
           
           :
           <></>
            }
            { email !==''  || phone  !==''  || address !==''  || city !==''  ?
            <div className="second">  
              

              <div> 
                <li><img src={email1} alt="" /></li>
                <li>{email}</li>
              </div>
              <div>
                <li><img src={phone1} alt="" /></li>
                <li>{phone}</li>
              </div>
              <div>
                <li><img src={location1} alt="" /></li>
                <li>{address}{city}</li>
              </div>
            </div>
            :
            <></>
            }




            <div className="third"> 

            {socialLinks.map((v, i) =>
                              socialLinks[i] !== '' ?
                                 
                              <div  key={i}>
                              {v.includes("facebook")?
                              <i class="fab fa-facebook"></i>
                              :v.includes("linkedin")?
                              <i class="fab fa-linkedin"></i>
                              :v.includes("behance")?
                              <i class="fab fa-behance-square"></i>:<></>
                              }
                          
                        
                                   
                                    <li>{v}</li>
                                  
               
                
                      </div>

: <></>)}
                                       
      


                 
              


                


              
              
              
            </div>
         
         
         
         
          </div>
         


          <div className="companynames">
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
                                        <div className="subfirst">
                                        <h6>{v.title}</h6>
                                        <p>{v.employer}    </p>
                                      
                                      
                                        {v.startDate === '' && v.endDate === '' && v.title ==='' && v.workDetail==='' && v.employer === ''?  <></> :
                                            v.endDate === '' ?
                                        <>        <p> {`${v.startDate} To Present`}  </p>
                                        <div className="destination">{v.workDetail}</div></>
    
                                            :  
                                     <>               <p> {`${v.startDate } - ${v.endDate}  `}  </p>
                                     <div className="destination">{v.workDetail}</div></>

                                              }
                                      
                                   
                                      </div>
                                      
                     
       )}
           


           
           











            </div>
            




            </>
:
<></>}


           
          </div>












         
          <div className="last">









          {educationInfo.length >= 1 ?
                       educationInfo[0].graduationStartDate === '' &&
                       educationInfo[0].graduationEndDate === '' &&
                       educationInfo[0].instituteName === '' &&
                       educationInfo[0].educationDetail==='' &&
                       educationInfo[0].instituteLocation==='' &&
                       educationInfo[0].studyField === '' ? <></> :

          
          
          <div className="first">
 <h2>Education</h2>

 {educationInfo.map((v, i) =>
                                        v.instituteName !== '' ||
                                            v.instituteLocation!=='' ||
                                            v.educationDetail!=='' ||
                                            v.studyField!=='' ?
                                            <div className="details">




                                                                         <p className="degree2">{v.studyField}   </p>

                                                                         <p className="degree">{v.instituteName}</p>
                                                                          <p className="degree"> {v.instituteLocation}   </p>
                                        
                                        
                                    
                                        {v.graduationEndDate === '' && v.graduationStartDate === ''  &&  v.educationDetail === ''? <></> :
                                            v.graduationEndDate === '' ?
                                     <>           <p className="degree" >{`${v.graduationStartDate} To Present`}
                                                 
                                                </p>
                                                 
                                                <p className="degree1" >{ v.educationDetail} </p>
                                                 </>
                                                : <><p className="degree">{`${v.graduationStartDate} To ${v.graduationEndDate}`}
                                                </p>
                                                 <p className="degree1" >{ v.educationDetail}
</p></>
                                                 }
                                         
                                 
                                        
                                        </div>
                                         : <></>)}

         
          







            </div>
         
            
          
            :
            <></>}

    
            
            <div className="second">
            {languages[0] !== '' ?
              <h2>Languages</h2>
              :
              <></>}
              <div className="languages">



              {languages.map((v, i) =>
                                    languages[i] !== '' ?

 
                                    <div> <p className="lang1"> {v}</p> 
                                    <p className="stars"> 
                                      <i className="fa fa-star " />        <i className="fa fa-star " />
                                      <i className="fa fa-star " />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star " />
                                    </p>
                                  </div>
                                  : <></>)}

    
   




               









                </div>








              <div className="references">
              {facts[0].detail!=='' ?
              <h2>Facts</h2>
              :
              <></>}
              {facts.map((v, i) =>
                                v.detail==='Projects'?
                                <div key={i} className="referencepersons">
                                <h4>  {v.detail}</h4>
                                <h5>  {v.value} </h5>
                                
                                </div>
                             :
                             
                             v.detail==='Experience'?
                             <div key={i} className="referencepersons">
                             <h4>  {v.detail}</h4>
                             <h5>  {v.value} </h5>
                             
                             </div>
                            :
                            v.detail==='Customers'?
                            <div key={i} className="referencepersons">
                            <h4>  {v.detail}</h4>
                            <h5>  {v.value} </h5>
                            
                            </div>
                            :
                            <div key={i} className="referencepersons">
                <h4>  {v.detail}</h4>
                <h5>  {v.value} </h5>
                
                </div>)}



             
               
            
              
              
              
              
              </div>












              { pastJob !=='' || presentJob !=='' || futureJob !==''  ?
              <div className="thankyou">
       
              <h2>Goals</h2>
              { pastJob !=='' ?
                  <div className="goals1">

                  <h4>Past Goals</h4>
                  <h5>{pastJob}</h5>
                  
                                  </div>
                  :
                  <></>}
                  { presentJob !=='' ?
                 
                 <div className="goals1">

               <h4>Present Goals</h4>
               <h5>{presentJob}</h5>
               
                               </div>
                  :
                  <></>}
                  { futureJob !=='' ?
                         
               <div className="goals1">

               <h4>Future Goals</h4>
               <h5>{futureJob}</h5>
               
                               </div>
                              
                  :
                  <></>}


         
                




           
              </div>
              :
              <></>}
             
            </div>
           {skills[0].title !=='' || hobbies[0]!==''?
            <div className="third">
            <h2>Skills</h2>
            {skills.map((v, i) => 
                                v.title!==''?
                                  
            <div key={i}>
            <span className="resumefirstall" />   <p className="all">{v.title} </p>
                            <p className="progress123">  <progress id="file"  value={v.value} max={100}> 32% </progress></p>
                         
                            </div>
                    
                            
                                :<></>
                                )}
           
           
           
           
         
           <h2>  Hobbies </h2>

           <div className="width12345">

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
           :
           <></>
          }



           
           
           
          </div>
        </div>
      </div>
    );
  }
  export default ResumeFour;