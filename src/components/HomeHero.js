import React from 'react';
import styled from 'styled-components';
import HeroBackground from '../img/IMG_0730-2.jpg';

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
  background: rgba(0,0,0,0.6);
  align-items: center;

  .heroTitle{
    font-size: 1.97em;
    width: 100%;
    padding: 13vh 0 .25em;
    color: white;
    text-align: center;
    text-shadow: 3px 4px black, 5px 5px rgb(112, 128, 141);
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

//stretch goal: make an animation that starts w/ a WWW that splits into Welcome to Woo Jin's Website