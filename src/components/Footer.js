import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  display: flex;
  width: 100%;
  bottom: 0;
  background-color: black;
  justify-content: center;
`;

function Footer(){
  return(
    <FooterStyle>
        <a href="https://github.com/kimwoojin211/portfolio">Check out the source code for this portfolio on Github</a>
    </FooterStyle>
  );
}

export default Footer;