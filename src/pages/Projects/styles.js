import styled from 'styled-components';
import { white } from '@carbon/colors';
import { blue } from '@carbon/colors';

export const ProjectItem = styled.div`
  display: block;	
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e6ae17;
`

export const ProjectTitle = styled.h4`
  font-weight: bold;
`

export const ProjectsContainer = styled.div`
  margin-top: 1.2rem;
`

export const WebsiteUrl = styled.a`
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  font-size: 12px;
  font-weight: bold;
  align-items: center;
  margin-top: 1rem;
  border: 2px solid #1790e6;
  border-radius: 50px;
  background-color: rgba(23, 144, 230, 0.3);
  transition: background-color 250ms ease;

  &:hover {
    background-color: #1790e6;
  }

  svg {
    fill: white;
    margin-left: 8px;
  }
`;

  // margin-right: 0.75rem;
  // margin-bottom: 0.75rem;
  // margin-top: 10px;
  // padding: 0.5rem 1rem;
  // background-color: ${blue[20]};
  // color: ${blue[70]};
  // border: 2px solid ${blue[70]};
  // border-radius: 50px;
  // font-weight: bold;
  // font-size: 12px;
  // text-decoration: none;