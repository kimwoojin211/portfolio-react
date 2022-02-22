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
  const Line1 = `Thanks for your patience while I renovate my website.`;
  // const Line2 = `Learn more about me through my <a href="http://kimwoojin211.github.io/portfolio/cv.html">CV</a>`;
  const Line2 = `Learn more about background and history through my CV.`;
  const Line3 = `Follow me on Twitch.tv, where I stream coding, games, performing arts, and more.`;

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