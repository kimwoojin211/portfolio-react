import React from 'react';
import styled from 'styled-components';
import Content from '../components/Content';
import SkillBackground from '../img/palmsprings.jpg';


const SkillStyle = styled.div`
  font-size: 1.2em;
  width:100%;
  height:100vh;
  background-image: url(${SkillBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  };
`;

function Skills(){
  const line1 = {
    'text':'Some fun facts:',
    'hrefURL':'',
    'hrefText':'',
    'hrefTextAfter':''
  };
  
  const line2 = {
    'text':'- I used to compete in choreographed and freestyle dance competitions',
    'hrefURL':'',
    'hrefText':'',
    'hrefTextAfter':''
  };
  
  const line3 = {
  'text':'- I am certified as a ',
  'hrefURL':'https://account.ncees.org/rn/2032805-1220275-eff7ec1',
  'hrefText':'NCEES Engineer-In-Traning', 
  'hrefTextAfter':', a requirement for a Professional Engineering License'
  };

  const line4 = {
      'text':'- I am currently teaching myself how to DJ and produce music.',
      'hrefURL':'',
      'hrefText':'', 
      'hrefTextAfter':''
  };

  const line5 = {
      'text':'- I compete in Super Smash Brothers Melee for the Nintendo Gamecube.',
      'hrefURL':'',
      'hrefText':'', 
      'hrefTextAfter':''
    };

  const lines = [line1, line2, line3, line4, line5];

  return(
    <SkillStyle>
      <Content
        lines = {lines}
        title = 'Skills'
        bgcolor = 'rgb(127, 127, 112,0.38)'
        textcolor = 'white'
        />
    </SkillStyle>
  );
}

export default Skills;