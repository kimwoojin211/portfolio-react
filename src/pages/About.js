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
  const Line1 = {
    'text':'Thanks for your patience while I renovate my website.',
    'hrefURL':'',
    'hrefText':'',
    'hrefTextAfter':''
  };
  // const Line2 = `Learn more about me through my <a href="http://kimwoojin211.github.io/portfolio/cv.html">CV</a>`;
  const Line2 = {
      'text':'Learn more about background and history through my',
      'hrefURL':'https://kimwoojin211.github.io/portfolio/cv.html',
      'hrefText':'CV', 
      'hrefTextAfter':'.'};
  const Line3 = {
      'text':'Follow me on',
      'hrefURL':'https://twitch.tv/w00j__',
      'hrefText':'Twitch.tv', 
      'hrefTextAfter':', where I stream code, games, performing arts,& more.'};

  return(
    <AboutStyle>
      <Content
        Line1 = {Line1}
        Line2 = {Line2}
        Line3 = {Line3}
        />
    </AboutStyle>
  );
}

export default About;