import React from 'react';
import styled from 'styled-components';


const ContentStyle = styled.div`
  display: flex;
  width: 100%;
  background: black;
  color: white;
  height: 100vh;  
  align-items: center;

`;

const ContentTextStyle = styled.div`
  display:flex;
  background-color: rgba(255, 206, 83, 0.442);
  height: 50%;
  width: 100%;  
  align-items: center;
  justify-content: space-around;
  font-size: 1.5em;
  flex-flow: column;
  
`;

function Content(){

  const h2Style = {
    'padding-bottom': '1.4rem'
  }

  return(
    <React.Fragment>
      <ContentStyle>
        <ContentTextStyle>
          <h2 style={h2Style}>Currently Under Construction.</h2>
          <h3>Check out my Github for some example of coding projects</h3>
          <h3>Come visit my LinkedIn for a little more of my history.</h3>
          {/*<h3> Learn a little bit more about me on my about page</h3>*/}
          <h3>Let's connect! Click on "Contact" for the best way to get in touch!</h3>
        </ContentTextStyle>
      </ContentStyle>
    </React.Fragment>
  );
};

export default Content;