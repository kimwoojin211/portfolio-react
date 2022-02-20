import React from 'react';
import styled from 'styled-components';
import ContactInfo from './ContactInfo';

const ContactBox = styled.div`
  z-index: 1;
  position: fixed;
  borderWidth: 4px;
  borderStyle: solid;
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
`;

const ContactInfoContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 14px 0px; 
`;

function Contact(){
  return(
    <React.Fragment>
      <ContactBox>
        <ContactInfoContainer>
          <ContactInfo
          iconSrcURL = 'https://img.icons8.com/color/344/twitch--v2.png'
          redirectURL = 'https://twitch.tv/w00j__'
          username = 'w00j__'
          color = 'rgb(169, 112, 255)'/>
          
          <ContactInfo
          iconSrcURL = 'https://cdn.iconscout.com/icon/free/png-256/discord-2752210-2285027.png'
          redirectURL = 'https://discord.com/app'
          username = 'Wooj#3015'
          color = 'rgb(96, 179, 247)'/>

          <ContactInfo
          iconSrcURL = 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg'
          redirectURL = 'https://linkedin.com/in/kimwoojin211'
          username = 'kimwoojin211'
          color = 'rgb(6, 175, 175)'/>

          <ContactInfo
          iconSrcURL = 'https://pinkeyegraphics.co.uk/wp-content/uploads/gmail-new-icon.ico'
          redirectURL = 'mailto:kimwoojin211@gmail.com'
          username = 'kimwoojin211'
          color = 'green'/>
        </ContactInfoContainer>
      </ContactBox>
    </React.Fragment>
  );
}


export default Contact;