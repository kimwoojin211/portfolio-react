import React from 'react';
import styled from 'styled-components';
import HeroImage from './HeroImage';

const HeroStyle = styled.div`
  background-color: black;
  font-size: 1.2em;
  color: orange;
`;

function Hero(props){
  


  return(
    <HeroStyle>
      <HeroImage/>
    </HeroStyle>
  )
}

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
export default Hero;