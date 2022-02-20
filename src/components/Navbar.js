import React from 'react';
import styled from 'styled-components';
import Contact from './Contact';

const NavbarStyle = styled.div`
  display: flex;
  width:100%;
  height: 9vh;
  background: linear-gradient(60deg,#032e26,#28a368);
  animation: gradient 4s ease infinite;
  background-size: 400% 400%;
  z-index:2;
  transition: all 0.4s ease-in-out;
  color: white;
  border-color: white;
  font-size: 1.5em;
  align-items: center;
`;

function Navbar(){

  const NavTextStyle = {
    'margin': '1em'
  };

  return(
    <NavbarStyle>
      <p style={NavTextStyle}>Home</p>
      <Contact/>
    </NavbarStyle>
  );
}

export default Navbar;