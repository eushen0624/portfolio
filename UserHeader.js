import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';  

import { HeaderContainer, Header, Image, ViewResumeLink } from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <Header>
        <Image src={user.basics.picture} />
        <div>
          <h2>Eushen Mae Y. Jungaya</h2>
          <p>Web Developer</p>
          <p>98 Cityland 8, Gil Puyat, Pio Del Pilar, Makati City</p>
          <p>+639565381405</p>
        </div>
      </Header>
      <div>
        <ViewResumeLink
          href={`https://drive.google.com/file/d/1GW54JpbEvrSCxccJz5YoMIXIdcVxyQ42/view?usp=sharing`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Resume</span>
          <ArrowRight16 />
        </ViewResumeLink>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;

// https://drive.google.com/file/d/1GW54JpbEvrSCxccJz5YoMIXIdcVxyQ42/view?usp=sharing

//https://gitconnected.com/${user.basics.username}/resume