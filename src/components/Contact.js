import React from 'react';
import styled from 'styled-components';
import ContactInfo from './ContactInfo';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import ContactArray from '../data/contactInfoArray';

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
  display:none;
  flex-direction: column;

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
  const contactArray = ContactArray;
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