import React, { useState } from "react";
import styled from "styled-components";
import Project from "../components/Project";
import { Carousel } from "react-responsive-carousel";
import MyLocalLocals from "../img/mylocallocals.png";
import TenCT from "../img/10CT.png";
import Javascript from "../img/logos/javascriptLogo.png";
import PropTypes from "prop-types";
import projectProps from "../data/projectProps.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectPageStyle = styled.div`
  width: 100%;

  // Final Fantasy 7 Style Dialogue Boxes by https://codepen.io/Kaizzo/pen/aGWwMM
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
    box-shadow: 1px 1px red, -1px -1px red, 1px -1px red,
      -1px 1px red, 0 -2px #9c9a9c, -2px 0 #7b757b, 0 2px #424542;
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

// const mllProps = {
//   projectTitle: "My Local Locals",
//   siteURL: "https://my-local-locals.vercel.app",
//   mainLanguage: "Javascript",
//   mainLanguageImg: Javascript, // "../img/logos/javascriptLogo.png"
//   projectImgSrc: MyLocalLocals, // "../img/mylocallocals.png"
//   summary:
//     "This browser app allows competitors in platform fighting video games (such as Super Smash Brothers) to search for tournaments local to a requested search location.",
//   summaryExtended: "",
//   projectInfo: {
//     details: [
//       {
//         sectionTitle: "Details",
//         listItems: [
//           `Searches for upcoming tournaments using Google Maps API & Start.GG's GraphQL API`,
//           "Display all tournaments from search result in a scrollable list",
//           "Filter results by game, date, or distance from searched address",
//           "Show details of tournament on selection, including date, location, and all events",
//           "Sort tournament search results by either date or distance from searched address",
//         ],
//       },
//     ],
//     tools: [
//       {
//         sectionTitle: "Languages",
//         listItems: ["Javascript", "CSS", "HTML", "GraphQL"],
//       },
//       {
//         sectionTitle: "Frameworks/Libraries/Interfaces",
//         listItems: [
//           "React.js",
//           "Next.js",
//           "ApolloClient",
//           "Start.GG API",
//           "Google Maps API",
//           "Bootstrap",
//         ],
//       },
//       {
//         sectionTitle: "Packages/Plugins/Tools",
//         listItems: [
//           "react-dom",
//           "react-geocode",
//           "react-scripts",
//           "react-datepicker",
//           "google-map-react",
//           "@react-google-maps/api",
//         ],
//       },
//     ],
//     changes: [
//       {
//         sectionTitle: "Version v0.0.1",
//         listItems: ["Added a background"],
//       },
//     ],
//   },
// };

// const tenCTProps = {
//   projectTitle: "10CTControllers",
//   siteURL: "https://10ctcontrollers.com",
//   mainLanguage: "Javascript",
//   mainLanguageImg: Javascript,
//   projectImgSrc: TenCT,
//   summary:
//     "A portfolio website made for 10CT Controllers, a business that modifies Nintendo Gamecube controllers for competitors in Super Smash Brothers Melee.",
//   summaryExtended: "",
//   projectInfo: {
//       details: [
//       {
//         sectionTitle: "Details",
//         listItems: [
//           `Home hero section with a smooth slideshow carousel, highlighting business products and environment`,
//           "Fluid transitions between pages using HashRouters from react-router-dom",
//           "Displays list of modifications with tooltips that display descriptions and images on hover",
//           "Interactive FAQ page that displays answers to questions on click",
//           "Twitter testimonial slideshow autoplays at bottom of webpage",
//         ],
//       },
//     ],
//     tools: [
//       {
//         sectionTitle: "Languages",
//         listItems: ["Javascript", "CSS", "HTML"],
//       },
//       {
//         sectionTitle: "Frameworks/Libraries/Interfaces",
//         listItems: ["React.js", "react-twitter-embed"],
//       },
//       {
//         sectionTitle: "Packages/Plugins/Tools",
//         listItems: [
//           "react-dom",
//           "react-router-dom",
//           "react-scripts",
//           "react-slideshow-image",
//           "react-tooltip",
//           "@react-google-maps/api",
//         ],
//       },
//     ],
//     changes: [
//       {
//         sectionTitle: "Version v0.0.1",
//         listItems: ["Added a background"],
//       },
//     ]
//   }
// };

//summaryExpanded: "10CTControllers provides modification & repair services for competitors looking for the"

function Projects(props) {
  const [selectedProj, setSelectedProj] = useState(null);
  // const {onProjectButtonSelected} = props;
  const { mllProps, tenCTProps } = projectProps;
  return (
    <ProjectPageStyle>
      <h1 className="pageTitle">Projects</h1>
      <h2 className="subheadtext ff7Style">
        Currently working on revamping this page with more projects and more functionality. <br/> <br/>In the meantime, please take a look at my two most recent works below.
      </h2>
      <div className="projectsContainer">
        {/* <h2 className="projectCategoryTitle">Community Projects</h2> */}

        {/* <Carousel centerMode={true} centerSlidePercentage={80}> */}
        <Project {...mllProps} />
        <Project {...tenCTProps} />
        {/* </Carousel> */}

        {/* <h2 className="projectCategoryTitle">Bootcamp Projects</h2>
          <Carousel>
            <Project />
            <Project />
          </Carousel> */}
        {/* <div className="projectCardSlideshow row">
            <div className="projectCard hidden">
              <div className="projectHeader row">
                <h3 className="projectTitle">My Local Locals</h3>
                <img className="projectLanguages mainLanguage"></img>
              </div>

              <div className="projectImgWrapper">
                <img
                  className="projectImg"
                  src={MyLocalLocals}
                  alt="My Local Locals"
                ></img>
              </div>
              <div className="projectInfo ff7Style">
                <h5 className="projectSummary">
                  This browser app allows platform fighting video game
                  competitors (such as Super Smash Brothers) to search for local
                  tournaments by inputting an address into a searchbar.
                </h5>
              </div>
            </div>
            <div className="projectCard hidden">
              <div className="projectHeader">
                <h3 className="projectTitle">Project Title</h3>
                <img className="projectLanguages mainLanguage"></img>
              </div>
              <img className="projectImg"></img>
              <h6>Project Description</h6>
            </div>
          </div>
          <div className="projectCardExpanded hidden">
            <div className="projectHeader">
              <h3>Project Title</h3>
              <img className="projectLanguages"></img>
            </div>
            <img className="projectImg"></img>
            <div className="projectCardBody">
              <div className="projectInfo">
                <h5>Project Summary</h5>
                <ul className="projectDescription">
                  <li>
                    Searches for upcoming tournaments based on user's address
                    input, using <a href="https://developers.google.com/maps">Google Maps API</a> & <a href="https://start.gg">Start.GG's</a> GraphQL <a href="https://developer.start.gg/docs/intro/">API</a>
                  </li>
                  <li>
                    Display all tournaments from search result in a scrollable
                    list
                  </li>
                  <li>
                    Filter results by game, date, or distance from searched
                    address
                  </li>
                  <li>
                    Show details of an individual tournament when selected,
                    including date, location, and every events relevant to
                    filtered games.
                  </li>
                  <li>
                    Sort tournament search results by either date or distance
                    from searched address.
                  </li>
                </ul>
              </div>
              <div className="projectTools">
                <div className="projectToolsSection">
                  <h4>Frameworks</h4>
                  <ul>
                    <li>Framework</li>
                  </ul>
                </div>
              </div>
              <div className="projectChanges">
                <h4>Version number</h4>
                <ul>
                  <li>Changes</li>
                </ul>
              </div>
            </div>
            <div className="projectFeatures">
              <div className="projectFeatureButton">Details</div>
              <div className="projectFeatureButton">Tools</div>
              <div className="projectFeatureButton">Changes</div>
              <div className="projectFeatureButton">Github</div>
            </div>
          </div> */}
      </div>
    </ProjectPageStyle>
  );
}

export default Projects;
