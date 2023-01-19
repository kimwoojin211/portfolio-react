import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContactInfoStyle = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
  margin-bottom: 0.4rem;

  img {
    width: 22px;
    height: 22px;

    @media (min-width: 768px) {
      width: 33px;
      height: 33px;
    }
  }

  a {
    font-family: sans-serif;
    color: white;
    font-size: 0.90125rem;
    align-self: center;
    text-shadow: var(--text-shadow, none);

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }

  .usernameStyle {
    padding-left: 1.7em;
    width: 75%;
  }

  .contactIcon {
    width: 30%;
    display: flex;
    justify-content: flex-end;
    img {
      margin: 0;
    }
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
      <a href={redirectURL} className="contactIcon"><img src={iconSrcURL}/></a>
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