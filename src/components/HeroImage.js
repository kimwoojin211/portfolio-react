import React from 'react';
import styled from 'styled-components';
import HeroImage from '../img/IMG_0730-2.jpg';



function Hero(props){
  return(
    <React.Fragment>
      <img src={HeroImage} style={style}/>
    </React.Fragment>
  );
}

export default HeroImage.js