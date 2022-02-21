import React from 'react';
import PropTypes from "prop-types";
import Home from '../pages/Home';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';

class PageControl extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      pages: ['Home','About','Projects','Skill'],
      currentPage: 'Home',
      contactActive: false
    };
  }

  handleClickContact= () => {
    this.setState(prevState => ({
      contactActive: !prevState.contactActive
    }));
  }

  handleScroll = () => {
    //onkeydown onwheel, put short delay so people don't accidentally scroll fast back and forth (ondrag for mobile)
  }

  render(){
    let currentContactState = null;
    
    if(this.state.contactActive){
      // currentContactState = <Contact display='flex'/>
      console.log('yup');
    }
    else{
      // currentContactState = <Contact display='none'/>
      console.log('nope');
    }
    return(
      <React.Fragment>
        <Navbar onClickContact={this.handleClickContact}/>
        <Contact/>
        <Home/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default PageControl;