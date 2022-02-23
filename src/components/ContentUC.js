//Displays a stylized Under Construction page

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;  
  background-color: rgba(0,0,0,0.42);
  color: white;
  align-items: center;
  flex-direction: column;
  font-size: 3rem;
  
  h1{
    font-size: 4rem;
  }

  .pageTitle{
    padding-top: 5vh;
    font-size: 4.3rem;
  }
`;

const ContentBannerWrapper = styled.div`
  display:flex;
  background-color: var(--background-color);
  height: 55%;
  width: 100%;  
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;

const ContentLineWrapper = styled.div`
  flex-flow: column;
  margin-left: 3vw;
  font-size: 1.7rem;
  color: var(--color);

`;

const ContentLine = styled.h3`
  a{
    color: var(--link-color);
  }
`;

function ContentUC(props){
  const {lines, title, bannerColor, lineTextColor, lineLinkColor} = props;

  // const imageStyle = {
  //   'border': 'solid',
  //   'border-width': '2px',
  //   'border-color': 'white',
  //   'border-radius': '100%',
  //   'width':'450px',
  //   'height':'450px'
  // };

  return(
    <ContentContainer>
      <h1 className='pageTitle'>{title}</h1>
      <ContentBannerWrapper style={{ '--background-color': bannerColor }}>
        <ContentLineWrapper style={{ 
          '--color': lineTextColor,
          '--link-color': lineLinkColor }} >
          <h1>Currently Under Construction</h1>
          { 
            lines.map((line,i) =>
              <ContentLine key={i}>
                {line.text} <a href={line.hrefURL}>{line.hrefText}</a>{line.hrefTextAfter}</ContentLine>
              )
          }
        </ContentLineWrapper>
        {/* <img style={imageStyle} src={Image} alt="Headshot of Woo Jin Kim"></img> */}
      </ContentBannerWrapper>
    </ContentContainer>
  );
};

ContentUC.propTypes = {
  lines: PropTypes.array,
  title: PropTypes.string,
  bgcolor: PropTypes.string,
  textcolor: PropTypes.string
}

export default ContentUC;