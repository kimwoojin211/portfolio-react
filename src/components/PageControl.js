import React from 'react';
import PropTypes from "prop-types";
import Home from '../pages/Home';
import About from '../pages/About';
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
        {/* {CurrentContactState} */}
        {/* <CSSTransition in={this.state.contactDisplay} timeout={400} classNames='contact'> */}
          <Contact ContactDisplayState={this.state.contactDisplay}/>
        {/* </CSSTransition> */}
        {/* <Home/> */}
        {DisplayPage()}
        <Footer/>
      </React.Fragment>
    )
  }
}

export default PageControl;