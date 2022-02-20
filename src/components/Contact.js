import React from 'react';
import styled from 'styled-components';
import ContactInfo from './ContactInfo';

// i'd want a different function for mobile to have it cover the whole screen, rather than keep a box that obstructs view.

const ContactBox = styled.div`
  z-index: 1;
  position: fixed;
  borderWidth: 4px;
  borderStyle: solid;
  align-items: stretch;
  top:80px;
  right:10px;
  width:300px;
  height:220px;
  background: black;
  border-radius:20px;
  border-color: #4B4C4B;
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

const ContactInfoContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 13px 0px; 

`;

function Contact(){
  return(
    <React.Fragment>
      <ContactBox>
        <ContactInfoContainer>
          <ContactInfo
          iconSrcURL = 'https://img.icons8.com/color/344/twitch--v2.png'
          redirectURL = 'mailto:kimwoojin211@gmail.com'
          username = 'Twitch'
          color = 'rgb(169, 112, 255)'/>
          
          <ContactInfo
          iconSrcURL = 'https://cdn.iconscout.com/icon/free/png-256/discord-2752210-2285027.png'
          redirectURL = 'https://discord.com/app'
          username = 'Discord'
          color = 'rgb(169, 112, 255)'/>

          <ContactInfo
          iconSrcURL = 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg'
          redirectURL = 'https://linkedin.com'
          username = 'Linkedin'
          color = 'rgb(6, 175, 175)'/>

          <ContactInfo
          iconSrcURL = 'https://pinkeyegraphics.co.uk/wp-content/uploads/gmail-new-icon.ico'
          redirectURL = 'https://www.gmail.com'
          username = 'Gmail'
          color = 'green'/>
        </ContactInfoContainer>
      </ContactBox>
    </React.Fragment>
  );
}


export default Contact;