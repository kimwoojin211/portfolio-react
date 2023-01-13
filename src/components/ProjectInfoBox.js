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
  display: none;
  width: 95%;
  height: 20vh;
  font-size: 0.57125rem;
  margin: 0 auto;

  border: solid 1px #424542;
  box-shadow: 1px 1px #e7dfe7, -1px -1px #e7dfe7, 1px -1px #e7dfe7,
    -1px 1px #e7dfe7, 0 -2px #9c9a9c, -2px 0 #7b757b, 0 2px #424542;
  margin: 1px auto;
  padding: 0.27rem;

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

  overflow: scroll;
  
  h5{
    font-size: 0.75rem;
    margin: 0.5rem auto;
  }


  ul {
    text-align: left;
    padding-inline-start: 17px;
  }

  li{
    margin-bottom: 0.3rem;
  }


`;



  const info = [
    {
      listTitle: "Details",
      listItems: [
        `Searches for upcoming tournaments using Google Maps API & Start.GG's GraphQL API`,
        "Display all tournaments from search result in a scrollable list",
        "Filter results by game, date, or distance from searched address",
        "Show details of tournament on selection, including date, location, and all events",
        "Sort tournament search results by either date or distance from searched address",
      ],
    },
  ];
  const info2 = [
    {
      listTitle: "Languages",
      listItems: ["Javascript", "CSS", "HTML"],
    },
    {
      listTitle: "Frameworks/Libraries",
      listItems: ["React.JS", "someother", "stuff"],
    },
    {
      listTitle: "Plugins/Tools",
      listItems: ["some", "stuff", "ok"],
    },
  ];


function ProjectInfoBox(props){
   

  const infolist = [info, info2];
  
  return (
    <ProjectInfoBoxContainer>
      {
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
      }
    </ProjectInfoBoxContainer>
  );
}

export default ProjectInfoBox;