import React from 'react';
import styled from 'styled-components';
import ContactInfo from './ContactInfo';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const ContactBoxStyle = styled.div`
  z-index: 1;
  position: fixed;
  borderWidth: 4px;
  borderStyle: solid;
  top:8vh;
  right:.5vw;
  width:285px;
  padding-right:15px;
  background:  rgb(0,0,0,0.64);
  border-radius:20px;
  border-color: white;
  opacity: 1;
  box-shadow: 0px 0px 1px black,
  0px 0px 8px black,
  0px 0px 10px white,
  0px 0px 20px black,
  0px 0px 30px black,
  0px 0px 45px black,
  0px 0px 50px white,
  0px 0px 60px black;
`;

 const Wrapper = styled.div`
 .contact-enter {
  height: 0px;
}
.contact-enter-active {
  height: 178px;
  transition: 0.8s;
}
.contact-exit {
  height: 178px;
}
.contact-exit-active {
  height: 0px;
  transition: 0.8s;
}
 `;

const ContactInfoContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 14px 0px; 
`;

function Contact(props){
  const {ContactDisplayState} = props;
  // const {ContactHeight, ContactDisplayState} = props;

//   const ContactBoxStyle = {
//   'z-index': '1',
//   'position': 'fixed',
//   'borderWidth': '4px',
//   'borderStyle': 'solid',
//   'top':'8vh',
//   'right':'.5vw',
//   'width':'285px',
//   // 'height': ContactHeight,
//   'padding-right':'15px',
//   'background':  'rgb(0,0,0,0.64)',
//   'border-radius':'20px',
//   'border-color': 'transparent',
//   'opacity': '1',
//   'box-shadow': '0px 0px 1px black,0px 0px 8px black,0px 0px 10px white,0px 0px 20px black, 0px 0px 30px black,0px 0px 45px black,0px 0px 50px white,0px 0px 60px black',
//   'transition': '0.77s',
//   'overflow': 'hidden',
// };

  console.log("ContactDisplayState =" + ContactDisplayState);
  // console.log("contactboxstyle display =" + ContactBoxStyle.display);
  return(
    <Wrapper>
      <CSSTransition
        in={ContactDisplayState} 
        timeout={400} 
        classNames='contact'>
        <ContactBoxStyle>
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
        </ContactBoxStyle>
      </CSSTransition>
    </Wrapper>
  );
}

Contact.propTypes = {
  ContactDisplayState: PropTypes.bool,
  // ContactHeight: PropTypes.string,
}

export default Contact;