import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  position: absolute;
  width: 100%;
  background-color: black;
`;

function Footer(){
  return(
    <FooterStyle>
      <hr/>
        <a id="github" href="https://github.com/kimwoojin211/portfolio">Check out the source code for this portfolio on Github</a>
    </FooterStyle>
  );
}

export default Footer;