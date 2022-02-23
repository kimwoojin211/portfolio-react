import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  bottom: 0;
  justify-content: center;
`;

const FooterBoxStyle = styled.div`
    background: rgba(0,0,0,0.3);
    border-radius: 1.5em;
    border-width: 0.7em;
    border-style: solid;
    border-color: transparent;
  `;

function Footer(){
  const HyperlinkStyle = {
    'color':'rgb(244, 229, 166, 0.7)',

  }

  return(
    <FooterStyle>
      <FooterBoxStyle>
        <a href="https://github.com/kimwoojin211/portfolio-react" style = {HyperlinkStyle}>Check out the source code for this portfolio on Github</a>
      </FooterBoxStyle>
    </FooterStyle>
  );
}

export default Footer;