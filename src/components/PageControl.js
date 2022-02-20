import React from 'react';
import PropTypes from "prop-types";
import Home from '../pages/Home';
import Navbar from './Navbar';
import Footer from './Footer';

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
  render(){
    return(
      <React.Fragment>
        <Navbar/>
        <Home/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default PageControl;