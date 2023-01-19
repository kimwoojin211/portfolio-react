import React from 'react';
import styled from 'styled-components';
import HomeHero from '../components/HomeHero';
import HomeContent from '../components/HomeContent';
import { FullPage, Slide } from 'react-full-page';

const HomeStyle = styled.div`
  height:100vh;
  };
`;

function Home(){
  return (
    <HomeStyle>
      <HomeHero />
      {/* <FullPage>
        <Slide>
          <HomeHero/>
        </Slide>
        <Slide>
          <HomeContent/>
        </Slide>
      </FullPage> */}
    </HomeStyle>
  );
}

export default Home;