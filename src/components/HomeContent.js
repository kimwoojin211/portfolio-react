import React from 'react';
import styled from 'styled-components';
import Image from '../img/headshot.jpg';


const HomeContentStyle = styled.div`
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



function HomeContent(){

  const h1Style = {
    'paddingBottom': '1.4rem',
    'textAlign': 'center',
  }
  
  const h3Style = {
    'font-size': '1em'
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
      <HomeContentStyle>
        <ContentProfileStyle>
          <ContentTextStyle>
            <h1 style={h1Style}>Currently Under Construction.</h1>
            <h3>Check out my <a href="https://www.github.com/kimwoojin211">Github</a> for some example of coding projects</h3>
            <h3>Come visit my <a href="https://www.linkedin.com/in/kimwoojin211/">LinkedIn</a> for a little more of my history.</h3>
            {/*<h3> Learn a little bit more about me on my about page</h3>*/}
            <h3>Connect with me! Click on "Contact" for the best way to get in touch!</h3>
          </ContentTextStyle>

          <img style={profilePicStyle} src={Image} alt="Headshot of Woo Jin Kim"></img>
        </ContentProfileStyle>
      </HomeContentStyle>
    </React.Fragment>
  );
};

export default HomeContent;