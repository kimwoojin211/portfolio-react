import React from 'react';
import styled from 'styled-components';
import Content from '../components/Content';
import Hero from '../components/Hero';

const HomeStyle = styled.div`
  background-color: black;
  font-size: 1.2em;
  width:1vw;
  color: orange;

`;

function Home(){
  return(
    <React.Fragment>
      <Hero>
      </Hero>
      <Content>
      </Content>
    </React.Fragment>
  );
}

export default Home;