import React from "react";
import styled from "styled-components";

// Details
//  Features
// Tools
//  Languages
//  Frameworks & Libraries
//  Plugins & Tools
// Changes
//  Version number
const ProjectInfoBoxContainer = styled.div`
  width: 95%;
  height: 10rem;
  font-size: 0.565rem;
  margin: 0.5rem 0.75rem !important;
  padding: 0.25rem;

  border: solid 1px #424542;
  box-shadow: 1px 1px #848484, -1px -1px #848484, 1px -1px #848484,
    -1px 1px #848484, 0 -2px #9c9a9c, -2px 0 #7b757b, 0 2px #424542;

  background: #000028;
  background: -moz-linear-gradient(top, #000028 0%, #06004d 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #000028),
    color-stop(100%, #06004d)
  );
  background: -webkit-linear-gradient(top, #000028 0%, #06004d 100%);
  background: -o-linear-gradient(top, #000028 0%, #06004d 100%);
  background: -ms-linear-gradient(top, #000028 0%, #06004d 100%);
  background: linear-gradient(to bottom, #000028 0%, #06004d 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000028', endColorstr='#06004d',GradientType=0 );

  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  border-radius: 7px;

  overflow: scroll;

  h5 {
    font-size: 0.76125rem;
    margin-left: 0.4rem !important;
  }

  ul {
    text-align: left;
    padding-inline-start: 15px;
  }

  li {
    margin: 4px 3px !important;
  }
`;



  // const info = [
  //   {
  //     listTitle: "Details",
  //     listItems: [
  //       `Searches for upcoming tournaments using Google Maps API & Start.GG's GraphQL API`,
  //       "Display all tournaments from search result in a scrollable list",
  //       "Filter results by game, date, or distance from searched address",
  //       "Show details of tournament on selection, including date, location, and all events",
  //       "Sort tournament search results by either date or distance from searched address",
  //     ],
  //   },
  // ];
  // const info2 = [
  //   {
  //     listTitle: "Languages",
  //     listItems: ["Javascript", "CSS", "HTML"],
  //   },
  //   {
  //     listTitle: "Frameworks/Libraries",
  //     listItems: ["React.JS", "someother", "stuff"],
  //   },
  //   {
  //     listTitle: "Plugins/Tools",
  //     listItems: ["some", "stuff", "ok"],
  //   },
  // ];


function ProjectInfoBox(props){
  const { projectInfo } = props;

  // const infolist = [info, info2];
  
  return (
    <ProjectInfoBoxContainer>
      {
        projectInfo.map((info,i) => {
          return (
            <div>
              <h5>{info.sectionTitle}</h5>
              <ul>
              {
                info.listItems.map((item,index) => {
                  return (<li>{item}</li>);
                })
              }
              </ul>
            </div>
          );
          
        })
      }

      {/* {
        info.map((infoList,i) => {
          return (
            <div>
              <h5>{infoList.listTitle}</h5>
              <ul>
              {
                infoList.listItems.map((item,index) => {
                  return (<li>{item}</li>);
                })
              }
              </ul>
            </div>
          );
          
        })
      } */}
    </ProjectInfoBoxContainer>
  );
}

export default ProjectInfoBox;