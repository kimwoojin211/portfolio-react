import React from 'react';
import styled from 'styled-components';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';

const PageStyle = styled.div`
  width:100%;
  min-width: 320px;
  height:auto;
  color: #008080;
  display:flex;
  flex-direction: column;
  background:black;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size:12px;
  }
`;


class PageControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pages: {'Home':'','About':'','Projects':'','Skills':'','Contact':''},
      activePage: 'Home',
      contactDisplay: false,
      menuActive: false,  
    };
  }      


  handleClickNav= (page) => {
    if (page === 'Menu'){ // mobile mode, screen is <525px wide;
      this.setState(prevState => ({
      menuActive: !prevState.menuActive, contactDisplay: false}))
    }
    else if (page === 'Contact'){
      this.setState(prevState => ({
      contactDisplay: !prevState.contactDisplay, menuActive: false}))
    }
    else {
      if(this.state.menuActive){
        this.setState({contactDisplay:false, menuActive: false});
      }
      this.setState({activePage: page});
    }
  }


  render(){
    const {pages, activePage, contactDisplay,menuActive} = this.state; 

    const menuStyles = {
        'menuDisplay': `${menuActive? 'flex' : 'none'}`,
        'menuClass': `${menuActive? 'Menu active' : 'Menu'}`,
        'mobileMenuOverlayColor' : `${menuActive? 'rgb(0,0,0,0.95)' : 'transparent'}`,
        'mobileMenuOverlayHeight' : `${menuActive? '100vh' : '100%'}`,

    }

    const pageClasses = {...pages, 
                          [`${activePage}`]:' active', 
                          'Contact': `${contactDisplay ? ' active':''}`
                        };
                        
    const DisplayPage = () => {
      switch(activePage){

      case 'About':
        return <About/>;

      case 'Projects':
        return <Projects/>;
      
      case 'Skills':
        return <Skills/>;

      default:
        return <Home/>;
      //return <404 />;
    }
  };

    return(
      <PageStyle>
        <Navbar 
          activePage={activePage}
          pageClasses={pageClasses}
          onClickNav={this.handleClickNav}
          menuStyle= {menuStyles}
          />
        <Contact ContactDisplayState={this.state.contactDisplay}/>
        {DisplayPage()}
        <Footer/>
      </PageStyle>
    )
  }
}

export default PageControl;