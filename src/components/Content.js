import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const ContentStyle = styled.div`
  display: flex;
  width: 100%;
  background: black;
  color: white;
  height: 100vh;  
  align-items: center;
  padding-top: 4vh;
`;

const ContentProfileStyle = styled.div`
  display:flex;
  background-color: rgba(255, 206, 83, 0.442);
  height: 50%;
  width: 100%;  
  align-items: center;
  justify-content: space-around;
  font-size: 1.5em;
`;

const ContentTextStyle =styled.div`
  flex-flow: column;
  margin-left: 3vw;
`;



function Content(props){
  const {Line1, Line2, Line3} = props;
  const h1Style = {
  }
  
  const h3Style = {
  }

  const profilePicStyle = {
  };


  return(
    <React.Fragment>
      <ContentStyle>
        <ContentProfileStyle>
          <ContentTextStyle>
            <h1>Currently Under Construction.</h1>
            <h3>{Line1}</h3>
            <h3>{Line2}</h3>
            <h3>{Line3}</h3>
          </ContentTextStyle>
        </ContentProfileStyle>
      </ContentStyle>
    </React.Fragment>
  );
};

Content.propTypes = {
  Line1: PropTypes.string,
  Line2: PropTypes.string,
  Line3: PropTypes.string,
}

export default Content;