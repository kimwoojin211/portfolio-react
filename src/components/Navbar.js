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
position: fixed;
top:0;
width:100%;
height: 9vh;
min-height: 65px;
background: linear-gradient(60deg,black,#043128);
animation: ${gradient} 6s ease infinite;
background-size: 400% 400%;
transition: all 0.4s ease-in-out;
z-index:2;
display: flex;
align-items: center;
box-shadow: inset 0px 0px 75px 23px rgb(19, 165, 136, 0.13);
font-size: 1.58rem;

a{
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  padding: 0px 15px 0 10px ;
  font-family: 'Monoton';
  overflow:hidden;
}

  
  a:hover, .active{
  color: white;
  text-shadow: 0px 0px 5px white,
    0px 0px 10px white,
    0px 0px 20px white;
    }

  .Home {
    font-size: 3.1rem;
    font-family: 'Neonderthaw';
    margin-right: auto;
    padding-left: 20px;
  }

  @media (max-width: 760px) {
    font-size: 3vw;
    justify-content: space-between;

  .Home {
    font-size: 5vw;
    display:flex;
  }
  
  }

`;

const NavbarOverlay = styled.div`
  display:flex;
  width:100%;
  height:100%;
  align-items: center;
  position: fixed;
  background-color: none;
  
  @media (max-width: 525px) {
    position:fixed;
    top:0;
    height: var(--mobile-menu-overlay-height,'9vh');
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 0 60px 0;
    font-size: 1.3rem;
    background-color: var(--mobile-menu-overlay-color, 'rgb(0,0,0,0.95)');
    border-radius: 10px;
    overflow:hidden;

    a:not(.Home){
      display: var(--mobile-menu-display,'none');
    }

    .Home{
      display: flex;
      z-index: 2;
      font-size: 2.2rem;
    }
  }
`;


const NavbarMenu = styled.div`
  margin-left: auto;
  display: none;
  height: 100%;
  font-size: 2rem;
  align-items: center;
  padding: 2vw 1vw 0 0;
  z-index:2;

  @media (max-width: 525px) {
    display: flex;

  }
  
`;

function Navbar(props){
  const {onClickNav, pageClasses} = props;
  const {menuDisplay, menuClass, mobileMenuOverlayColor, mobileMenuOverlayHeight} = props.menuStyle;
  console.log(`menu Display ${menuDisplay}`);

  function handleClick(event,page){
    event.preventDefault();
    onClickNav(page);
  } 
  
  return(
    <NavbarContainer style={{
      '--mobile-menu-display': menuDisplay,
      '--mobile-menu-overlay-color': mobileMenuOverlayColor,
      '--mobile-menu-overlay-height': mobileMenuOverlayHeight}}>
      <NavbarOverlay>
        { Object.entries(pageClasses).map(([key,value]) => 
            <a href='/' className={key + value} onClick={(e) => handleClick(e,key)}>{key}</a>) 
        }
      </NavbarOverlay>
      <NavbarMenu>
        <a href='/' className={menuClass} onClick={(e) => handleClick(e,'Menu')}>Menu</a>
      </NavbarMenu>
    </NavbarContainer>
  );
}

Navbar.propTypes = {
  menuDisplay: PropTypes.string,
  onClickNav: PropTypes.func,
  activePage: PropTypes.string,
  pageClasses: PropTypes.object,
  menuClass: PropTypes.string,
  menuStyle: PropTypes.object
}

export default Navbar;
