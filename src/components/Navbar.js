import React from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import PropTypes from 'prop-types';

const NavbarStyle = styled.div`
  display: flex;
  position: fixed;
  width:100%;
  height: 9vh;
  background: linear-gradient(60deg,#032e26,#043128);
  animation: gradient 4s ease infinite;
  background-size: 400% 400%;
  z-index:3;
  transition: all 0.4s ease-in-out;
  color: white;
  font-size: 1.5em;
  align-items: center;
  justify-content: flex-end;
`;

const NavHomeStyle = styled.div`
  display:flex;
  font-size: 1.7em;
  margin: 1rem;

`;

const NavTextStyle = styled.div`
  display:flex;
  width:100%;
  justify-content: flex-end;
  font-size: 1em;
  margin:0.4em;

  p{
    margin:0.5em;
  }

`;

function Navbar(props){
  const {onClickNav, onClickContact} = props;
  // const NavHomeStyle = {
  //   'margin': '1em'
  // };

  return(
    <NavbarStyle>
      <NavHomeStyle>
        <p onClick={() => onClickNav('Home')}>Home</p>
      </NavHomeStyle>
      <NavTextStyle>
        <p onClick={() => onClickNav('About')}>About</p>
        <p onClick={onClickContact}>Contact</p>
      </NavTextStyle>
      {/* <Contact/> */}
    </NavbarStyle>
  );
}

Navbar.propTypes = {
  onClickContact: PropTypes.func,
  onClickNav: PropTypes.func
}

export default Navbar;