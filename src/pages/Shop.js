import React from 'react';
import styled from 'styled-components';
import ContentUC from '../components/ContentUC';
import ShopBackground from '../img/backgrounds/palmsprings.jpg';

const line1 = {
  'text':'Some fun facts:',
  'hrefURL':'',
  'hrefText':'',
  'hrefTextAfter':''
};

const line2 = {
  'text':'- I used to compete in choreographed and freestyle dance competitions',
  'hrefURL':'',
  'hrefText':'',
  'hrefTextAfter':''
};

const line3 = {
'text':'- I am  ',
'hrefURL':'https://account.ncees.org/rn/2032805-1220275-eff7ec1',
'hrefText':'certified', 
'hrefTextAfter':' as a NCEES Engineer-In-Traning, a Professional Engineer license requirement'
};

const line4 = {
    'text':'- I am currently teaching myself how to DJ and produce music.',
    'hrefURL':'',
    'hrefText':'', 
    'hrefTextAfter':''
};

const line5 = {
    'text':'- I compete in Super Smash Brothers Melee for the Nintendo Gamecube.',
    'hrefURL':'',
    'hrefText':'', 
    'hrefTextAfter':''
  };

  const lines = [line1, line2, line3, line4, line5];

const ShopStyle = styled.div`
  width:100%;
  height:100vh;
  background-image: url(${ShopBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  };
`;

function Shop(){

  return(
    <ShopStyle>
      <ContentUC
        lines = {lines}
        title = 'Shop'
        bannerColor = 'rgb(127, 127, 112, 0.42)'
        lineTextColor = ''
        lineLinkColor = 'yellow'
        />
    </ShopStyle>
  );
}

export default Shop;