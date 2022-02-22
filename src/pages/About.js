import React from 'react';
import styled from 'styled-components';
import Content from '../components/Content';
import AboutBackground from '../img/beach.jpg';


const AboutStyle = styled.div`
  font-size: 1.2em;
  width:100%;
  height:100vh;
  background-image: url(${AboutBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  };
`;

function About(){
  const line1 = {
    'text':'Thanks for your patience while I renovate my website.',
    'hrefURL':'',
    'hrefText':'',
    'hrefTextAfter':''
  };
  const line2 = {
      'text':'Learn more about background and history through my',
      'hrefURL':'https://kimwoojin211.github.io/portfolio/cv.html',
      'hrefText':'CV', 
      'hrefTextAfter':'.'};
  const line3 = {
      'text':'Follow me on',
      'hrefURL':'https://twitch.tv/w00j__',
      'hrefText':'Twitch.tv', 
      'hrefTextAfter':', where I stream code, games, performing arts,& more.'};

  const lines = [line1, line2, line3];

  return(
    <AboutStyle>
      <Content
        lines = {lines}
        title = 'About'
        bgcolor = 'rgb(232, 171, 141, 0.422)'
        textcolor= 'black'
        />
    </AboutStyle>
  );
}

export default About;