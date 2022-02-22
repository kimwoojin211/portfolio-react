import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const ContentStyle = styled.div`
  display: flex;
  width: 100%;
  background-color: rgba(0,0,0,0.42);
  color: white;
  height: 100vh;  
  align-items: center;
  padding-top: 2vh;
  flex-direction: column;
  font-size: 3rem;

`;

const ContentProfileStyle = styled.div`
  display:flex;
  background-color: rgb(232, 171, 141, 0.422);
  height: 50%;
  width: 100%;  
  align-items: center;
  justify-content: space-around;

  h1{
    font-size: 3.9rem;
  }
`;

const ContentTextStyle =styled.div`
  flex-flow: column;
  margin-left: 3vw;
  font-size: 1.7rem;
  color: rgba(0,0,0,1);
`;



function Content(props){
  const {Line1, Line2, Line3} = props;
  const h1Style = {
  }
  
  const h3Style = {
  }

  const profilePicStyle = {
    'border': 'solid',
    'border-width': '2px',
    'border-color': 'white',
    'border-radius': '100%',
    'width':'450px',
    'height':'450px'
  };


  return(
    <React.Fragment>
      <ContentStyle>
        <h1 classNames='pageTitle'>About</h1>
        <ContentProfileStyle>
          <ContentTextStyle>
            <h1>Currently Under Construction.</h1>
            <h3>{Line1}</h3>
            <h3>{Line2}</h3>
            <h3>{Line3}</h3>
          </ContentTextStyle>

          {/* <img style={profilePicStyle} src={Image} alt="Headshot of Woo Jin Kim"></img> */}
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