import React from 'react';
import styled from 'styled-components';

const NavbarStyle = styled.div`
  width:100%;
  height:5vh;
  background: linear-gradient(60deg, #000303,#032e26);
  animation: gradient 4s ease infinite;
  padding-top: 25px;
  padding-bottom: 25px;
  background-size: 400% 400%;
  z-index:2;
  transition: all 0.4s ease-in-out;
  color: white;
  border-color: white;
  font-size: 1.5em;
`;

function Navbar(){
  return(
    <NavbarStyle>
      Home
    </NavbarStyle>
  );
}

export default Navbar;