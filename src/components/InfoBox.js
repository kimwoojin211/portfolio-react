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


const InfoBoxContainer = styled.div`
  width: 100%;
  font-size: 0.565rem;
  margin: 0.4rem 0.7rem !important;
  padding: 0.2rem;

  border: solid 1px #424542;
  box-shadow: 1px 1px #a0a0a0, -1px -1px #a0a0a0, 1px -1px #a0a0a0,
    -1px 1px #a0a0a0, 0 -2px #9c9a9c, -2px 0 #7b757b, 0 2px #424542,
    1px 1px 5px #555 inset, -1px 1px 5px #555 inset;

  background: #000030;
  background: -moz-linear-gradient(top, #000030 0%, #040049 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #000030),
    color-stop(100%, #040049)
  );
  background: -webkit-linear-gradient(top, #000030 0%, #040049 100%);
  background: -o-linear-gradient(top, #000030 0%, #040049 100%);
  background: -ms-linear-gradient(top, #000030 0%, #040049 100%);
  background: linear-gradient(to bottom, #000030 0%, #040049 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000030', endColorstr='#040049',GradientType=0 );

  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  border-radius: 7px;

  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  ::-webkit-scrollbar {
    display: none;
  }

  // ::-webkit-scrollbar {
  //   width: 15px;
  //   background-color: white;
  // }

  // ::-webkit-scrollbar-thumb {
  //   background-color: skyblue;
  //   border-radius: 5rem;
  // }
`;

const InfoBoxWrapper = styled.div`
  // border: 1px solid red;
  height: 10rem;
  overflow-y: scroll;
  // padding-right: 10px;

  scrollbar-width: 5px; /* Firefox */
  scrollbar-color: #595959  /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

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

  ::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #595959;
    border-radius: 2rem;
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


function InfoBox(props){
  const { projectInfo } = props;

  // const infolist = [info, info2];
  
  return (
    <InfoBoxContainer>
      <InfoBoxWrapper>
        {projectInfo.map((info, i) => {
          return (
            <React.Fragment>
              <h5>{info.sectionTitle}</h5>
              <ul>
                {info.listItems.map((item, index) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </React.Fragment>
          );
        })}
      </InfoBoxWrapper>

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
    </InfoBoxContainer>
  );
}

export default InfoBox;