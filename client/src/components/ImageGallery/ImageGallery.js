import React, { useState } from 'react';
import './styles.css';
import ImageGallery from 'react-image-gallery';
import ResumeOne from './images/1.png';
import ResumeFour from './images/4.jpg';
import ResumeThree from './images/3.png';

function ImageGalleryComponent() {
//    const images = [
//     {
//         original: ResumeOne,
//         thumbnail: ResumeOne,
//     },
//     {
//         original: ResumeThree,
//         thumbnail: ResumeThree,
//     },
//     {
//         original: ResumeFour,
//         thumbnail: ResumeFour,
//     },
//     ]; 
    const [selectedImage, setSelectedImage] = useState('');
    return (
        <div>
            <div className="row">
                <div className="column">
                    <img src={ResumeOne} alt="Nature"  onClick={()=>setSelectedImage(ResumeOne)} />
                </div>
                <div className="column">
                    <img src={ResumeFour} alt="Snow" onClick={() => setSelectedImage(ResumeFour)} />
                </div>
                <div className="column">
                        <img src={ResumeThree} alt="Mountains" onClick={() => setSelectedImage(ResumeThree)} />
                </div>
                <div className="column">
                    <img src={ResumeOne} alt="Lights" onClick={() => setSelectedImage(ResumeOne)} />
                </div>
            </div>

            <div className="container">
                <span onclick="this.parentElement.style.display='none'" className="closebtn">&times;</span>
                <img id="expandedImg" src={selectedImage} />
                <div id="imgtext"></div>
            </div>
        </div>
    )
}

export default ImageGalleryComponent
