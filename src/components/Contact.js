import React from 'react';
import styled from 'styled-components';
import ContactInfo from './ContactInfo';

// i'd want a different function for mobile to have it cover the whole screen, rather than keep a box that obstructs view.

const ContactBox = styled.div`
  z-index: 1;
  position: fixed;
  border-width: 4px;
  border-style: solid;
  align-items: stretch;
  top:80px;
  right:10px;
  width:300px;
  height:220px;
  background: black;
  border-radius:20px;
  opacity: 0.73;
  box-shadow: 0px 0px 1px black,
  0px 0px 8px black,
  0px 0px 10px white,
  0px 0px 20px black,
  0px 0px 30px black,
  0px 0px 45px black,
  0px 0px 50px white,
  0px 0px 60px black;
  // display: none;
  // transition: top 0.3s ease-in-out;
`;

function Contact(){
  return(
    <React.Fragment>
      <ContactBox>
        <ContactInfo
          iconSrcURL = 'https://pinkeyegraphics.co.uk/wp-content/uploads/gmail-new-icon.ico'
          redirectURL = 'mailto:kimwoojin211@gmail.com'
          username = 'kimwoojin211'
          color = 'green'/>
      </ContactBox>
    </React.Fragment>
  );
}


export default Contact;