import React from 'react';
import styled from 'styled-components';
import ContentUC from '../components/ContentUC';
import ProjectBackground from '../img/lake.jpg';
import MyLocalLocals from '../img/mylocallocals.png';

// const line1 = {
//     'text':'Check out my ',
//     'hrefURL':'https://www.github.com/kimwoojin211',
//     'hrefText':'Github',
//     'hrefTextAfter':' to see all my public coding projects.'
//   };
// const line2 = {
//       'text':'Take a look through my ',
//       'hrefURL':'https://kimwoojin211.github.io/portfolio/cv.html',
//       'hrefText':'CV', 
//       'hrefTextAfter':' to see a list of projects and roles I\'ve participated in.'};

// const lines = [line1, line2];

const ProjectPageStyle = styled.div`
  width:100%;
  margin-top: 9vh;
  background-image: url(${ProjectBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  };

  .pageTitle{
    font-size: 3rem;
    color: yellow;
    text-align: center;
    text-shadow: 3px 4px black, 5px 5px rgb(112, 128, 141);
  }

`;

const ProjectStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  border: 1px solid grey;
  color: white;
  background: rgba(0,0,0,0.7);
  text-align: left;
  line-weight: 0.5rem;
  };

  ul{
    line-height: 1.5;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 1rem;
  }

  .projectImgWrapper {
    width: 50%;
    margin: auto 3rem;
  }

  .projectImg{
    width:100%;
  }

  .projectDetails{
    width: 50%;
    border: solid 1px #424542;
    box-shadow: 1px 1px #e7dfe7,
                -1px -1px #e7dfe7,
                1px -1px #e7dfe7,
                -1px 1px #e7dfe7,
                0 -2px #9c9a9c,
                -2px 0 #7b757b,
                0 2px #424542;
    padding: 1rem 2rem;
    margin: 50px 50px;
    
    background: #04009d;
    background: -moz-linear-gradient(top,  #04009d 0%, #06004d 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#04009d), color-stop(100%,#06004d));
    background: -webkit-linear-gradient(top,  #04009d 0%,#06004d 100%);
    background: -o-linear-gradient(top,  #04009d 0%,#06004d 100%);
    background: -ms-linear-gradient(top,  #04009d 0%,#06004d 100%);
    background: linear-gradient(to bottom,  #04009d 0%,#06004d 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#04009d', endColorstr='#06004d',GradientType=0 );


    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    border-radius: 7px;
  }

  .projectDetails *{
    color: #eff1ff;
    text-shadow: 2px 2px #212421,
                1px 1px #212021;
    font-family: Verdana, sans-serif;
    font-size: 1rem;
    font-weight: normal;
    margin: 5px 0;
  }

  .projectTitle{
    font-size: 2.5rem;
    margin-bottom: 0;
    text-align: center;
  }

  .projectSummary{
    margin: 0 auto;
  }
  
  .projectDescription{
    margin: 1rem auto;
  }

  .projectFeatures{
    display: flex;
    flex-direction: row;
    width:100%;
    justify-content: space-around;
    margin: 0 auto;
  }

  .toolTip *{
    display:none;
  }
`;

function Projects(){
  return (
    <ProjectPageStyle>
      <h2 className="pageTitle">Projects</h2>
      <ProjectStyle>
        <div className="projectImgWrapper">
          <div className="projectTitleContainer">
            <h2 className="projectTitle">My Local Locals</h2>
            <img className="projectLanguages">{/* language(s) */}</img>
          </div>
          <img src={MyLocalLocals} className="projectImg">
            {/*picture (slideshow?) of website (w/ features?)*/}
          </img>
        </div>
        <div className="projectDetails">
          <h4 className="projectSummary">
            This browser app allows users who compete in various platform
            fighting video games (such as Super Smash Brothers) to enter an address into a searchbar to find all upcoming local tournaments near the searched address.
          </h4>
          <ul className="projectDescription">
            <li>
              Searches for upcoming tournaments based on user's address input, using Google Maps API & Start.GG (formerly Smash.GG) API
            </li>
            <li>
              Display all tournaments from search result in a scrollable list
            </li>
            <li>
              Filter results by game, date, or distance from searched address
            </li>
            <li>
              Show details of an individual tournament when selected, including  date, location, and every events relevant to filtered games.
            </li>
            <li>
              Sort tournament search results by either date or distance from
              searched address
            </li>
          </ul>
          <div className="projectFeatures">
            <div className="projectToolsContainer">
              <p>Tools</p>
              <img>{/* tools */}</img>
              {/* tooltip */}
              <div className="projectTools toolTip">
                <h5 className="projectToolsTitle">Frameworks</h5>
                <ul className="projectToolsList">
                  <li className="projectToolsItem">React</li>
                </ul>
              </div>
            </div>
            <div className="projectChangeLogWrapper">
              <p>Change Log</p>
              <img>{/* changelog */}</img>
              {/* tooltip */}
              <div className="projectChangeLog toolTip">
                <h5 className="projectChangeLogVersion">Version v0.1</h5>
                <ul className="projectChangeLogList">
                  <li className="projectChangeLogItem">React</li>
                </ul>
              </div>
            </div>
            <a href="https://github.com/kimwoojin211/MyLocalLocals">
              Github
              <img>{/* github */}</img>
            </a>
            {/* known issues? */}
          </div>
        </div>
      </ProjectStyle>
      {/* <ContentUC
        lines = {lines}
        title = 'Projects'
        bannerColor = 'rgb(27, 28, 43, 0.5)'
        lineTextColor = '#fffa6d'
        lineLinkColor = '#a354ce'
        /> */}
    </ProjectPageStyle>
  );
}

export default Projects;