import React from 'react';
import styled from 'styled-components';

const HomeStyle = styled.div`
  background-color: black;
  font-size: 1.2em;
  color: orange;
`;

function Home(){
  return(
    <HomeStyle>
      <div className="content hero" id="welcome">
        <h1>Welcome to Woo Jin's Coding Portfolio.</h1>
      </div>

      <div className="content">
        <div id="profileText">
          <h2>Come take a look at some of my coding projects{/*<a href="./projects.html">coding projects</a>*/}!</h2>
          <h2>Check out my background with my CV{/*<a href="./cv.html">CV</a>!*/}</h2>
          <h2>Let's connect! Click on "Contact" for the best way to get in touch!</h2>
        </div>
      </div>
    </HomeStyle>
  );
}

export default Home;