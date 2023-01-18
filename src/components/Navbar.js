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

    @media (min-width: 768px) {
      padding: 0px 15px 0 10px;
    }
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
    margin: 0 0rem 0 0.5rem;
  }
`;

// const NavbarOverlay = styled.div`
//   // // display: flex;
//   // display: none;
//   // width: 100%;
//   // height: 100%;
//   // align-items: center;
//   // position: fixed;
//   // background-color: none;
  
//     // height: var(--mobile-menu-overlay-height, "9vh");
//     flex-direction: column;
//     justify-content: space-between;
//     padding: 15px 0 60px 0;
//     font-size: 1.3rem;
//     background-color: var(--mobile-menu-overlay-color, "rgb(0,0,0,0.95)");
//     border-radius: 10px;
//     overflow: hidden;

//     // a:not(.Home) {
//     //   display: var(--mobile-menu-display, "none");
//     // }

//     .Home {
//       display: flex;
//       z-index: 2;
//       font-size: 2.2rem;
//     }
//   }


//   @media (min-width: 525px) {
//     // display: flex;
//     width: 100%;
//     height: 100%;
//     align-items: center;
//     position: fixed;
//     background-color: none;
//   }

//   // @media (max-width: 525px) {
//   //   // height: var(--mobile-menu-overlay-height, "9vh");
//   //   flex-direction: column;
//   //   justify-content: space-between;
//   //   padding: 15px 0 60px 0;
//   //   font-size: 1.3rem;
//   //   background-color: var(--mobile-menu-overlay-color, "rgb(0,0,0,0.95)");
//   //   border-radius: 10px;
//   //   overflow: hidden;

//   //   // a:not(.Home) {
//   //   //   display: var(--mobile-menu-display, "none");
//   //   // }

//   //   .Home {
//   //     display: flex;
//   //     z-index: 2;
//   //     font-size: 2.2rem;
//   //   }
//   // }
// `;

// const NavbarMenu = styled.div`
//   margin-left: auto;
//   display: flex;
//   height: 100%;
//   font-size: 2rem;
//   align-items: center;
//   padding: 2vw 1vw 0 0;
//   z-index: 2;

//   @media (min-width: 525px) {
//   }
// `;

function Navbar(props) {
  const { onClickNav, pageClasses } = props;
  const {
    menuDisplay,
    menuClass,
    mobileMenuOverlayColor,
    mobileMenuOverlayHeight,
  } = props.menuStyle;

  function handleClick(event, page) {
    event.preventDefault();
    onClickNav(page);
  }

  return (
    <NavbarContainer
      style={{
        "--mobile-menu-display": menuDisplay,
        "--mobile-menu-overlay-color": mobileMenuOverlayColor,
        "--mobile-menu-overlay-height": mobileMenuOverlayHeight,
      }}
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
      {/* </NavbarOverlay> */}
      {/* <NavbarMenu>
        <a href='/' className={menuClass} onClick={(e) => handleClick(e,'Menu')}>Menu</a>
      </NavbarMenu> */}
    </NavbarContainer>
  );
}

Navbar.propTypes = {
  menuDisplay: PropTypes.string,
  onClickNav: PropTypes.func,
  activePage: PropTypes.string,
  pageClasses: PropTypes.object,
  menuClass: PropTypes.string,
  menuStyle: PropTypes.object,
};

export default Navbar;
