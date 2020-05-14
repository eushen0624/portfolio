import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, ProjectsContainer, WebsiteUrl } from './styles';
import { BsArrowRight } from "react-icons/bs";

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Major Projects</SectionTitle>
        <ProjectsContainer>
          <ProjectItem>
            <h4>BookMark</h4>
            
            <p>The goal of the project is to allow customers to easily search and purchase books using their computers or mobile devices.</p>
            <div style={{ 'margin-top' : '15px', 'margin-bottom' : '3px', 'margin-left' : '5px'}}>
                <WebsiteUrl href="https://eushencodes.gitlab.io/capstone1/#Best-seller" target="_blank" rel="noreferrer noopener">
                  View Website<BsArrowRight />
                </WebsiteUrl>
            </div>
          </ProjectItem>
          <ProjectItem>
            <h4>BookShelf</h4>
            <p>BookShelf is an online buying and selling app.</p>
            <div style={{ 'margin-top' : '15px', 'margin-bottom' : '3px', 'margin-left' : '5px'}}>
              <WebsiteUrl href="http://polar-forest-75871.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                  View Website<BsArrowRight />
              </WebsiteUrl>
            </div>
          </ProjectItem>
          <ProjectItem>
            <h4>Giji</h4>
            <p>Giji is a hotel booking app that allows customers to view hotels rooms and make reservation though their devices.</p>
            <div style={{ 'margin-top' : '15px', 'margin-bottom' : '3px', 'margin-left' : '5px'}}>
              <WebsiteUrl href="#" target="_blank" rel="noreferrer noopener">
                  View Website<BsArrowRight />
              </WebsiteUrl>
            </div>
          </ProjectItem>
        </ProjectsContainer>
      </div>
    </Layout>
  );
};

export default Projects;
