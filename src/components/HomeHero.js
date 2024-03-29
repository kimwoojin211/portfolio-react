import React from 'react';
import styled from 'styled-components';
import HeroBackground from '../img/backgrounds/IMG_0730-2.jpg';

const HeroContainer = styled.div`
  background: grey;
  width: 100%;
  height: 100vh;
  background-image: url(${HeroBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  };
`;

const HeroOverlay = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  align-items: center;

  .heroTitle {
    font-size: 1.1rem;
    width: 100%;
    padding: 13vh 0 0.25em;
    color: white;
    text-align: center;
    text-shadow: 3px 4px black, 5px 5px rgb(112, 128, 141);

    @media (min-width: 375px) {
      font-size: 1.3rem;
    }
    @media (min-width: 425px) {
      font-size: 1.47rem;
    }
    @media (min-width: 768px) {
      font-size: 1.6rem;
  }
`;

function HomeHero(props){

  return(
      <HeroContainer>
        <HeroOverlay>
          <h1 className="heroTitle">Welcome to Woo Jin's Website</h1>
        </HeroOverlay>
      </HeroContainer>
  )
}

export default HomeHero;

