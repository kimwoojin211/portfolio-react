import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

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
  top: 0;
  width: 100%;
  height: 4rem;
  background: linear-gradient(60deg, black, #043128);
  animation: ${gradient} 6s ease infinite;
  background-size: 400% 400%;
  transition: all 0.4s ease-in-out;
  z-index: 2;
  box-shadow: inset 0px 0px 75px 23px rgb(19, 165, 136, 0.13);
  font-size: 1.05rem;
  padding: 0.4rem 0.3rem;

  @media (min-width: 768px) {
    height: 4.5rem;
  }
`;


const NavbarWrapper = styled.div`
  width: 99%;
  height: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 425px) {
    font-size: 1.3rem;
  }

  @media (min-width: 768px) {
    font-size: 1.7rem;
  }

  .navItem {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    padding: 0 5px;
    font-family: "Monoton";
    // overflow: hidden;
  }

  .navItem:hover,
  .active {
    color: white;
    text-shadow: 0px 0px 5px white, 0px 0px 10px white, 0px 0px 2px white;
  }

  .Home {
    font-family: "Neonderthaw";
    font-size: 2rem;
    margin: 0 auto 0 0;
    // padding-left: 20px;
    // display: flex;

    @media (min-width: 425px) {
      font-size: 2.4rem;
    }
    @media (min-width: 768px) {
      font-size: 2.8rem;
    }
  }

  .navItem:not(.Home) {
    padding-top: 0.6rem;
    margin: 0 0 0 0.5rem;
    @media (min-width: 768px) {
      padding: 0px 4px 0 20px;
      margin: 0.5rem 0 0 0.5rem;
    }
  }
`;


function Navbar(props) {
  const { onClickNav, pageClasses } = props;
  // const {
  //   menuDisplay,
  //   menuClass,
  //   mobileMenuOverlayColor,
  //   mobileMenuOverlayHeight,
  // } = props.menuStyle;

  function handleClick(event, page) {
    event.preventDefault();
    onClickNav(page);
  }

  return (
    <NavbarContainer
      // style={{
      //   "--mobile-menu-display": menuDisplay,
      //   "--mobile-menu-overlay-color": mobileMenuOverlayColor,
      //   "--mobile-menu-overlay-height": mobileMenuOverlayHeight,
      // }}
    >
      {/* <NavbarOverlay> */}
      <NavbarWrapper>
        {Object.entries(pageClasses).map(([key, value]) => (
          <a
            href="/"
            className={"navItem " + key + value}
            onClick={(e) => handleClick(e, key)}
          >
            {key}
          </a>
        ))}
      </NavbarWrapper>
    </NavbarContainer>
  );
}

Navbar.propTypes = {
  menuDisplay: PropTypes.string,
  onClickNav: PropTypes.func,
  activePage: PropTypes.string,
  pageClasses: PropTypes.object,
  menuClass: PropTypes.string,
  // menuStyle: PropTypes.object,
};

export default Navbar;
