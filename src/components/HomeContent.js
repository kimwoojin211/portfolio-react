import React from 'react';
import styled from 'styled-components';
import Image from '../img/headshot.jpg';

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  background: black;
  color: white;
  height: 100vh;  
  align-items: center;
  padding-top: 4vh;
  font-size: 1.5vmax;
`;

const ContentBannerWrapper = styled.div`
  display:flex;
  background-color: rgba(255, 206, 83, 0.442);
  height: 55vh;
  width: 100%;  
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ContentTextStyle =styled.div`
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 0 2vw 0 2vw;
  min-width: 76%;

  h1{
    text-align: center;
    padding-bottom: 3vh;
    font-size: 1.8em;
  }

  h3{
    font-size: 1.2em;
  }
`;

const ProfilePic = styled.div`
    max-width:23vmax;
    padding: 0 1.7vw 0 1.7vw;

    img{
    border: solid;
    border-width: 2px;
    border-color: white;
    border-radius: 100%;
    width:100%;
    height:100%;
    }
`

function HomeContent(){
  return(
      <ContentContainer>
        <ContentBannerWrapper>
          <ContentTextStyle>
            <h1>Currently Under Construction</h1>
            <h3>Check out my <a href="https://www.github.com/kimwoojin211">Github</a> for some example of coding projects</h3>
            <h3>Come visit my <a href="https://www.linkedin.com/in/kimwoojin211/">LinkedIn</a> for a little more of my history.</h3>
            <h3>Connect with me! Click on "Contact" for the best way to get in touch!</h3>

          </ContentTextStyle>
          <ProfilePic>
            <img src={Image} alt="Headshot of Woo Jin Kim"/>
          </ProfilePic>
        </ContentBannerWrapper>
      </ContentContainer>
  );
};

export default HomeContent;

