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
  justify-content: center;
  font-size: 1.5vw;

  .pageTitle{
    font-size: 3rem;
  }
`;

const ContentBannerWrapper = styled.div`
  display:flex;
  background-color: var(--background-color);
  height: 55vmin;
  width: 100%;  
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;

const ContentLineWrapper = styled.div`
  flex-flow: column;
  margin-left: 3vw;
  color: var(--color);

  h1{
    font-size: 2.1em;
  }

  h3{
    font-size: 1.2em;
  }

  @media (max-width: 768px) {
    
    h1{
      font-size:4em;
    }
    h3{
      font-size:1.5em;
    }
  }
`;

const ContentLine = styled.h3`
  a{
    color: var(--link-color);
  }
`;

function ContentUC(props){
  const {lines, title, bannerColor, lineTextColor, lineLinkColor} = props;

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