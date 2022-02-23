import React from 'react';
import styled from 'styled-components';
import HeroBackground from '../img/IMG_0730-2.jpg';

const HeroStyle = styled.div`
  background: grey;
  width: 100%;
  height: 100vh;
  background-image: url(${HeroBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  };
`;




function HomeHero(props){
  const HeroOverlayStyle = {
    'display': 'flex',
    'height': '100%',
    'width': '100%',
    'background': 'rgba(0,0,0,0.6)',
    'alignItems': 'center'
  };

  const HeroTitleStyle = {
    'display': 'flex',
    'fontSize': '1.97em',
    'width': '100%',
    'margin': '13vh 0 .25em',
    'color': 'white',
    'justifyContent': 'center',
    'textShadow': '3px 4px black, 5px 5px rgb(112, 128, 141)'

  };

  return(
    <React.Fragment>

      <HeroStyle>
        <div style={HeroOverlayStyle}>
          <h1 style={HeroTitleStyle}>Welcome to Woo Jin's Website</h1>
        </div>
      </HeroStyle>
    </React.Fragment>
  )
}

export default HomeHero;

//stretch goal: make an animation that starts w/ a WWW that splits into Welcome to Woo Jin's Website