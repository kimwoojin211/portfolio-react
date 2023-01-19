import React from 'react';
import styled from 'styled-components';
import ContactInfo from './ContactInfo';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

//Array passes on info to contactinfo per platform
const contactArray = [
  {
    //Twitch
    iconSrcURL: "https://img.icons8.com/color/344/twitch--v2.png",
    redirectURL: "https://twitch.tv/w00j__",
    username: "w00j__",
    color: "rgb(169, 112, 255)",
  },
  //Discord
  {
    iconSrcURL:
      "https://cdn.iconscout.com/icon/free/png-256/discord-2752210-2285027.png",
    redirectURL: "https://discord.com/app",
    username: "wooj#3015",
    color: "rgb(96, 179, 247)",
  },
  //Linkedin
  {
    iconSrcURL:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",
    redirectURL: "https://linkedin.com/in/kimwoojin211",
    username: "kimwoojin211",
    color: "rgb(6, 175, 175)",
  },
  //Gmail
  {
    iconSrcURL:
      "https://pinkeyegraphics.co.uk/wp-content/uploads/gmail-new-icon.ico",
    redirectURL: "mailto:kimwoojin211@gmail.com",
    username: "kimwoojin211",
    color: "green",
  },

  //     //Instagram
  // {
  //   'iconSrcURL' : 'https://freeiconshop.com/wp-content/uploads/edd/instagram-new-flat.png',
  //   'redirectURL' : 'www.instagram.com/w00j__',
  //   'username' : 'w00j__',
  //   'color' : 'rgb(202 6 202)'
  // }
];

//Wrapper for Contact box, with styling for CSS Transition
const ContactWrapper = styled.div`
  position: fixed;
  top: 3rem;
  right: 0.5vw;
  width: 180px;
  height: 9rem;
  padding-right: 0.5vw;

  @media (min-width: 768px) {
    top: 3.5rem;
    width: 240px;
    height: 11.5rem;
  }

  // @media (max-width: 525px) {
  //   top:0;
  //   right:0;
  //   height:100vh;
  //   width:100vw;
  //   display:flex;

  // }

  .contact-enter {
    height: 0;
    opacity: 0;
    display: flex;
  }
  .contact-enter-active {
    height: 100%;
    opacity: 1;
    transition: opacity 1.4s, height 1s;
  }
  .contact-enter-done {
    height: 100%;
    opacity: 1;
    display: flex;
  }
  .contact-exit {
    height: 100%;
    opacity: 1;
    display: flex;
  }
  .contact-exit-active {
    height: 0px;
    opacity: 0;
    transition: opacity 0.5s, height 1s;
  }
  .contact-exit-done {
    height: 0px;
    opacity: 0;
    display: none;
  }
`;
// rgb(169, 112, 255);
// rgb(96, 179, 247);
// rgb(6, 175, 175);
// green;
//Contact box styling
const ContactBox = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 1rem;
  background: rgb(0, 33, 23, 0.96);
  border: 3px solid #c2c47f;
  border-radius: 20px;
  opacity: 1;
  box-shadow: 0px 0px 10px inset #004933, 0px 0px 15px inset #004933,
    0px 10px 15px inset #004933, 0px -2px 2px inset black, 0px 0px 1px black,
    0px 0px 13px #00ce97, 0px 0px 10px black, 0px 0px 20px black,
    0px 0px 30px black, 0px 0px 45px black, 0px 0px 50px #00ce97;
  // display:none;
  flex-direction: column;

  // @media (max-width: 525px) {
  //   background:  rgb(0,0,0,0.94);
  //   align-items: center;
  //   padding-top: 9vh;
  // }

  div:first-child {
    // border: 1px solid red;
    margin-top: 0.2rem;
    @media (min-width: 768px) {
      margin-top: 0.4rem;
    }
  }
`;

function Contact(props){
  const {ContactDisplayState} = props; //bool to toggle contact box visibility

  return (
    <ContactWrapper>
      <CSSTransition
        in={ContactDisplayState}
        timeout={{ enter: 950, exit: 400 }}
        classNames="contact"
      >
        <ContactBox>
          {contactArray.map((contact, i) => (
            <ContactInfo
              key={i}
              iconSrcURL={contact.iconSrcURL}
              redirectURL={contact.redirectURL}
              username={contact.username}
              color={contact.color}
            />
          ))}
        </ContactBox>
      </CSSTransition>
    </ContactWrapper>
  );
}

Contact.propTypes = {
  ContactDisplayState: PropTypes.bool,
}

export default Contact;