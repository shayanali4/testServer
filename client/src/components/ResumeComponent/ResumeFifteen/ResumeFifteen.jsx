import './style.css'
import { useSelector } from 'react-redux';
import message1 from './images/first.png'
import map1 from './images/map.png'

import phone1 from './images/phone.png'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';







function ResumeFifteen() {
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
    


    <div className="resume15">

            <div id="print-content" className="main">
            <img className="opacity-img" src="/assets/images/Opacity-text.png" alt="" />
                        {firstName !== '' || lastName !== '' || profileSummary !== '' || profession !== '' || skills[0].title !== '' || city !== '' || address !== '' || phone !== '' ?

                <div className="start">



                    {firstName !== '' || lastName !== '' || profession !== '' || email !== '' || address !== '' || phone !== '' ?
                        <div className="container1">
                            {firstName !== '' || lastName !== '' || profession !== '' ?

                                <div className="container11">
                                    <h3> {`${firstName} ${lastName}`}</h3>
                                    <h4 className="b">{profession}</h4>
                                    <hr />




                                </div>
                                :
                                <></>}

                            {email !== '' || address !== '' || phone !== ''}

                            <div className="container22">

                                <div className="email">
                                    <p> <img src={message1} alt="" /></p>  <h5>{email}</h5>
                                </div>



                                <div className="email">
                                    <p> <img src={phone1} alt="" /> </p> <h5>{phone}</h5>
                                </div>


                                <div className="email">
                                    <p><img src={map1} alt="" /> </p> <h5>{address}{city}</h5>
                                </div>




                            </div>









                        </div>
                        :
                        <></>
                    }

                    {profileSummary !== '' ?


                        <div className="container2">
    
                            <p>summary</p>
                            <h5>
                                {profileSummary}
                            </h5>
                        </div>
                        :
                        <></>}

                    <div className="container3">


    
    
                        <div className="first">
                            {socialLinks[0] !== '' ?
                                <>
                                    <p>SOCIAL LINKS</p>

   

   
                                    {socialLinks.map((v, i) =>
                                        socialLinks[i] !== '' ?
                                       
    
                                            <h5>{v}</h5>




                                            : <></>)}


                                </>
                                :
                                <></>}


                            {hobbies[0] !== '' ?

                                <div className="interest">
                                    <p className="brown">Hobbies</p>


                                    {hobbies.map((v, i) =>
                                        v.type === 'Other' ?
                                            <div className="one" key={i}>
                                                <i className="fas fa-star"></i>
                                                <h5>{v.value}</h5>
                                            </div> :
                                            <div className="one">
                                                <i class={v == 'Aviation' ? 'fas fa-plane' :
                                                    v == 'Traveling' ? 'fas fa-route' :
                                                        v == 'Video Games' ? "fas fa-gamepad" :
                                                            v == 'Reading' ? "fas fa-book-reader" :
                                                                v == 'Writing' ? "fas fa-pen-alt" :
                                                                    v == 'Driving' ? "fas fa-car" :
                                                                        v == 'Riding' ? "fas fa-motorcycle" :
                                                                            v == 'Listening' ? "fas fa-headphones" :
                                                                                v == 'Singing' ? "fas fa-microphone" :
                                                                                    v == 'Exercising' ? "fas fa-dumbbell" :
                                                                                        v == 'Swimmimg' ? "fas fa-swimmer" :
                                                                                            v == 'Running' ? "fas fa-running" :
                                                                                                v == 'Chess' ? "fas fa-chess" :
                                                                                                    v == 'Hiking' ? "fas fa-hiking" :
                                                                                                        v == 'Skiing' ? "fas fa-skiing" :
                                                                                                            v == 'Running' ? "fas fa-headphones" :
                                                                                                                v == 'Socializing' ? "fas fa-user-friends" :
                                                                                                                    v == 'Photography' ? "fas fa-camera" :
                                                                                                                        v == 'DJ Playing' ? "fas fa-headphones" : 'fas fa-star'} aria-hidden="true"></i>                                        </div>)}
     



                                </div>
                                :
                                <></>}




                        </div>





                        {workExperience.length >= 1 ?
                            workExperience[0].startDate === '' &&
                                workExperience[0].endDate === '' &&
                                workExperience[0].title === '' &&
                                workExperience[0].workDetail === '' &&
                                workExperience[0].employer === '' ? <></>
                                :
                    

                                <div className="second">

                                    <p>Experience</p>


                                    {workExperience.map((v, i) =>
                                        v.title === '' &&
                                            v.workDetail === '' &&
                                            v.startDate === '' &&
                                            v.endDate === '' &&
                                            v.employer === '' && v.startDate === '' &&
                                            <v className="end"></v> === '' ? <></> :
           
                                            <div className="second11">



                                                <div className="first">
                                                    <h5>{`${v.startDate}-${v.endDate}`}</h5>
                                                </div>
                                                <div className="second">

                                                    <h5>{v.title}</h5>
                                                    <h6>{v.employer}</h6>

                                                    <h6>{v.workDetail}</h6>

    

                                                </div>


                                            </div>)}








                                </div>








                            : <></>}













                        {/* {educationInfo.length >= 1 ?
                       educationInfo[0].graduationStartDate === '' &&
                       educationInfo[0].graduationEndDate === '' &&
                       educationInfo[0].instituteName === '' &&
                       educationInfo[0].educationDetail==='' &&
                       educationInfo[0].instituteLocation==='' &&
                       educationInfo[0].studyField === '' ? <></> :

<> */}

                        {educationInfo.length >= 1 ?
                            educationInfo[0].graduationStartDate === '' &&
                                educationInfo[0].graduationEndDate === '' &&
                                educationInfo[0].instituteName === '' &&
                                educationInfo[0].educationDetail === '' &&
                                educationInfo[0].instituteLocation === '' &&
                                educationInfo[0].studyField === '' ? <></> :
                                <div className="second">

                                    <p>Experience</p>



                                    {educationInfo.map((v, i) =>
                                        v.instituteName !== '' ||
                                            v.instituteLocation !== '' ||
                                            v.educationDetail !== '' ||
                                            v.graduationStartDate !== '' ||
                                            v.graduationEndDate !== '' ||
                                            v.studyField !== '' ?
                                            <div className="second11">



                                                <div className="first">
                                                    <h5>{`${v.graduationStartDate}-${v.graduationEndDate}`}</h5>
                                                </div>
                                                <div className="second">

                                                    <h5>{v.studyField}</h5>
                                                    <h6>{v.instituteName}</h6>

                                                    <h6>{v.instituteLocation}</h6>
                                                    <h6>{v.educationDetail}</h6>

    
                                                </div>


                                            </div> : <></>)}









                                </div>







                            :

                            <></>}


                    </div>
                    {skills[0].title !== '' ?
                        <div className="container4">
                    
                            <p>Skills</p>

                             

                            <div className="circles">


                                {skills.map((v, i) =>
                                    v.title !== '' ?
                                                           
                                        <div key={i} className="loading" >
                                        
                                            <CircularProgressbar value="20" key={i} value={v.value} text={`${v.value}%`} />
                                            <h5>{v.title}</h5>
                                        </div>
                            
                                        : <></>
                                )}


                                    
                                        
        









                            </div>
                            
 
         
         








         
                        </div>
                        :
                        <></>
                    }

                    <div className="container5">
                        <div className="main">
                            {facts[0].detail !== '' ?
    
                                <div className="first">
                                    <p> Facts</p>


                                    {facts.map((v, i) =>
                                        v.detail === 'Projects' ?
                                            <div key={i}>

                                                <h5>{v.detail}</h5>
                                                <h6>{v.value}</h6>
                                
                                
                                            </div>
                                            :
                             
                                            v.detail === 'Experience' ?
                                                <div key={i}>

                                                    <h5>{v.detail}</h5>
                                                    <h6>{v.value}</h6>
                             
                             
                                                </div>
                                                :
                                                v.detail === 'Customers' ?
                                                    <div key={i}>

                                                        <h5>{v.detail}</h5>
                                                        <h6>{v.value}</h6>
                            
                            
                                                    </div>
                                                    :
                                                    <div key={i}>

                                                        <h5>{v.detail}</h5>
                                                        <h6>{v.value}</h6>
                            
                            
                                                    </div>)}

          






            
                                </div>
                                :
                                <></>}







                            {pastJob !== '' || presentJob != '' || futureJob !== '' ?


                                <div className="second">
                                    <p> Goals</p>

                                    {pastJob !== '' ?
                                        <div  >

                                            <h5>Past Goal</h5>
                                            <h6>{pastJob}</h6>
                    
                    
                                        </div>
                                        :
                                        <></>}
                                    {presentJob !== '' ?
                 
                                        <div  >

                                            <h5>Present Goal</h5>
                                            <h6>{presentJob}</h6>
                 
                 
                                        </div>
                                        :
                                        <></>}
                                    {futureJob !== '' ?
                  
                               
                                        <div  >

                                            <h5>Future Goal</h5>
                                            <h6>{futureJob}</h6>
                  
                  
                                        </div>
                                        :
                                        <></>}
         
                            
                                
                            

                                
           




                                </div>
                                :
                                <></>}
                        </div>
           
 
             
             
             
                    </div>







                    {languages[0] !== '' ?

            
                        

                        <div className="container6">
                            <p>Languages</p>
                            <div className="lang">

  
                                {languages.map((v, i) =>
                                    languages[i] !== '' ?

                                        <div >
                                            <h4>{v}</h4>
                                        </div>


                                        : <></>)}










                            </div>


                        </div>
                        :
                        <></>}






                </div>
                :
            <></>}
            </div>
            

</div>


)
}
export default ResumeFifteen;