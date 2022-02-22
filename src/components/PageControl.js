import React from 'react';
import PropTypes from "prop-types";
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';
import {CSSTransition} from 'react-transition-group';

 

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
    console.log(`page clicked ${page}`);
    this.setState({
      currentPage: page
    });
    
    console.log(`currentpage = ${this.state.currentPage}`);
  }

  render(){
    // const contactHeight = (this.state.contactDisplay ? '140px' : '0px');
    // let CurrentContactState = null;
    // let currentPage = this.state.currentPage;

    // if(this.state.contactDisplay){
    //   CurrentContactState = <Contact ContactHeight='178px' ContactDisplayState='flex'/>
    // }
    // else{
    //   CurrentContactState = <Contact ContactHeight='0px' ContactDisplayState='none'/>
    // }

    const DisplayPage = () => {
      switch(this.state.currentPage){
      case 'Home':
        return <Home/>;
      
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
      <React.Fragment>
        <Navbar 
          onClickNav={this.handleClickNav}
          onClickContact={this.handleClickContact}/>
        <Contact ContactDisplayState={this.state.contactDisplay}/>
        {DisplayPage()}
        <Footer/>
      </React.Fragment>
    )
  }
}

export default PageControl;