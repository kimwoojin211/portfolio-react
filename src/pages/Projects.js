import React from 'react';
import styled from 'styled-components';
import Content from '../components/Content';
import ProjectBackground from '../img/lake.jpg';


const ProjectStyle = styled.div`
  font-size: 1.2em;
  width:100%;
  height:100vh;
  background-image: url(${ProjectBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  };
`;

function Projects(){
  const line1 = {
    'text':'Check out my ',
    'hrefURL':'https://www.github.com/kimwoojin211',
    'hrefText':'Github',
    'hrefTextAfter':' to see all my public coding projects.'
  };
  const line2 = {
      'text':'Take a look through my ',
      'hrefURL':'https://kimwoojin211.github.io/portfolio/cv.html',
      'hrefText':'CV', 
      'hrefTextAfter':' to see a list of projects and roles I participated in.'};

  const lines = [line1, line2];

  return(
    <ProjectStyle>
      <Content
        lines = {lines}
        title = 'Projects'
        bgcolor = 'rgb(27, 28, 43, 0.5)'
        textcolor = 'white'
        />
    </ProjectStyle>
  );
}

export default Projects;