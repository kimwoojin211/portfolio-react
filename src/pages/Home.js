import React from 'react';
import styled from 'styled-components';
import HomeHero from '../components/HomeHero';
import HomeContent from '../components/HomeContent';

const HomeStyle = styled.div`
  background-color: black;
  font-size: 1.2em;
  width:100%;
  height:195vh; 
  };
`;
// eventually need to get height from subtracting navbar height from 

function Home(){
  return(
    <HomeStyle>
      <HomeHero/>
      <HomeContent/>
    </HomeStyle>
  );
}

export default Home;