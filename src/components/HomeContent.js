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
`;

const ContentBannerWrapper = styled.div`
  display:flex;
  background-color: rgba(255, 206, 83, 0.442);
  height: 55%;
  width: 100%;  
  align-items: center;
  justify-content: space-around;
`;

const ContentTextStyle =styled.div`
  flex-flow: column;
  margin-left: 3vw;
  font-size: 1.8rem;

  h1{
    text-align: center;
    font-size: 4.2rem;
  }
`;

const ProfilePic = styled.img`
    border: solid;
    border-width: 2px;
    border-color: white;
    border-radius: 100%;
    width:450px;
    height:450px;
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
          <ProfilePic src={Image} alt="Headshot of Woo Jin Kim"/>
        </ContentBannerWrapper>
      </ContentContainer>
  );
};

export default HomeContent;

