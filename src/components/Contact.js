import React from 'react';
import styled from 'styled-components';
import ContactInfo from './ContactInfo';

// i'd want a different function for mobile to have it cover the whole screen, rather than keep a box that obstructs view.

const ContactBox = styled.div`
  z-index: 1;
  position: fixed;
  border-width: 4px;
  border-style: solid;
  align-items: stretch;
  top:80px;
  right:10px;
  width:300px;
  height:220px;
  background: black;
  border-radius:20px;
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

function Contact(){
  return(
    <React.Fragment>
      <ContactBox>
        <ContactInfo/>
      </ContactBox>
    </React.Fragment>
  );
}

export default Contact;

{/* <div id="contactBox">
      <div class="contactIcons col-4">
        <a href="https://www.instagram.com/w00j_w00j" class="ig icons"><img class="ig icons"
            src="https://freeiconshop.com/wp-content/uploads/edd/instagram-new-flat.png" alt="Instagram"></a>
        <a class="discord icons" href="https://discord.com/channels/@me"><img class="discord icons"
            src="https://cdn.iconscout.com/icon/free/png-256/discord-2752210-2285027.png" alt="Discord"></a>
        <a class="linkedin icons" href="https://www.linkedin.com/in/kimwoojin211/"><img class="linkedin icons"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg" alt="Linkedin"></a>
        <a class="gmail icons" href="mailto:kimwoojin211@gmail.com"><img class="gmail icons"
            src="https://pinkeyegraphics.co.uk/wp-content/uploads/gmail-new-icon.ico" alt="Gmail"></a>
      </div>
      <div class="contactInfo col-8">
        <a class="usernames ig" href="https://www.instagram.com/w00j_w00j">w00j_w00j</a>
        <a class="usernames discord" href="https://discord.com/channels/@me">Wooj#3015</a>
        <a class="usernames linkedin" href="https://www.linkedin.com/in/kimwoojin211/">kimwoojin211</a>
        <a class="usernames gmail" href="mailto:kimwoojin211@gmail.com">kimwoojin211</a>
      </div>
    </div> */}