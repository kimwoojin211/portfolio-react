import React from 'react';
import styled from 'styled-components';
import ContentUC from '../components/ContentUC';
import ProjectBackground from '../img/lake.jpg';

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


const ProjectStyle = styled.div`
  width:100%;
  height:100vh;
  background-image: url(${ProjectBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  };
`;

function Projects(){
  return(
    <ProjectStyle>
      <ContentUC
        lines = {lines}
        title = 'Projects'
        bannerColor = 'rgb(27, 28, 43, 0.5)'
        lineTextColor = 'white'
        lineLinkColor = '#92cc7c'
        />
    </ProjectStyle>
  );
}

export default Projects;