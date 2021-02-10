import React, { useEffect, useState } from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProfilePhoto, getGoalsInfo, getPersonalInfo, getJobInfo, getEducationInfo, getSkillsInfo,getSocialLinksInfo, getLanguagesInfo, getFactsInfo, getWorkExperienceInfo, getHobbiesInfo, getProfileSumary } from '../../actions/resumeDetailsActions';
import { useHistory } from 'react-router-dom';

function DetailsForm() {

  // General Initialisations
  const dispatch = useDispatch();
  const [inputIndex, setInputIndex] = useState(0);

  // Personal Info
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profession, setProfession] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [personalInfo, setPersonalInfo] = useState({
    firstName, lastName, profession, city, address, phone, email
  });
  
  // Education Details
  const educationObj = {
    instituteName: '',
    instituteLocation: '',
    educationDetail: '',
    studyField: '',
    studyStatus: false,
    graduationStartDate: '',
    graduationEndDate: '',
  };
  const [educationDetailsList, setEducationDetailsList] = useState([educationObj]);

  const updateInstituteName = (index,value) => {
    let updatedList = [...educationDetailsList];
    updatedList[index].instituteName = value;
    setEducationDetailsList(updatedList);
  }
  const updateInstituteLocation = (index,value) => {
    let updatedList = [...educationDetailsList];
    updatedList[index].instituteLocation = value;
    setEducationDetailsList(updatedList);
  }
  const updateStudyField = (index,value) => {
    let updatedList = [...educationDetailsList];
    updatedList[index].studyField = value;
    setEducationDetailsList(updatedList);
  }
  const updateEducationDetail = (index,value) => {
    let updatedList = [...educationDetailsList];
    updatedList[index].educationDetail = value;
    setEducationDetailsList(updatedList);
  }
  const updateGraduationStartDate = (index,value) => {
    let updatedList = [...educationDetailsList];
    updatedList[index].graduationStartDate = value.slice(0,4);
    setEducationDetailsList(updatedList);
  }
  const updateGraduationEndDate = (index,value) => {
    let updatedList = [...educationDetailsList];
    updatedList[index].graduationEndDate = value.slice(0,4);
    setEducationDetailsList(updatedList);
  }
  const updateStudyStatus = (index, value) => {
    let updatedList = [...educationDetailsList];
    updatedList[index].studyStatus = value;
    updatedList[index].graduationEndDate = '';
    setEducationDetailsList(updatedList);    
  }
  const deleteEducationDetails = (index) => {
    let updatedList = [...educationDetailsList];
    let removedItem = updatedList.splice(index, 1);
    updatedList.filter(x => x !== removedItem[0]);
    setEducationDetailsList(updatedList);    
  }
  const [educationInfo, setEducationInfo] = useState({
    educationDetailsList
  });

  // Most Recent Job
  const [job, setJob] = useState('');
  const [employer, setEmployer] = useState('');
  const [jobCity, setJobCity] = useState('');
  const [jobStartDate, setJobStartDate] = useState('');
  const [jobEndDate, setJobEndDate] = useState('');
  const [stillWorking, setStillWorking] = useState(false);
  const [jobInfo, setJobInfo] = useState({
    job, employer, jobCity, jobStartDate, jobEndDate, stillWorking
  });

  // Skills
  const skillsObj = {title:'',value:'50'};
  const [skillsList, setSkillsList] = useState([skillsObj]);
  const updateSkillsTitle = (index,value) => {
    let updatedList = [...skillsList];
    updatedList[index].title = value;
    setSkillsList(updatedList);
  }
    const updateSkillsValue = (index,value) => {
    let updatedList = [...skillsList];
    updatedList[index].value = value;
    setSkillsList(updatedList);
  }
  const deleteSkills = (index) => {
    let updatedList = [...skillsList];
    let removedItem = updatedList.splice(index, 1);
    updatedList.filter(x => x !== removedItem[0]);
    setSkillsList(updatedList);
  }
  const [skillsInfo, setSkillsInfo] = useState({
    skillsList
  });

  // Social Links
  const [socialLinksList, setSocialLinksList] = useState(["",""]);
  const updateSocialLinks = (index,value) => {
    let updatedList = [...socialLinksList];
    updatedList[index] = value;
    setSocialLinksList(updatedList);
  }
  const deleteSocialLinks = (index) => {
    let updatedList = [...socialLinksList];
    let removedItem = updatedList.splice(index, 1);
    updatedList.filter(x => x !== removedItem[0]);
    setSocialLinksList(updatedList);
  }
  const [socialLinksInfo, setSocialLinksInfo] = useState({
    socialLinksList
  });

    // Languages
  const [languagesList, setLanguagesList] = useState([""]);
  const updateLanguages = (index,value) => {
    let updatedList = [...languagesList];
    updatedList[index] = value;
    setLanguagesList(updatedList);
  }
  const deleteLanguages = (index) => {
    let updatedList = [...languagesList];
    let removedItem = updatedList.splice(index, 1);
    updatedList.filter(x => x !== removedItem[0]);
    setLanguagesList(updatedList);
  }
  const [languagesInfo, setLanguagesInfo] = useState({
    languagesList
  });

  // Facts
  const factsObj={type:'',detail:'',value:''}
  const [factsList, setFactsList] = useState([factsObj]);
  const updateFactsType = (index, type, value) => {
    let updatedList = [...factsList];
    if (value==='Other') {
      updatedList[index].type = value;      
      updatedList[index].detail = value;      
    }else if (type === 'Other') {
      updatedList[index].type = type;      
      updatedList[index].detail = value;
    } else {
      updatedList[index].type = type;      
      updatedList[index].detail = value;      
    }
    setFactsList(updatedList);
  }
  const updateFactsValue = (index,type,value) => {
    let updatedList = [...factsList];
    updatedList[index].value = value;
    setFactsList(updatedList);
  }
  const deleteFacts = (index) => {
    let updatedList = [...factsList];
    let removedItem = updatedList.splice(index, 1);
    updatedList.filter(x => x !== removedItem[0]);
    setFactsList(updatedList);
  }
  const [factsInfo, setFactsInfo] = useState({
    factsList
  });

  //Professional Goals
  const [pastJob, setPastJob] = useState('');
  const [presentJob, setPresentJob] = useState('');
  const [futureJob, setFutureJob] = useState('');
  const [goalsInfo, setGoalsInfo] = useState({
    pastJob,presentJob,futureJob
  });
  const [goalsStatus, setGoalsStatus] = useState(true);
  
  // Work Experience
  const workExperienceObj = {
    title: '',
    employer: '',
    workDetail:'',
    startDate: '',
    endDate:''
  };
  const [workExperienceList, setWorkExperienceList] = useState([
    workExperienceObj
  ]);
  const updateWorkTitle = (index,value) => {
    let updatedList = [...workExperienceList];
    updatedList[index].title = value;
    setWorkExperienceList(updatedList);
  }
  const updateEmployer = (index,value) => {
    let updatedList = [...workExperienceList];
    updatedList[index].employer = value;
    setWorkExperienceList(updatedList);
  }  
  const updateWorkDetail = (index,value) => {
    let updatedList = [...workExperienceList];
    updatedList[index].workDetail = value;
    setWorkExperienceList(updatedList);
  }
  const updateWorkStartDate = (index, value) => {
    
    let updatedList = [...workExperienceList];
    updatedList[index].startDate = value.slice(0,4);
    setWorkExperienceList(updatedList);
  }
  const updateWorkEndDate = (index,value) => {
    let updatedList = [...workExperienceList];
    updatedList[index].endDate = value.slice(0,4);
    setWorkExperienceList(updatedList);
  }
  const updateWorkStatus = (index, value) => {
    let updatedList = [...workExperienceList];
    updatedList[index].workStatus = value;
    updatedList[index].endDate = '';
    setWorkExperienceList(updatedList);    
  }  
  const deleteWorkExperience = (index) => {
    let updatedList = [...workExperienceList];
    let removedItem = updatedList.splice(index, 1);
    updatedList.filter(x => x !== removedItem[0]);
    setWorkExperienceList(updatedList);    
  }
  const [workExperienceInfo, setWorkExperienceInfo] = useState({
    workExperienceList
  });
  
  // Hobbies
  const [hobbiesList, setHobbiesList] = useState([""]);
  const updateHobbies = (index,type, value) => {
    let updatedList = [...hobbiesList];
    if (value === 'Other') {
      updatedList[index] = {
        type: value,
      };      
    } else if(type==='Other'){
      updatedList[index].value = value;    
    }else {
    updatedList[index] = value;      
    }
    setHobbiesList(updatedList);
  }
  const deleteHobbies = (index) => {
    let updatedList = [...hobbiesList];
    let removedItem = updatedList.splice(index, 1);
    updatedList.filter(x => x !== removedItem[0]);
    setHobbiesList(updatedList);
  }
  const [hobbiesInfo, setHobbiesInfo] = useState({
    hobbiesList
  });
  
  // Profile Summary
  const [profileSummary, setProfileSummary] = useState('');
  useEffect(() => {
    dispatch(getProfileSumary(profileSummary));
  }, [dispatch,profileSummary]);

  // Use Effect for personalInfo
  useEffect(() => {
    setPersonalInfo({
        firstName, lastName, profession, city, address, phone, email
    });
  }, [firstName, lastName, profession, city, address, phone, email]);

  useEffect(() => {
    dispatch(getPersonalInfo(personalInfo));
  }, [dispatch,personalInfo]);

  // Use Effect for Goals
  useEffect(() => {
    setGoalsInfo({
        pastJob,presentJob,futureJob
    });
  }, [pastJob,presentJob,futureJob]);

  useEffect(() => {
    dispatch(getGoalsInfo(goalsInfo));
  }, [dispatch,goalsInfo]);

  // Use Effect for Education Details
  useEffect(() => {
    setEducationInfo({
      educationDetailsList
    });
  }, [educationDetailsList]);

  useEffect(() => {
    dispatch(getEducationInfo(educationInfo));
  }, [dispatch,educationInfo]);

  // Use Effect for RecentJobs
  useEffect(() => {
    setJobInfo({
        job, employer, jobCity, jobStartDate, jobEndDate, stillWorking
    });
  }, [job, employer, jobCity, jobStartDate, jobEndDate, stillWorking]);

  useEffect(() => {
    dispatch(getJobInfo(jobInfo));
  }, [dispatch,jobInfo]);
  
  // Use Effect for Skills
  useEffect(() => {
    setSkillsInfo({
        skillsList
      },
    );
  }, [skillsList]);

  useEffect(() => {
    dispatch(getSkillsInfo(skillsInfo));
  }, [dispatch,skillsInfo]);

  // Use Effect for Social Links
  useEffect(() => {
    setSocialLinksInfo({
        socialLinksList
      },
    );
  }, [socialLinksList]);

  useEffect(() => {
    dispatch(getSocialLinksInfo(socialLinksInfo));
  }, [dispatch, socialLinksInfo]);
  
  // Use Effect for Languages
  useEffect(() => {
    setLanguagesInfo({
        languagesList
      },
    );
  }, [languagesList]);

  useEffect(() => {
    dispatch(getLanguagesInfo(languagesInfo));
  }, [dispatch,languagesInfo]);


  // Use Effect for Professional Skills
  useEffect(() => {
    setFactsInfo({
        factsList
      },
    );
    // console.log("skills object", skillsInfo)
  }, [factsList]);

  useEffect(() => {
    dispatch(getFactsInfo(factsInfo));
  }, [dispatch,factsInfo]);

  // Use Effect for Work Experience
  useEffect(() => {
    setWorkExperienceInfo({
        workExperienceList
      },
    );
  }, [workExperienceList]);
  useEffect(() => {
    dispatch(getWorkExperienceInfo(workExperienceInfo));
  }, [dispatch, workExperienceInfo]);

  // Use Effect for Hobbies
  useEffect(() => {
    setHobbiesInfo({
        hobbiesList
      },
    );
    console.log('hobbies list==>',hobbiesList)
  }, [hobbiesList]);

  useEffect(() => {
    dispatch(getHobbiesInfo(hobbiesInfo));
  }, [dispatch,hobbiesInfo]);
  
  const [profilePhoto, setProfilePhoto] = useState(null);
    useEffect(() => {
    dispatch(getProfilePhoto(profilePhoto));

    }, [dispatch, profilePhoto]);
  

  let history = useHistory();
  const resumeDetails = useSelector(state => state.resumeDetails);

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem('resumeDetails', JSON.stringify(resumeDetails))
    history.push('/signin');
  };
  return (
    <div className="details-form">
      <div className='head'>
        <div className="text">
          <h3>Whats the best way for employers to contact you ?</h3>
          <p>Fields With the <span>*</span> are mandatory</p>
        </div>
        <div className="upload-photo">
          <label for="profile-photo">
            <i class="fas fa-image"></i>
          </label>
          <span class="btn-file">
          Choose Profile Photo<input type="file" accept="image/*" onChange={(e)=>setProfilePhoto(URL.createObjectURL(e.target.files[0]))} />
      </span>
        </div> 
      </div>
      <form action="" onSubmit={submitHandler}>
            <div className="basic">
            <div>
              <h4> Basic Information</h4>
            </div>
              {firstName === '' ?<span className="first">*</span> : <></>}
              {lastName === '' ?<span className="second">*</span> : <></>}
              {profession === '' ?<span className="third">*</span> : <></>}
              {address === '' ?<span className="fifth">*</span> : <></>}
              {phone === '' ?<span className="sixth">*</span> : <></>}
              {email === '' ?<span className="seventh">*</span> : <></>}
              <input onChange={e=>setFirstName(e.target.value)}
              type="text" placeholder="First Name" />
            <input onChange={e=>setLastName(e.target.value)}
             type="text" placeholder="Last Name" />
            <input onChange={e=>setProfession(e.target.value)}
             type="text" placeholder="Profession" />
            <input onChange={e=>setCity(e.target.value)}
             type="text" placeholder="City" />
            <input onChange={e => setAddress(e.target.value)}
             type="text" placeholder="Your Home Address" />
            <input onChange={e=>setPhone(e.target.value)}
             type="text" placeholder="Phone Number" />
            <input onChange={e=>setEmail(e.target.value)}
              type="text" placeholder="Email Address" />
          </div>
          <div className="social-links">
            <div>
              <h4>Social Links</h4>
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
            {socialLinksList.map((v, i) => 
            <div onMouseOver={()=>setInputIndex(i+4)} onMouseOut={()=>setInputIndex(0)}
              className="min-div"  key={i} >
              <i class={`fa fa-times ${inputIndex === i+4 ? "d-vis" : ""}`}
                onClick={()=>deleteSocialLinks(i)} aria-hidden="true"></i>
              <input type="text"
                onChange={(e)=>updateSocialLinks(i,e.target.value)}
                  placeholder="Social Link / Website" />
              </div>
              )} 
              {socialLinksList.length===0?(
                <button type="button" onClick={() => setSocialLinksList([...socialLinksList, ""])}
                >Add Social Links <i className=" fa fa-plus" /></button>                   
              ):(
                <button type="button" onClick={() => setSocialLinksList([...socialLinksList, ""])}
                >Add More <i className=" fa fa-plus" /></button>                   
              )} 
        </div>
        <div className="social-links">
            <div>
              <h4>Languages</h4>
            </div>
            {languagesList.map((v, i) => 
            <div onMouseOver={()=>setInputIndex(i+200)} onMouseOut={()=>setInputIndex(0)}
              className="min-div"  key={i} >
              <i class={`fa fa-times ${inputIndex === i+200 ? "d-vis" : ""}`}
                onClick={()=>deleteLanguages(i)} aria-hidden="true"></i>
              <input type="text"
                onChange={(e)=>updateLanguages(i,e.target.value)}
                  placeholder="Add Language " />
              </div>
              )} 
              {languagesList.length===0?(
                <button type="button" onClick={() => setLanguagesList([...languagesList, ""])}
                >Add Languages <i className=" fa fa-plus" /></button>                   
              ):(
                <button type="button" onClick={() => setLanguagesList([...languagesList, ""])}
                >Add More <i className=" fa fa-plus" /></button>                   
              )} 
          </div>
          <div className="education">
            <div>
              <h4>Education Details</h4>
            </div>
            <div className="main-div">
            {educationDetailsList.map((v, i) => 
              <div onMouseOver={()=>setInputIndex(i+90)} onMouseOut={()=>setInputIndex(0)}
                className="edu-div" key={i} >
                {i === 0 ? (
                  <></>
                ): (
                <i class={`fa fa-times ${inputIndex === i+90 ? "d-vis" : ""}`}
                  onClick={()=>deleteEducationDetails(i)} aria-hidden="true"></i>                    
                  )}
                {educationDetailsList[i].instituteName === '' ? <span className="first">*</span> : <></>}
                {educationDetailsList[i].studyField === '' ? <span className="third">*</span> : <></>}
                  <input onChange={(e)=>updateInstituteName(i,e.target.value)}
                    type="text" placeholder="Institute Name" />
                  <input onChange={(e)=>updateInstituteLocation(i,e.target.value)}
                    type="text" placeholder="Institute Location" />
                  <input onChange={(e)=>updateStudyField(i,e.target.value)}
                  type="text" placeholder="Field Of Study" />
                  <textarea cols="60"
                    name="education-detail" onChange={(e)=>updateEducationDetail(i,e.target.value)} placeholder="Write about your educational experience..">
                  </textarea>
                  <input onChange={(e)=>updateGraduationStartDate(i,e.target.value)}
                    type="month" placeholder="Start Date :" />
                    {educationDetailsList[i].studyStatus?(<></>):(
                    <input onChange={(e)=>updateGraduationEndDate(i,e.target.value)}
                      type="month" placeholder="End Date :" />                     
                      )}
                  <div className="check">
                    <input onChange={e=>updateStudyStatus(i,e.target.checked)}
                    id={`study${i}`} name="study" type="checkbox" />
                    <label htmlFor={`study${i}`}>I currently study here</label>
                  </div>
              </div>

              )} 
              </div> 
              {educationDetailsList.length === 0 ? (
                <button type="button" onClick={() => setEducationDetailsList([...educationDetailsList, educationObj])}
                >Add Education Details <i className=" fa fa-plus" /></button>
              ) :educationDetailsList.length<=2? (
                  <button type="button" onClick={() => setEducationDetailsList([...educationDetailsList, educationObj])}
                  >Add More <i className=" fa fa-plus" /></button>
                ):<button type="button" disabled className='disabled' onClick={() => setEducationDetailsList([...educationDetailsList, educationObj])}
                  ><del>Add More</del> <i className=" fa fa-plus" /></button>
            }
        </div>
       
          <div className="work-experience">
            <div>
              <h4>Work Experience</h4>
          </div>
          <div className="main-div">
            {workExperienceList.map((v, i) =>
            <div onMouseOver={()=>setInputIndex(i+45)} onMouseOut={()=>setInputIndex(0)}
                className="edu-div" key={i} >
            <div className="work-div">
                {workExperienceList[i].title === '' ? <span className="first">*</span> : <></>}
              <i class={`fa work-x fa-times ${inputIndex === i+45 ? "d-vis" : ""}`}
                onClick={()=>deleteWorkExperience(i)} aria-hidden="true"></i>
              <input className="work-title" type="text"
                onChange={(e)=>updateWorkTitle(i,e.target.value)}
                  placeholder="Work Title" />
              <input className="work-title" type="text"
                onChange={(e)=>updateEmployer(i,e.target.value)}
                    placeholder="Company Name" />
              <textarea cols="60"
                    name="work-detail" onChange={(e) => updateWorkDetail(i, e.target.value)}
                    placeholder="Write about your work experience..">
                  </textarea>
              <input onChange={(e) => updateWorkStartDate(i, e.target.value)}
                type="month" placeholder="Start Date" />  
              {!workExperienceList[i].workStatus?<input onChange={(e) => updateWorkEndDate(i, e.target.value)}
                type="month" placeholder="End Date" />:<></>}
                
              <div className="check">
                    <input onChange={e=>updateWorkStatus(i,e.target.checked)}
                    id={`work${i}`} name="work" type="checkbox" />
                    <label htmlFor={`work${i}`}>I currently work here</label>
                  </div>
                  </div>
              </div>
            )}  
            </div>
            {workExperienceList.length===0?(
              <button type="button" onClick={() => setWorkExperienceList([...workExperienceList, workExperienceObj])}
              >Add Work Experience <i className=" fa fa-plus" /></button>              
            ):workExperienceList.length<=2?(
              <button type="button" onClick={() => setWorkExperienceList([...workExperienceList, workExperienceObj])}
              >Add More <i className=" fa fa-plus" /></button>              
            ):<button type="button" disabled className='disabled' 
                  ><del>Add More</del> <i className=" fa fa-plus" /></button>}
        </div>
        <div className="skills">
            <div>
              <h4>Skills</h4>   
            </div>          
          {skillsList.map((v, i) => 
            <div onMouseOver={()=>setInputIndex(i+100)} onMouseOut={()=>setInputIndex(0)}
              className="min-div" key={i} >
              {skillsList.length > 1 ?(
                <i class={`fa fa-times ${inputIndex === i + 100 ? "d-vis" : ""}`}
                  onClick={() => deleteSkills(i)} aria-hidden="true"></i>):<></>}
              <input type="text" key={i}
              onChange={(e)=>updateSkillsTitle(i,e.target.value)}
                placeholder="Your Skills" />
              <input type="range" name="vol" min="0" max="100"
                onChange={(e) => updateSkillsValue(i, e.target.value)} />
            </div>
            )}  
            {skillsList.length===0?(
              <button type="button" onClick={() => setSkillsList([...skillsList,skillsObj])}
              >Add Skills <i className=" fa fa-plus" /></button>              
            ):(
              <button type="button" onClick={() => setSkillsList([...skillsList, skillsObj])}
              >Add More <i className=" fa fa-plus" /></button>              
            )}
          </div>
        <div className="professional-skills">
            <div>
              <h4>Facts</h4>
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
                    
            {factsList.map((v, i) => <>
            <div onMouseOver={()=>setInputIndex(i+30)} onMouseOut={()=>setInputIndex(0)}
              className="min-div"  key={i} >
              <i class={`fa fa-times ${inputIndex === i+30 ? "d-vis" : ""}`}
                  onClick={() => deleteFacts(i)} aria-hidden="true"></i>
                
              <select onChange={e=>updateFactsType(i,'Chosen',e.target.value)} key={i} name="hobbies">
                <option default>How many :</option>
                <option value="Experience">Years of experience you have ?</option>
                <option value="Projects">Projects you have done ?</option>
                <option value="Customers">Customers you have ?</option>
                <option value="Other">Other (Please Specify)</option>
              </select>
              
              </div>
              {factsList[i].type==='Other'?
              <input onChange={e=>updateFactsType(i,'Other',e.target.value)} className='other-hobby'
                type='text' placeholder='Enter Fact...' />:<></>}
              <input onChange={e=>updateFactsValue(i,'Chosen',e.target.value)} className='other-hobby'
                type='text' placeholder='Enter value here...' /></>
              
              )}
              {factsList.length===0?(
                <button type="button" onClick={() => setFactsList([...factsList, factsObj])}
                >Add Professional Skill <i className=" fa fa-plus" /></button>                  
              ):(
                <button type="button" onClick={() => setFactsList([...factsList, factsObj])}
                >Add More <i className=" fa fa-plus" /></button>                  
            )}
        </div>
        <div className="professional-skills goals">
            <div>
              <h4>Goals</h4>
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          {goalsStatus ?
            <div onMouseOver={() => setInputIndex(195)} onMouseOut={() => setInputIndex(0)}
              className="min-div" >
              <i class={`fa fa-times ${inputIndex === 195 ? "d-vis" : ""}`}
               onClick={()=>setGoalsStatus(false)} aria-hidden="true"></i>
            
              <input onChange={e => setPastJob(e.target.value)} className='other-hobby'
                type='text' placeholder='Your past job title....' />
            
              <input onChange={e => setPresentJob(e.target.value)} className='other-hobby'
                type='text' placeholder='Your present job title....' />
            
              <input onChange={e => setFutureJob(e.target.value)} className='other-hobby'
                type='text' placeholder='Your future job title....' />
            </div>
            : <button type="button" onClick={() => setGoalsStatus(true)}
            >Add Professional Goal <i className=" fa fa-plus" />
            </button>}
          </div>
          <div className="hobbies">
            <div>
              <h4>Hobbies</h4>
            </div>
          {hobbiesList.map((v, i) =>
            <>
            <div onMouseOver={()=>setInputIndex(i+60)} onMouseOut={()=>setInputIndex(0)}
                className="min-div"  key={i} >
                <i class={`fa fa-times ${inputIndex === i+60 ? "d-vis" : ""}`}
                  onClick={()=>deleteHobbies(i)} aria-hidden="true"></i>
              <select onChange={e=>updateHobbies(i,'choosen',e.target.value)} key={i} name="hobbies">
                <option default>Select your Interests :</option>
                <option value="Aviation">Aviation</option>
                <option value="Traveling">Traveling</option>
                <option value="Video Games">Video Games</option>
                <option value="Reading">Reading</option>
                <option value="Writing">Writing</option>
                <option value="Listening">Listening</option>
                <option value="Singing">Singing</option>
                <option value="Driving">Driving</option>
                <option value="Riding">Riding</option>
                <option value="Swimming">Swimming</option>
                <option value="Photography">Photography</option>
                <option value="Socializing">Socializing</option>
                <option value="Exercising">Exercising</option>
                <option value="Running">Running</option>
                <option value="Chess">Chess</option>
                <option value="Hiking">Hiking</option>
                <option value="Skiing">Skiing</option>
                <option value="Running">Running</option>
                <option value="Other">Other (Please Specify)</option>
              </select>
            </div>
              {hobbiesList[i].type === 'Other' ?
                <input onChange={e=>updateHobbies(i,'Other',e.target.value)} className='other-hobby'
                type='text' placeholder='Please Specify..' />:<></>}
              
            </>
             )}
            {hobbiesList.length===0?(
              <button type="button" onClick={() => setHobbiesList([...hobbiesList, ""])}
              >Add Hobby <i className=" fa fa-plus" /></button>
              ):(
              <button type="button" onClick={() => setHobbiesList([...hobbiesList, ""])}
              >Add More <i className=" fa fa-plus" /></button>                
              )}
          </div>                
          <div className='profile-summary'>
            <div>
              <h4>Profile Summary</h4>
            </div>
            <textarea cols="60"
              name="brief-history" onChange={(e)=>setProfileSummary(e.target.value)} placeholder="Describe yourself briefly....">
              </textarea>
            </div>
          <div className='submmit-div'>
            <button className="submit" type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
}

export default DetailsForm;
