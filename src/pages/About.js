import React from 'react';
import styled from 'styled-components';
import Content from '../components/Content';

const AboutStyle = styled.div`
  font-size: 1.2em;
  width:100%;
  height:100vh; 
  };
`;

function About(){
  return(
    <AboutStyle>
      <Content
        Line1 = 'Lorem'
        Line2 = 'Ipsum'
        Line3 = 'Dolor'
        />
    </AboutStyle>
  );
}

export default About;