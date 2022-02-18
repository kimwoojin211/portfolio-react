import React from 'react';
import styled from 'styled-components';
import Hero from './Hero';


const ContentStyle = styled.div`
  display:flex;
  width:100%;
  background: blue;
  color: white;
  height: 100vh
`;

function Content(){
  return(
    <ContentStyle>
      <p>sup</p>
    </ContentStyle>
  );
};

export default Content;