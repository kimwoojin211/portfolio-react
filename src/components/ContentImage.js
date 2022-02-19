import React from 'react';
import styled from 'styled-components';
import Image from '../img/headshot.jpg';

const ContentImageStyle = styled.div`
  border:solid;
  border-width:2px;
  border-color: white;
  border-radius: 100%;
  width:450px;
  height:450px;
`

function ContentImage(props){

  const style = {
    'border': 'solid',
    'border-width': '2px',
    'border-color': 'white',
    'border-radius': '100%',
    'width':'450px',
    'height':'450px'
  };
  
  return(
    <React.Fragment>
        <img style={style} src={Image} alt="Headshot of Woo Jin Kim"></img>
    </React.Fragment>
  );
}

export default ContentImage;