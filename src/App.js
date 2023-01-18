// src/App.js

import React from "react";
import styled from "styled-components";
import PageControl from "./components/PageControl";
import './App.css';

const AppContainer = styled.div`
  min-width: 320px;
  min-height: 100vh;

  // color: #008080;
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;

  .row {
    display: flex;
    flex-direction: row;
  }

  .col {
    display: flex;
    flex-direction: column;
  }

  .hidden {
    display: none;
  }

  .pageTitle {
    padding: 0.8rem 0;
    // margin-top: 0 if home, navbar height if other
    margin-top: 4rem;
    margin-bottom: 1rem;

    font-size: 2.5rem;
    text-align: center;
    /* color: yellow;
  text-shadow: 3px 4px black, 5px 5px rgb(112, 128, 141); */
  }

  

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export default function App() {
  return (
    <AppContainer>
      <PageControl/>
    </AppContainer>
  );
}