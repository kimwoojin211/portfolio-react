import React from 'react';
import styled from 'styled-components';
import Content from '../components/Content';
import Hero from '../components/Hero';

const HomeStyle = styled.div`
  background-color: black;
  font-size: 1.2em;
  width:100%;
  height:200vh;
  color: orange;
  };
`;

function Home(){
  return(
    <HomeStyle>
      <Hero>
      </Hero>
      <Content>
      </Content>
    </HomeStyle>
  );
}

export default Home;