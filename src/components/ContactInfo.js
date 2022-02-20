import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContactInfoStyle = styled.div`
  display: flex;
  margin: 20px 10px 0 38px;
  height: 20%;
  
`;

function ContactInfo(props){
  // const {iconSrcUrl, redirectURL, username, color} = props;
  const iconSrcURL = 'https://pinkeyegraphics.co.uk/wp-content/uploads/gmail-new-icon.ico';
  const redirectURL = 'mailto:kimwoojin211@gmail.com';
  const username = 'kimwoojin211';
  const color = 'green';
  const textShadow = '0px 0px 1px ' + color + ',0px 0px 5px ' + color + ',0px 0px 10px ' + color + ',0px 0px 20px ' + color + ',0px 0px 30px ' + color + ', 0px 0px 40px ' + color;
  
  const IconStyle = {
  'width':'auto',
  'height':'90%',
  'paddingRight':'1.5em'
  };

  const UsernameStyle = {
    'font-family': 'sans-serif',
    'color': 'white',
    'font-size': '1.35rem',
    'align-self': 'center',
    'text-shadow': textShadow
  };

  return(
    <ContactInfoStyle>
      <a href={redirectURL}>
        <img src={iconSrcURL} alt="Gmail" style={IconStyle}/>
      </a>
      <a href={redirectURL} style={UsernameStyle}>{username}</a>
    </ContactInfoStyle>
  );
}

ContactInfo.propTypes = {
  iconSrcURL: PropTypes.string,
  redirectURL: PropTypes.string,
  username: PropTypes.string,
  color: PropTypes.string,
}

export default ContactInfo;

// ContactInfo: iconUrl, redirectURL, username, color