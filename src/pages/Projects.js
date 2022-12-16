import React from 'react';
import styled from 'styled-components';
import MyLocalLocals from '../img/mylocallocals.png';


const ProjectPageStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 9vh;

  .projectsPageBody {
    width: 90%;
    margin: 0 auto;
    border: 1px solid white;
  }

  .pageTitle {
    font-size: 3rem;
    color: yellow;
    text-align: center;
    text-shadow: 3px 4px black, 5px 5px rgb(112, 128, 141);
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .hidden {
    display: none;
  }
`;

function Projects(){
  return (
    <ProjectPageStyle>
      <h1 className="pageTitle">Projects</h1>
      <div className="projectsPageBody">
        <div className="projectStyle">
          <h2 className="projectCategoryTitle">Category Title</h2>
          <div className="projectCardSlideshow">
            <div className="projectCard">
              <div className="projectHeader">
                <h3>Project Title</h3>
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
                <ul>
                  <li>Description List</li>
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