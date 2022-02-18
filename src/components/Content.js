import React from 'react';
import styled from 'styled-components';


const ContentStyle = styled.div`
  display: flex;
  width: 100%;
  background: black;
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