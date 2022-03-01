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
  height:auto;
  color: #008080;
  display:flex;
  flex-direction: column;
  background-color:white;
  font-size: 14px;
  
  @media (max-width: 320px) {
    width:320px;
  }

  @media (max-width: 768px) {
    font-size:12px;
  }
`;

class PageControl extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      pages: {'Home':'','About':'','Projects':'','Skills':'','Contact':''},
      activePage: 'Home',
      contactDisplay: false,
      menuActive: false,  
    };
  }      

  handleMenu = () => {

  }

  handleClickContact= () => {
    this.setState(prevState => ({
      contactDisplay: !prevState.contactDisplay
    }));
  }

  handleClickNav= (page) => {
    if (page === 'Contact'){
      this.setState(prevState => ({
      contactDisplay: !prevState.contactDisplay}))
    }
    else {
      this.setState({activePage: page});
    }
  }


  render(){
    const {pages, activePage, contactDisplay} = this.state;
    const pageClasses = {...pages, 
                          [`${activePage}`]:' active', 
                          'Contact': `${contactDisplay ? ' active':''}`
                        };
    console.log({pageClasses});
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
          onClickContact={this.handleClickContact}/>
        <Contact ContactDisplayState={this.state.contactDisplay}/>
        {DisplayPage()}
        <Footer/>
      </PageStyle>
    )
  }
}

export default PageControl;