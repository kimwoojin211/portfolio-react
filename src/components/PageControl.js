import React from 'react';
import PropTypes from "prop-types";
import Home from '../pages/Home';
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

  render(){
    // const contactHeight = (this.state.contactDisplay ? '140px' : '0px');
    // let CurrentContactState = null;
    
    // if(this.state.contactDisplay){
    //   CurrentContactState = <Contact ContactHeight='178px' ContactDisplayState='flex'/>
    // }
    // else{
    //   CurrentContactState = <Contact ContactHeight='0px' ContactDisplayState='none'/>
    // }
    return(
      <React.Fragment>
        <Navbar onClickContact={this.handleClickContact}/>
        {/* {CurrentContactState} */}
        {/* <CSSTransition in={this.state.contactDisplay} timeout={400} classNames='contact'> */}
          <Contact ContactDisplayState={this.state.contactDisplay}/>
        {/* </CSSTransition> */}
        <Home/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default PageControl;