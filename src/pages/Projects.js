import React from 'react';
import styled from 'styled-components';
import MyLocalLocals from '../img/mylocallocals.png';


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
    border: 1px solid white;
  }

  .pageTitle {
    font-size: 2.5rem;
    color: yellow;
    text-align: center;
    text-shadow: 3px 4px black, 5px 5px rgb(112, 128, 141);
  }

  .projectContainer {
    margin: 0 auto;
    border: 1px solid yellow;
  }

  .projectCategoryTitle {
    margin: 1.3rem 0.8rem;
    font-size: 1.5rem;
    border: 1px solid purple;
  }

  .projectCardSlideshow {
    margin: 1rem auto;
    border: 1px solid blue;
  }

  .projectCard {
    border: 1px solid pink;
    min-width: 125px;
    width: 70%;
    margin: 0 auto;
    max-height: 40vh;
    
  }

  .projectHeader {
    text-align: center;
    font-size: 1.3rem;
    border: 1px solid red;
  }

  .projectTitle {
    margin: 0.3rem auto;
    font-size: 1rem;
  }

  .projectImgWrapper {

  }

  .projectImg {
    width: 100%;
    height: 100%;
  }

  .projectSummary {
    font-size: 0.76rem;
    margin: 0 auto;
    text-overflow: ellipsis;
    
  }

  .ff7Style {
    border: solid 1px #424542;
    box-shadow: 1px 1px #e7dfe7, -1px -1px #e7dfe7, 1px -1px #e7dfe7,
      -1px 1px #e7dfe7, 0 -2px #9c9a9c, -2px 0 #7b757b, 0 2px #424542;
    margin: 0;
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

  .ff7Style * {
    color: #eff1ff;
    text-shadow: 2px 2px #212421, 1px 1px #212021;
    font-family: Verdana, sans-serif;
    font-weight: normal;
    font-size: 0.55rem;
    margin: 5px 0;
    line-height: 1.3;
    text-decoration: none;
  }
`;

function Projects(){
  return (
    <ProjectPageStyle>
      <h1 className="pageTitle">Projects</h1>
      <div className="projectsPageBody">
        <div className="projectContainer">
          <h2 className="projectCategoryTitle">Category Title</h2>
          <div className="projectCardSlideshow row">
            <div className="projectCard">
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
                    input, using{" "}
                    <a href="https://developers.google.com/maps">
                      Google Maps API
                    </a>{" "}
                    & <a href="https://start.gg">Start.GG's</a> GraphQL{" "}
                    <a href="https://developer.start.gg/docs/intro/">API</a>
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
          </div>
        </div>
      </div>
    </ProjectPageStyle>
  );
}

export default Projects;