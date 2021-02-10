import React from 'react'
import ChooseTemplateScreen from '../ChooseTemplateScreen/ChooseTemplateScreen';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas'
import ResumeOne from '../../components/ResumeComponent/ResumeOne/ResumeOne';
import ResumeTwo from '../../components/ResumeComponent/ResumeTwo/ResumeTwo';
import ResumeThree from '../../components/ResumeComponent/ResumeThree/ResumeThree';
import ResumeFour from '../../components/ResumeComponent/ResumeFour/ResumeFour';
import ResumeFive from '../../components/ResumeComponent/ResumeFive/ResumeFive';
import ResumeSix from '../../components/ResumeComponent/ResumeSix/ResumeSix';
import ResumeSeven from '../../components/ResumeComponent/ResumeSeven/ResumeSeven';
import ResumeEight from '../../components/ResumeComponent/ResumeEight/ResumeEight';
import ResumeNine from '../../components/ResumeComponent/ResumeNine/ResumeNine';
import ResumeTen from '../../components/ResumeComponent/ResumeTen/ResumeTen';
import ResumeEleven from '../../components/ResumeComponent/ResumeEleven/ResumeEleven';
import ResumeTwelve from '../../components/ResumeComponent/ResumeTwelve/ResumeTwelve';
import ResumeThirteen from '../../components/ResumeComponent/ResumeThirteen/ResumeThirteen';
import ResumeFourteen from '../../components/ResumeComponent/ResumeFourteen/ResumeFourteen';
import ResumeFifteen from '../../components/ResumeComponent/ResumeFifteen/ResumeFifteen';
import './styles.css';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function GeneratePDFScreen(props) {
  const printDocument = () => {
    const input = document.getElementById('print-content');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG', 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("generatedResume.pdf");
    });
  };

  const choosenResume = useSelector(state => state.choosenResume.choosenResume);
  const history = useHistory();

  useEffect(() => {
    printDocument();
    history.push('/');
  }, []);
    return (
        <div className="generatePDF">
            {/* <button onClick={()=>printDocument()}>Generate PDF</button> */}
                  {choosenResume === "ResumeOne" ?<ResumeOne />
                                    : choosenResume === "ResumeTwo" ?<ResumeTwo />
                                    : choosenResume === "ResumeThree" ?<ResumeThree />
                                    : choosenResume === "ResumeFour" ?<ResumeFour />
                                    : choosenResume === "ResumeFive" ?<ResumeFive />
                                    : choosenResume === "ResumeSix" ?<ResumeSix />
                                    : choosenResume === "ResumeSeven" ?<ResumeSeven />
                                    : choosenResume === "ResumeEight" ?<ResumeEight />
                                    : choosenResume === "ResumeNine" ?<ResumeNine />
                                    : choosenResume === "ResumeTen" ?<ResumeTen />
                                    : choosenResume === "ResumeEleven" ?<ResumeEleven />
                                    : choosenResume === "ResumeTwelve" ?<ResumeTwelve />
                                    : choosenResume === "ResumeThirteen" ?<ResumeThirteen />
                                    : choosenResume === "ResumeFourteen" ?<ResumeFourteen />
                                    : choosenResume === "ResumeFifteen" ?<ResumeFifteen />:<></> }
        </div>
    )
}

export default GeneratePDFScreen
