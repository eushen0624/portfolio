import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell';


import { StyledSideNav, myIcon } from './styles';

const items = [
  { name: 'About Me', path: '/' },
  { name: 'Projects', path: '/projects' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side navigation">
      <myIcon style={{'margin-left': '1rem','margin-top': '1rem','font-family': 'Abril Fatface', 'color': '#e6ae17', 'font-size': '70px'}}>E</myIcon>
      <SideNavItems>
        {items.map(i => (
          <SideNavLink
            isActive={
              location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
            }
            element={Link}
            to={i.path}
            key={i.name}
          >
            {i.name}
          </SideNavLink>
        ))}
      </SideNavItems>
    </StyledSideNav>
  );
};

export default Sidebar;
