import React, {useState} from "react";
import styled from "styled-components";
import MyLocalLocals from "../img/mylocallocals.png";
import TenCT from "../img/10CT.png"
import Javascript from "../img/logos/javascriptLogo.png";
import InfoBox from "./InfoBox.js";


const ProjectStyle = styled.div`
  .projectCard {
    width: 90%;
    margin-bottom: 2.5rem !important;
    padding: 0;
    max-width: 420px;  

    @media (min-width: 375px) {
      font-size: 1.27rem;
    }
    
    @media (min-width: 768px) {
      max-width: 540px;
    }

  .projectSection {

  }

  // .projectSection:not(:last-child) {
  //   margin: 0rem !important;
  // }

  .projectHeader {
    width: 100%;
    padding: 0.5rem;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
    font-size: 1.16125rem;
      
    @media (min-width: 375px) {
      font-size: 1.27rem;
    }
  }

  .projectTitle {
    ;
  }
  
  .projectLanguages {
    width: 1.4em !important;
    height: 1.4em !important;
  }

  .projectImgWrapper {
    margin: 0 !important;
  }

  .projectImg {
    width: 100%;
    height: 100%;
    margin-bottom: 0 !important;
  }
  
  .projectSummary{
    height: 5.5rem;
    display: flex;
    align-items: center;


  }

  .projectSummary h5{
    font-size: 0.67rem;
    text-align: left;
    padding: 1rem;
    overflow: hidden;
    // display: -webkit-box;
    // -webkit-line-clamp: 6;
    // -webkit-box-orient: vertical;

    @media (min-width: 375px) {
      font-size: 0.72rem;
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  
  .projectInfoBox{
    // width:100%;
    background: #06004d;
    margin: 3px 0;
    padding: 1px 0;
  }

  .projectButtonContainer {
    display: flex;
    padding: 0.4rem 0.2rem;
    margin-bottom: 0px;
    justify-content: space-evenly;
  }

  .projectButton {
    text-align: center;
    max-width: 22%;
    padding: 0.25rem !important;
    margin: 0 5px !important;
    border-radius: 0.3rem;
    box-shadow: 0.75px 0.75px white, -0.5px -0.5px #c1c1c1;
    font-size: 0.58rem !important;
    cursor: pointer;
    flex-grow:1;

    @media (min-width: 375px) {
      font-size: 0.68rem !important;
      box-shadow: 0.8px 0.8px white, -0.8px -0.8px #c1c1c1;
    }
    
    @media (min-width: 768px) {
      box-shadow: 1px 1px white, -1px -1px #c1c1c1;
      padding: 0.35rem !important;
      max-width: 20%;
    }
  }

  .expanded{
    width=100%;
  }
`;


  // const mllProps = {
  //   projectTitle: "My Local Locals",
  //   siteURL: "https://my-local-locals.vercel.app",
  //   mainLanguage: "Javascript",
  //   mainLanguageImg: Javascript, // "../img/logos/javascriptLogo.png"
  //   projectImgSrc: MyLocalLocals, // "../img/mylocallocals.png"
  //   summary:
  //     "This browser app allows gamers who compete in platform fightingvideo games (such as Super Smash Brothers) to search for tournaments local to a requested search location.",
  // };
  // const tenCTProps = {
  //   projectTitle: "10CTControllers",
  //   siteURL: "https://10ctcontrollers.com",
  //   mainLanguage: "Javascript",
  //   mainLanguageImg: Javascript,
  //   projectImgSrc: TenCT,
  //   summary: "A website made for 10CTControllers, a Nintendo Gamecube controller modification business in the competitive Smash Brothers Melee community.",
  // };
  // //summaryExpanded: "10CTControllers provides modification & repair services for competitors looking for the"


  
function Project(props){

  // const variables = ["projectTitle", "siteURL", "mainLanguage", "mainLanguageImage", "projectImgSrc", "summary"];
  // let props = mllProps;
  const {projectTitle, siteURL, mainLanguage, mainLanguageImg, projectImgSrc, summary, summaryExtended, projectInfo, projectTools, projectChanges } = props;

  const [selectedInfoButton, setSelectedInfoButton] = useState("details");

  const handleClickProjectButton = (buttonText) => {
    setSelectedInfoButton(buttonText.toLowerCase());
  };


  return (
    <ProjectStyle>
      <div className="projectCard ff7Style">
        <a href={siteURL} rel="noopener noreferrer" target="_blank">
          <div className="projectHeader projectSection ff7Style row">
            <h3 className="projectTitle">{projectTitle}</h3>
            <img
              className="projectLanguages mainLanguage"
              src={mainLanguageImg}
              alt={mainLanguage}
            />
          </div>
        </a>

        <div className="projectImgWrapper projectSection">
          <a href={siteURL} rel="noopener noreferrer" target="_blank">
            <img
              className="projectImg"
              src={projectImgSrc}
              alt={projectTitle}
            />
          </a>
        </div>
        <div className="projectSection projectSummary ff7Style">
          <h5>{summary}</h5>
        </div>
        <div className="projectSection projectInfoBox">
          <InfoBox projectInfo={projectInfo[selectedInfoButton]} />
        </div>
        <div className="ff7Style projectButtonContainer row">
          <div
            className="projectButton"
            onClick={(e) => handleClickProjectButton(e.target.innerText)}
          >
            <h4 className="buttonText">Details</h4>
          </div>
          <div
            className="projectButton"
            onClick={(e) => handleClickProjectButton(e.target.innerText)}
          >
            <h4 className="buttonText">Tools</h4>
          </div>
          <div
            className="projectButton"
            onClick={(e) => handleClickProjectButton(e.target.innerText)}
          >
            <h4 className="buttonText">Changes</h4>
          </div>
          <a
            href="https://www.github.com/kimwoojin211/MyLocalLocals"
            className="projectButton"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h4 className="buttonText">Github</h4>
          </a>
        </div>
      </div>
    </ProjectStyle>
  );
}

export default Project;