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
  // justify-content: center;
  border: 1px solid blue;
`;

const ContentBannerWrapper = styled.div`
  display: flex;
  background-color: rgba(255, 206, 83, 0.442);
  height: 55%;
  width: 100%;
  align-items: center;
  // justify-content: space-around;
  flex-wrap: wrap;
  border: 1px solid red;
  min-height: 500px;
`;

const ContentTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  // padding: 0 2vw 0 2vw;
  // min-width: 76%;
  // max-width: 90%;
  width:90%;
  // border: 1px solid yellow;

  *{
    // border: 1px solid blue;
  }
  h1 {
    text-align: center;
    margin: 1rem auto;
    font-size: 1.7rem;
  }

  h3 {
    text-align: left;
    font-size: 0.87rem;
    margin: 1.1rem auto;
    // margin-left: 5rem;
  }
`;

const ProfilePic = styled.div`
  width: 45%;
  max-width: 250px;
  padding: 0 1.7vw 0 1.7vw;
  // border: 1px solid purple;

  img {
    border: solid;
    border-width: 2px;
    border-color: white;
    border-radius: 100%;
    width: 100%;
    height: 100%;
  }
`;

function HomeContent(){
  return(
      <ContentContainer>
        <ContentBannerWrapper>
          <ContentTextStyle>
            <h1>Currently Under Construction</h1>
            <h3>Come back later to see more updates done to this website!</h3>
            <h3>Check out my <a href="https://www.github.com/kimwoojin211">Github</a> for some example of coding projects.</h3>
            <h3>Visit my <a href="https://www.linkedin.com/in/kimwoojin211/">LinkedIn</a> for my work history.</h3>
            <h3>Click on "Contact" in the top right corner to get in touch!</h3>

          </ContentTextStyle>
          <ProfilePic>
            <img src={Image} alt="Headshot of Woo Jin Kim"/>
          </ProfilePic>
        </ContentBannerWrapper>
      </ContentContainer>
  );
};

export default HomeContent;

