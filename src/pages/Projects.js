import React, { useState } from "react";
import styled from "styled-components";
import Project from "../components/Project";
import { Carousel } from "react-responsive-carousel";
import MyLocalLocals from "../img/mylocallocals.png";
import TenCT from "../img/10CT.png";
import Javascript from "../img/logos/javascriptLogo.png";
import PropTypes from "prop-types";
import ProjectProps from "../data/projectProps.js";
import ProjectsBackground from "../img/backgrounds/lake.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectPageStyle = styled.div`
  width: 100%;

  .pageBackground {
    position:fixed;
    width: 100%;
    height: 100vh;
    background-image: url(${ProjectsBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index:-1;
  }

  // Final Fantasy 7 UI by https://codepen.io/Kaizzo/pen/aGWwMM
  //modify/adjust font-sizes, border/box-shadow color, margin/padding, etc. per element

  .ff7Style {
    border: solid 1px #424542;
    box-shadow: 1px 1px #e7dfe7, -1px -1px #e7dfe7, 1px -1px #e7dfe7,
      -1px 1px #e7dfe7, 0 -2px #9c9a9c, -2px 0 #7b757b, 0 2px #424542;

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

  .ff7Style *:not(div) {
    color: #eff1ff;
    text-shadow: 2px 2px #212421, 1px 1px #212021;
    font-family: Verdana, sans-serif;
    font-weight: normal;
    margin: 3px 0;
    line-height: 1.3;
    text-decoration: none;
  }

  .pageTitle {
    color: yellow;
    text-shadow: 3px 4px black, 5px 5px rgb(112, 128, 141);
  }

  .projectsContainer {
    width: 90%;
    max-width: 1200px;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
    }
  }

  .projectCategoryTitle {
    margin: 1.3rem 0.8rem;
    font-size: 1.5rem;
  }

  .projectCardSlideshow {
    margin: 1rem auto;
    overflow: hidden;
  }

  .subheadtext {
    font-size: 0.9rem;
    width: 90%;
    min-width: 260px;
    max-width: 420px;
    color: black;
    padding: 1.5rem;
    margin-bottom: 2rem;

    border: solid 1px red;
    box-shadow: 1px 1px red, -1px -1px red, 1px -1px red, -1px 1px red,
      0 -2px #9c9a9c, -2px 0 #7b757b, 0 2px #424542;
    background: #dbaf00;
    background: -moz-linear-gradient(top, #dbaf00 0%, #cea52b 100%);
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, #dbaf00),
      color-stop(100%, #cea52b)
    );
    background: -webkit-linear-gradient(top, #dbaf00 0%, #cea52b 100%);
    background: -o-linear-gradient(top, #dbaf00 0%, #cea52b 100%);
    background: -ms-linear-gradient(top, #dbaf00 0%, #cea52b 100%);
    background: linear-gradient(to bottom, #dbaf00 0%, #cea52b 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dbaf00', endColorstr='#CEA52B',GradientType=0 );
  }
`;



function Projects(props) {
  const [selectedProj, setSelectedProj] = useState(null);
  // const {onProjectButtonSelected} = props;
  const { mllProps, tenCTProps } = ProjectProps;
  return (
    <ProjectPageStyle>
      <div className="pageBackground">
        <div className="overlay"></div>
      </div>
      <h1 className="pageTitle">Projects</h1>
      <h2 className="subheadtext ff7Style">
        Currently working on revamping this page with more projects and more functionality. <br/> <br/>In the meantime, please take a look at my two most recent works below.
      </h2>
      <div className="projectsContainer">

        {/* <Carousel centerMode={true} centerSlidePercentage={80}> */}
        <Project {...mllProps} />
        <Project {...tenCTProps} />
        {/* </Carousel> */}
      </div>
    </ProjectPageStyle>
  );
}

export default Projects;
