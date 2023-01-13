import React from "react";
import styled from "styled-components";
import MyLocalLocals from "../img/mylocallocals.png";
import TenCT from "../img/10CT.png"
import Javascript from "../img/logos/javascriptLogo.png";
import ProjectInfoBox from "./ProjectInfoBox.js";


const ProjectStyle = styled.div`
  width: 100%;
  margin: 3px auto;
  color: white;

  .row {
    display: flex;
    flex-direction: row;
  }

  .hidden {
    display: none;
  }

  .ff7Style {
    border: solid 1px #424542;
    box-shadow: 1px 1px #e7dfe7, -1px -1px #e7dfe7, 1px -1px #e7dfe7,
      -1px 1px #e7dfe7, 0 -2px #9c9a9c, -2px 0 #7b757b, 0 2px #424542;
    margin: 1px auto;
    padding: 0.25rem;

    background: #04009d;
    background: -moz-linear-gradient(top, #04009d 0%, #06004d 100%);
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, #04009d),
      color-stop(100%, #06004d)
    );
    background: -webkit-linear-gradient(top, #04009d 0%, #06004d 100%);
    background: -o-linear-gradient(top, #04009d 0%, #06004d 100%);
    background: -ms-linear-gradient(top, #04009d 0%, #06004d 100%);
    background: linear-gradient(to bottom, #04009d 0%, #06004d 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#04009d', endColorstr='#06004d',GradientType=0 );

    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    border-radius: 7px;
  }

  .ff7Style  * {
    color: #eff1ff;
    text-shadow: 2px 2px #212421, 1px 1px #212021;
    font-family: Verdana, sans-serif;
    font-weight: normal;
    margin: 3px 0;
    line-height: 1.3;
    text-decoration: none;
  }

  .projectCard {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 2.5rem;
    padding: 0;
    max-height: 80vh;
  }

  .projectSection {
    margin: 0rem !important;
  }

  // .projectSection:not(:last-child) {
  //   margin: 0rem !important;
  // }

  .projectHeader {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-size: 1rem;
    padding: 0.5rem;
    justify-content: space-evenly;
    align-items: center;
  }

  .projectTitle {
    font-size: 1rem;
  }
  
  .projectLanguages {
    width: 1.5em !important;
    height: 1.5em !important;
  }

  .projectImgWrapper {
    margin:0;
  }

  .projectImg {
    width: 100%;
    height: 100%;
    margin-bottom: 0;
  }
  
  
  .projectSummary h5{
    font-size: 0.59125rem;
    text-align: left;
    margin: 0.5rem !important;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;

  }

  .projectButtonContainer {
    padding: 0.3rem 0.1rem;
    margin: 0;
  }

  .projectButton {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    margin: 0 0.15rem;
    padding: 0.2rem 0;
    box-shadow: 0.75px 0.75px white, -0.5px -0.5px #c1c1c1;
    border-radius: 0.3rem;
  }

  .projectButton * {
    font-size: 0.55rem;
  }

  .projectDetails{
    display:flex;
    flex-direction:row;
    justify-content:center;
    background: #06004d;
    z-index:-1;
    margin:3px 0 !important;
  }

  .buttonText {
    text-align: center;
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
  const {projectTitle, siteURL, mainLanguage, mainLanguageImg, projectImgSrc, summary, summaryExtended, projectDetails, projectTools, projectChanges } = props;
  return (
    <ProjectStyle>
      <div className="projectCard ff7Style">
        <div className="projectSection projectHeader row ff7Style">
          <h3 className="projectTitle">
            <a href={siteURL} rel="noopener noreferrer" target="_blank">
              {projectTitle}
            </a>
          </h3>
          <img
            className="projectLanguages mainLanguage"
            src={mainLanguageImg}
            alt={mainLanguage}
          />
        </div>

        <div className="projectSection projectImgWrapper">
          <img
            className="projectImg"
            src={projectImgSrc}
            alt={projectTitle}
          ></img>
        </div>
        <div className="projectSection projectSummary ff7Style">
          <h5>{summary}</h5>
        </div>
        <div className="projectSection projectDetails">
          <ProjectInfoBox 
            projectInfo={projectDetails}/>
        </div>
        <div className="ff7Style projectButtonContainer row">
          <div className="projectButton">
            <h4 className="buttonText">Details</h4>
          </div>
          <div className="projectButton">
            <h4 className="buttonText">Tools</h4>
          </div>
          <div className="projectButton">
            <h4 className="buttonText">Changes</h4>
          </div>
          <a
            href="https://www.github.com/kimwoojin211/MyLocalLocals"
            className="projectButton"
            rel="noopener noreferrer"
            target="_blank"
          >
            {/* <div className="projectButton"> */}
            <h4 className="buttonText">Github</h4>
            {/* </div> */}
          </a>
        </div>
      </div>
    </ProjectStyle>
  );
}

export default Project;