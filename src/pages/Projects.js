import React from 'react';
import styled from 'styled-components';
import Project from '../components/Project';
import {Carousel} from 'react-responsive-carousel';
import MyLocalLocals from '../img/mylocallocals.png';
import TenCT from "../img/10CT.png";
import Javascript from "../img/logos/javascriptLogo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

  const mllProps = {
    projectTitle: "My Local Locals",
    siteURL: "https://my-local-locals.vercel.app",
    mainLanguage: "Javascript",
    mainLanguageImg: Javascript, // "../img/logos/javascriptLogo.png"
    projectImgSrc: MyLocalLocals, // "../img/mylocallocals.png"
    summary:
      "This browser app allows competitors in platform fighting video games (such as Super Smash Brothers) to search for tournaments local to a requested search location.",
    summaryExtended: "",
    projectDetails: [
      {
        sectionTitle: "Details",
        listItems: [
          `Searches for upcoming tournaments using Google Maps API & Start.GG's GraphQL API`,
          "Display all tournaments from search result in a scrollable list",
          "Filter results by game, date, or distance from searched address",
          "Show details of tournament on selection, including date, location, and all events",
          "Sort tournament search results by either date or distance from searched address",
        ],
      },
    ],
    projectTools: [
      {
        sectionTitle: "Languages",
        listItems: ["Javascript", "CSS", "HTML", "GraphQL"],
      },
      {
        sectionTitle: "Frameworks/Libraries/Interfaces",
        listItems: [
          "React.js",
          "Next.js",
          "ApolloClient",
          "Start.GG API",
          "Google Maps API",
          "Bootstrap",
        ],
      },
      {
        sectionTitle: "Packages/Plugins/Tools",
        listItems: [
          "react-dom",
          "react-geocode",
          "react-scripts",
          "react-datepicker",
          "google-map-react",
          "@react-google-maps/api",
        ],
      },
    ],
    projectChanges: [
      {
        sectionTitle: "Version v0.0.1",
        listItems: ["Added a background"],
      },
    ],
  };

  const tenCTProps = {
    projectTitle: "10CTControllers",
    siteURL: "https://10ctcontrollers.com",
    mainLanguage: "Javascript",
    mainLanguageImg: Javascript,
    projectImgSrc: TenCT,
    summary:
      "A website made for 10CT Controllers, a business that modifies Nintendo Gamecube controllers for competitors in Super Smash Brothers Melee.",
    summaryExtended: "",
    projectDetails: [
      {
        sectionTitle: "Details",
        listItems: [
          `Homepage features a hero section with smooth slideshow carousel highlighting business products`,
          "Fluid transitions between pages using HashRouters from react-router-dom",
          "Features list of modifications that display tooltip descriptions and images on hover",
          "Interactive FAQ page that displays answers to questions on click",
          "Twitter testimonial slideshow autoplays at bottom of webpage",
        ],
      },
    ],
    projectTools: [
      {
        sectionTitle: "Languages",
        listItems: ["Javascript", "CSS", "HTML"],
      },
      {
        sectionTitle: "Frameworks/Libraries/Interfaces",
        listItems: ["React.js", "react-twitter-embed"],
      },
      {
        sectionTitle: "Packages/Plugins/Tools",
        listItems: [
          "react-dom",
          "react-router-dom",
          "react-scripts",
          "react-slideshow-image",
          "react-tooltip",
          "@react-google-maps/api",
        ],
      },
    ],
    projectChanges: [
      {
        sectionTitle: "Version v0.0.1",
        listItems: ["Added a background"],
      },
    ],
  };

  //summaryExpanded: "10CTControllers provides modification & repair services for competitors looking for the"

const ProjectPageStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 9vh;

  .row {
    display: flex;
    flex-direction: row;
  }

  .hidden {
    display: none;
  }

  .projectsPageBody {
    width: 90%;
    margin: 0 auto;
  }

  .pageTitle {
    font-size: 2.5rem;
    color: yellow;
    text-align: center;
    text-shadow: 3px 4px black, 5px 5px rgb(112, 128, 141);
  }

  .projectContainer {
    margin: 0 auto;

    
  @media (min-width: 760px) {
    display:flex;
    flex-direction:row;
  }
  


  .projectCategoryTitle {
    margin: 1.3rem 0.8rem;
    font-size: 1.5rem;
  }

  .projectCardSlideshow {
    margin: 1rem auto;
    overflow: hidden;
  }

  .thumbs-wrapper {
    display: none;
  }

  .control-dots{
    margin-top: 3rem;
  }
`;

function Projects(){
  return (
    <ProjectPageStyle>
      <h1 className="pageTitle">Projects</h1>
      <div className="projectsPageBody">
        <div className="projectContainer">
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
              <div className="projectDetails ff7Style">
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
              <div className="projectDetails">
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
      </div>
    </ProjectPageStyle>
  );
}

export default Projects;