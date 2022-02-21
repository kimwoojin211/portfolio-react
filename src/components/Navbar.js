import React from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import PropTypes from 'prop-types';

const NavbarStyle = styled.div`
  display: flex;
  position: fixed;
  width:100%;
  height: 9vh;
  background: linear-gradient(60deg,#032e26,#28a368);
  animation: gradient 4s ease infinite;
  background-size: 400% 400%;
  z-index:3;
  transition: all 0.4s ease-in-out;
  color: white;
  border-color: white;
  font-size: 1.5em;
  align-items: center;
  justify-content: space-between;
`;

function Navbar(props){

  const NavHomeStyle = {
    'margin': '1em'
  };
  
  const NavContactStyle = {
    'margin': '1em'
  }

  return(
    <NavbarStyle>
      <p style={NavHomeStyle}>Home</p>
      <p style={NavContactStyle} onClick={props.onClickContact}>Contact</p>
      {/* <Contact/> */}
    </NavbarStyle>
  );
}

Navbar.propTypes = {
  onClickContact: PropTypes.func
}

export default Navbar;