import React from 'react';
import styled from 'styled-components';
import ContentUC from '../components/ContentUC';
import AboutBackground from '../img/backgrounds/beach.jpg';

  const line1 = {
    'text':'Click ',
    'hrefURL':'https://kimwoojin211.github.io/portfolio',
    'hrefText':'here',
    'hrefTextAfter':' to view my old portfolio website, written in native JS + HTML'
  };
  
  const line2 = {
      'text':'Learn more about my background and history through my',
      'hrefURL':'https://kimwoojin211.github.io/portfolio/cv.html',
      'hrefText':'CV', 
      'hrefTextAfter':'.'};

  const line3 = {
      'text':'Follow me on',
      'hrefURL':'https://twitch.tv/w00j__',
      'hrefText':'Twitch.tv', 
      'hrefTextAfter':', where I stream code, games, performing arts,& more.'};

  const lines = [line1, line2, line3];

const AboutStyle = styled.div`
  width:100%;
  height:100vh;
  background-image: url(${AboutBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  };
`;

function About(){
  return(
    <AboutStyle>
      <ContentUC
        lines = {lines}
        title = 'About'
        bannerColor = 'rgb(232, 171, 141, 0.462)'
        lineTextColor= '#131184'
        lineLinkColor = 'black'
        />
    </AboutStyle>
  );
}

export default About;