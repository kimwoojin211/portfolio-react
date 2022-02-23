import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContactInfoStyle = styled.div`
  display: flex;
  height: 20%;
  padding: 0 50px 5px 57px;

  img{
      width: 36px;
      height: 36px;
  }

  a{
    font-family: sans-serif;
    color: white;
    font-size: 1.2rem;
    align-self: center;
    text-shadow: var(--text-shadow);
  }
  
  .usernameStyle{
    padding-left:1.7em;
  }
`;

function ContactInfo(props){
  const {iconSrcURL, redirectURL, username, color} = props;
  const textShadow = '0px 0px 1px ' + color + 
                    ',0px 0px 5px ' + color + 
                    ',0px 0px 10px ' + color + 
                    ',0px 0px 20px ' + color + 
                    ',0px 0px 30px ' + color + 
                    ', 0px 0px 40px ' + color;

  return(
    <ContactInfoStyle style={{'--text-shadow': textShadow}}>
      <a href={redirectURL}><img src={iconSrcURL}/></a>
      <a href={redirectURL} className='usernameStyle'>{username}</a>
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