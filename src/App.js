// src/App.js

import React from "react";
import styled from "styled-components";
import PageControl from "./components/PageControl";
import './App.css';

const AppContainer = styled.div`
  min-width: 320px;
  min-height: 100vh;
  
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

  .overlay{
    width:100%;
    height:100%;
    background: rgba(0,0,0,0.58); //make it variable?
  }

  .pageTitle {
    padding: 1.5rem 0;
    // margin-top: 0 if home, navbar height if other
    margin-top: 4rem;
    margin-bottom: 1rem;

    font-size: 2.5rem;
    text-align: center;
    /* color: yellow;
  text-shadow: 3px 4px black, 5px 5px rgb(112, 128, 141); */

    @media (min-width: 768px) {
      margin-top: 4.5rem;
    }
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