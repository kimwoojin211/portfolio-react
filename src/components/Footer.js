import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: white;
  display: inline;
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