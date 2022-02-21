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
      contactDisplay: false
    };
  }

  handleClickContact= () => {
    this.setState(prevState => ({
      contactDisplay: !prevState.contactDisplay
    }));
  }

  render(){
    let CurrentContactState = null;
    
    if(this.state.contactDisplay){
      CurrentContactState = <Contact ContactDisplayState='flex'/>
    }
    else{
      CurrentContactState = <Contact ContactDisplayState='none'/>
    }
    return(
      <React.Fragment>
        <Navbar onClickContact={this.handleClickContact}/>
        {CurrentContactState}
        <Home/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default PageControl;