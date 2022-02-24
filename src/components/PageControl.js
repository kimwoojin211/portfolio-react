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
`;

class PageControl extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      currentPage: 'Home',
      contactDisplay: false
    };
  }

  handleClickContact= () => {
    this.setState(prevState => ({
      contactDisplay: !prevState.contactDisplay
    }));
  }

  handleClickNav= (page) => {
    this.setState({
      currentPage: page
    });
  }

  render(){

    const DisplayPage = () => {
      switch(this.state.currentPage){

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
          activePage={this.state.currentPage}
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