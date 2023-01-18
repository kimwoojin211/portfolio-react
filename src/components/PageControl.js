import React from 'react';
import styled from 'styled-components';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Shop from '../pages/Shop';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';
import HomeBackground from "../img/backgrounds/IMG_0730-2.jpg";
import AboutBackground from "../img/backgrounds/beach.jpg";
import ProjectsBackground from "../img/backgrounds/lake.jpg";
import ShopBackground from "../img/backgrounds/palmsprings.jpg";



class PageControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      // pages: {'Home':'','About':'','Projects':'','Shop':'','Contact':''},
      pages: {'Home':'','Projects':'','Contact':''},
      activePage: "Home",
      contactDisplay: false,
      menuActive: false,
      pageBackground: HomeBackground,
    };
  }      


  handleClickNav = (page) => {
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
      if(this.state.activePage !== page){
        switch (this.state.activePage) {
          case "Home":
            this.setState({pageBackground:HomeBackground});
            break;
          case "About":
            this.setState({pageBackground:AboutBackground});
            break;
          case "Projects":
            this.setState({pageBackground:ProjectsBackground});
            break;
          case "Shop":
            this.setState({pageBackground:ShopBackground});
            break;
          default:
            break;
        }
      this.setState({ activePage: page });
      }
    }
  }

  render(){
    const {pages, activePage, contactDisplay, menuActive, pageBackground} = this.state; 

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
      
      case 'Shop':
        return <Shop/>;

      default:
        // return <Projects />;
        return <Home />;
      //return <404 />;
    }
  };

    return (
      // <PageStyle style={{backgroundImage:pageBackground}}>
      <React.Fragment>
        <Navbar
          activePage={activePage}
          pageClasses={pageClasses}
          onClickNav={this.handleClickNav}
          menuStyle={menuStyles}
        />
        {/* <Contact ContactDisplayState={this.state.contactDisplay} /> */}
        {/* <PageBody> */}
          {DisplayPage()}
        {/* </PageBody> */}
        {/* <Footer/> */}
      </React.Fragment>
      // </PageStyle>
    );
  }
}

export default PageControl;