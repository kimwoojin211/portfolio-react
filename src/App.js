// src/App.js

import React from "react";
import styled from "styled-components";
import PageControl from "./components/PageControl";
import './App.css';

const AppContainer = styled.div`
  width:100%;
  height:auto;
  
  background:black;
`

export default function App() {
  return (
    <AppContainer>
      <PageControl/>
    </AppContainer>
  );
}