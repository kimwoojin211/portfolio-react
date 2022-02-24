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

// const NavHomeStyle = styled.div`
//   display:flex;
//   font-size: 1.7em;
//   margin: 1rem;
//   font-family: 'Neonderthaw';

// `;

// const NavTextStyle = styled.div`
//   display:flex;
//   width:100%;
//   justify-content: flex-end;
//   font-size: 1em;
//   margin:0.4em;

//   a{
//     margin:0.5em;
//   }

// `;

// const NavLink = styled.a`  
//   color: white;
//   text-shadow: 0px 0px 5px white,
//     0px 0px 10px white,
//     0px 0px 20px white;
// }
  
// `;

function Navbar(props){
  const {onClickNav, onClickContact, activePage} = props;
  // console.log('navActiveStyle= ' + navActiveStyle +  '`(${typeof navActiveStyle})`');
  // const navActive = JSON.parse(navActiveStyle);
  // console.log(currentPage);

  // const navActive = styled.a``

  //   '.${currentPage}.color': 'white',
  //   '.${currentPage}.text-shadow': '0px 0px 5px white, 0px 0px 10px white, 0px 0px 20px white;'
  // // };
  // console.log(navActive);

  function handleClick(event,page){
    console.log('event= ' + event.target.className);
    event.preventDefault();
    console.log('page= ' + page);
    onClickNav(page);
    //add class somewhere for when page is active and text is glowing and remove when page no longer active
  } 
  return(
    <NavbarContainer>
        <a href='/' className='Home' onClick={(e) => handleClick(e,'Home')}>Home</a>
        <a href='/' className='navAbout' onClick={(e) => handleClick(e,'About')}>About</a>
        <a href='/' className='navProjects' onClick={(e) => handleClick(e,'Projects')}>Projects</a>
        <a href='/' className='navSkills' onClick={(e) => handleClick(e,'Skills')}>Skills</a>
        <a href='/' className='navContact' onClick={(e) => onClickContact(e)}>Contact</a>
    </NavbarContainer>
  );
}

Navbar.propTypes = {
  onClickContact: PropTypes.func,
  onClickNav: PropTypes.func,
  // navActiveStyle: PropTypes.string
  activePage: PropTypes.string,
}

export default Navbar;

// think about using Route Router