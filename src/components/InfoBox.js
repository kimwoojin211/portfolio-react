import React from "react";
import styled from "styled-components";

// Details
//    Features
// Tools
//    Languages
//    Frameworks & Libraries
//    Plugins & Tools
// Changes
//    Version number


const InfoBoxContainer = styled.div`
  font-size: 0.575rem;
  margin: 0.6rem 1.4rem;
  padding: 0.2rem 0.4rem;

  border: solid 1px #424542 !important;
  box-shadow: 1px 1px #a0a0a0, -1px -1px #a0a0a0, 1px -1px #a0a0a0,
    -1px 1px #a0a0a0, 0 -2px #9c9a9c, -2px 0 #7b757b, 0 2px #424542,
    1px 1px 5px #555 inset, -1px 1px 5px #555 inset !important;

  background: #000030 !important;
  background: -moz-linear-gradient(top, #000030 0%, #040049 100%) !important;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #000030),
    color-stop(100%, #040049)
  ) !important;
  background: -webkit-linear-gradient(top, #000030 0%, #040049 100%) !important;
  background: -o-linear-gradient(top, #000030 0%, #040049 100%) !important;
  background: -ms-linear-gradient(top, #000030 0%, #040049 100%) !important;
  background: linear-gradient(to bottom, #000030 0%, #040049 100%) !important;
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000030', endColorstr='#040049',GradientType=0 ) !important;

  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  ::-webkit-scrollbar {
    display: none;
  }
 
  @media (min-width: 375px) {
    font-size: 0.7rem;
    padding: 0.3rem 0.5rem;
    margin: 0.6rem 7%;
  }
`;

const InfoBoxWrapper = styled.div`
  height: 12em;
  overflow-y: scroll;


  scrollbar-width: 5px; /* Firefox */
  scrollbar-color: #595959; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  h5 {
    font-size: 0.725rem;
    margin-left: 0.4rem !important;
    text-shadow: -0.5px 0.8px #ff5151 !important;

    @media (min-width: 375px) {
      font-size: 0.84rem;
    }
  }

  ul {
    text-align: left;
    padding-inline-start: 17px;
    margin: 0.4rem 0 !important;
  }

  li {
    margin: 4px 6px !important;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 2px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #696969;
    border-radius: 0.5rem;
  }
`;


const ProjectInfoSection = styled.div`
  margin: 0.3rem 0 !important
`;



function InfoBox(props){
  const { projectInfo } = props;

  return (
    <InfoBoxContainer className="ff7Style">
      <InfoBoxWrapper>
        {projectInfo.map((info, i) => {
          return (
            <ProjectInfoSection>
              <h5>{info.sectionTitle}</h5>
              <ul>
                {info.listItems.map((item, index) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </ProjectInfoSection>
          );
        })}
      </InfoBoxWrapper>
    </InfoBoxContainer>
  );
}

export default InfoBox;