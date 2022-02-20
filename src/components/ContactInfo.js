import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContactInfoStyle = styled.div`
  display: flex;
  height: 20%;
  padding: 0 50px 5px 70px;
`;

function ContactInfo(props){
  const {iconSrcURL, redirectURL, username, color} = props;
  // const iconSrcURL = 'https://pinkeyegraphics.co.uk/wp-content/uploads/gmail-new-icon.ico';
  // const redirectURL = 'mailto:kimwoojin211@gmail.com';
  // const username = 'kimwoojin211';
  // const color = 'green';
  const textShadow = '0px 0px 1px ' + color + ',0px 0px 5px ' + color + ',0px 0px 10px ' + color + ',0px 0px 20px ' + color + ',0px 0px 30px ' + color + ', 0px 0px 40px ' + color;
  
  const IconStyle = {
  'width':'36px',
  'height': '36px',
  'paddingRight':'1.5em'
  };

  const UsernameStyle = {
    'fontFamily': 'sans-serif',
    'color': 'white',
    'fontSize': '1.3rem',
    'alignSelf': 'center',
    'textShadow': textShadow
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