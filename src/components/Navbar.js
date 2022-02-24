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

const NavbarContainer = styled.div`
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
  font-size: 1.58rem;
  align-items: center;
  box-shadow: inset 0px 0px 75px 23px rgb(19, 165, 136, 0.13);


  a{
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    padding: 0px 15px 0 10px ;
    font-family: 'Monoton';
  }
  
  a:hover, .active{
  color: white;
  text-shadow: 0px 0px 5px white,
    0px 0px 10px white,
    0px 0px 20px white;
    }

  .Home {
    font-size: 2.5em;
    font-family: 'Neonderthaw';
    margin-right: auto;
    padding-left: 20px;
  }
`;

function Navbar(props){
  const {onClickNav, pageClasses} = props;

  function handleClick(event,page){
    event.preventDefault();
    onClickNav(page);

  } 
  return(
    <NavbarContainer>
      { Object.entries(pageClasses).map(([key,value]) => 
          <a href='/' className={key + value} onClick={(e) => handleClick(e,key)}>{key}</a>) }
    </NavbarContainer>
  );
}

Navbar.propTypes = {
  onClickContact: PropTypes.func,
  onClickNav: PropTypes.func,
  activePage: PropTypes.string,
  pageClasses: PropTypes.object,
}

export default Navbar;
