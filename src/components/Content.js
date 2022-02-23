import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const ContentDefaultStyle = styled.div`
  display: flex;
  width: 100%;
  background-color: rgba(0,0,0,0.42);
  color: white;
  height: 100vh;  
  align-items: center;
  flex-direction: column;
  font-size: 3rem;
  h1{
    font-size: 3.9rem;
  }

  a{

  }

`;

const ContentWrapperStyle = styled.div`
  display:flex;
  background-color: rgb(232, 171, 141, 0.422);
  height: 50%;
  width: 100%;  
  align-items: center;
  justify-content: space-around;


`;

// const ContentLineStyle = styled.div`
//   flex-flow: column;
//   margin-left: 3vw;
//   font-size: 1.7rem;
//   color: rgba(0,0,0,1);
// `;



function Content(props){
  const {lines, title,bgcolor,textcolor} = props;
  
  const ContentWrapperStyle = {
  'display':'flex',
  'background-color': bgcolor,
  'height': '50%',
  'width': '100%',  
  'align-items': 'center',
  'justify-content': 'space-around',
  };

const ContentTextStyle = {
  'flex-flow': 'column',
  'margin-left': '3vw',
  'font-size': '1.7rem',
  'color': textcolor,
};

  const imageStyle = {
    'border': 'solid',
    'border-width': '2px',
    'border-color': 'white',
    'border-radius': '100%',
    'width':'450px',
    'height':'450px'
  };


  return(
    <React.Fragment>
      <ContentDefaultStyle>
        <h1 classNames='pageTitle'>{title}</h1>
        <div style={ContentWrapperStyle}>
          <div style={ContentTextStyle}>
            <h1>Currently Under Construction.</h1>
            { lines.map((line) =>
                <h3>{line.text} <a href={line.hrefURL}>{line.hrefText}</a>{line.hrefTextAfter}</h3>)
            }
          </div>

          {/* <img style={imageStyle} src={Image} alt="Headshot of Woo Jin Kim"></img> */}
        </div>
      </ContentDefaultStyle>
    </React.Fragment>
  );
};

Content.propTypes = {
  lines: PropTypes.array,
  title: PropTypes.string,
  bgcolor: PropTypes.string,
  textcolor: PropTypes.string
}

export default Content;