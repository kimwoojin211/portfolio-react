import React from 'react';
import styled, {keyframes} from 'styled-components';
import PropTypes from 'prop-types';

const gradient = keyframes`
  0% {
    background-position: 100% 0% ;
  }
  50% {
    background-position: 30% 100% ;
  }
  100% {
    background-position: 100% 0%;
  }
`;

const NavbarStyle = styled.div`
  display: flex;
  position: fixed;
  width:100%;
  height: 9vh;
  min-height: 65px;
  background: linear-gradient(60deg,black,#043128);
  animation: ${gradient} 6s ease infinite;
  background-size: 400% 400%;
  z-index:3;
  transition: all 0.4s ease-in-out;
  font-size: 1.65rem;
  align-items: center;
  justify-content: flex-end;

  a{
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
  }
`;

const NavHomeStyle = styled.div`
  display:flex;
  font-size: 1.7em;
  margin: 1rem;
  font-family: 'Neonderthaw';

`;

const NavTextStyle = styled.div`
  display:flex;
  width:100%;
  justify-content: flex-end;
  font-size: 1em;
  margin:0.4em;

  a{
    margin:0.5em;
  }

`;

function Navbar(props){
  const {onClickNav, onClickContact} = props;
  function handleClick(event,page){
    event.preventDefault();
    console.log('page= ' + page);
    console.log('onClickNav= ' + onClickNav);
    onClickNav(page);
  } 
  return(
    <NavbarStyle>
      <NavHomeStyle>
        <a href='' onClick={(e) => handleClick(e,'Home')}>Home</a>
      </NavHomeStyle>
      <NavTextStyle>
        <a href='' onClick={(e) => handleClick(e,'About')}>About</a>
        <a href='' onClick={(e) => handleClick(e,'Projects')}>Projects</a>
        <a href='' onClick={(e) => handleClick(e,'Skills')}>Skills</a>
        <a href='' onClick={onClickContact}>Contact</a>
      </NavTextStyle>
    </NavbarStyle>
  );
}

Navbar.propTypes = {
  onClickContact: PropTypes.func,
  onClickNav: PropTypes.func
}

export default Navbar;

// think about using Route Router