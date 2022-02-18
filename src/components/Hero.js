import React from 'react';
import styled from 'styled-components';
import HeroBackground from '../img/IMG_0730-2.jpg';
// import HeroImage from './HeroImage';

const HeroStyle = styled.div`
  background: grey;
  height: 90vh;
  background-image: url(${HeroBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  };
`;




function Hero(props){
  const HeroOverlayStyle = {
    'display': 'flex',
    'height': '100%',
    'width': '100%',
    'background': 'rgba(0,0,0,0.6)',
    'alignItems': 'center'
  };

  const HeroTitleStyle = {
    'display': 'flex',
    'fontSize': '2.5em',
    'width': '100%',
    'margin': '0 0 .25em',
    'color': 'white',
    'justifyContent': 'center',
    'textShadow': '3px 4px black, 5px 5px rgb(112, 128, 141)'

  };

  return(
    <React.Fragment>
      
      <HeroStyle>
        <div style={HeroOverlayStyle}>
          <h1 style={HeroTitleStyle}>Welcome to Woo Jin's Portfolio</h1>
        </div>
      </HeroStyle>
    </React.Fragment>
  )
}

export default Hero;
// const Hero = (props) => {
//   const width = window.innerWidth;
//   const height = window.innerHeight;
  
//   const style = {
//     'position': 'fixed',
//     'top': 0, 
//     'left': 0,
//     'min-width': '100%',
//     'min-height': '100%'
//   }
  
//   return(
//     <div style={style}>
//       <img src={`https://unsplash.it/${width}/${height}?image=${props.number}`} style={style}/>
//     </div>
//   )
// }

