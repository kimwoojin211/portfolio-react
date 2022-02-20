import React from 'react';
import styled from 'styled-components';

const ContactInfoStyle = styled.div`
  display: flex;
  margin: 20px 10px 0 38px;
  height: 20%;
  
`;

function ContactInfo(){
  const IconStyle = {
  'width':'45px',
  'height':'45px',
  'paddingRight':'45px'
  };

  const UsernameStyle = {
    'font-family': 'sans-serif',
    'color': 'white',
    'font-size': '1.4rem',
    'align-self': 'center'
  };

  return(
    <ContactInfoStyle>
      <a href="mailto:kimwoojin211@gmail.com">
        <img src="https://pinkeyegraphics.co.uk/wp-content/uploads/gmail-new-icon.ico" alt="Gmail" style={IconStyle}/>
      </a>
      <a href="mailto:kimwoojin211@gmail.com" style={UsernameStyle}>kimwoojin211</a>
    </ContactInfoStyle>
  );
}

export default ContactInfo;

// ContactInfo: iconUrl, redirectURL, username, color