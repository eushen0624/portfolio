import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid #e6ae17;
  border-radius: 10px;
  padding: 30px;

  @media (max-width: 640px) {
    display: ${({ isHome }) => (!isHome ? 'none' : 'flex')};
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 200px;
  margin-right: 1rem;
  border-radius: 2px;
`;

export const ViewResumeLink = styled.a`
  display: flex;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  margin-top: 1rem;
  margin-right: 1rem;
  border: 2px solid #e6ae17;
  border-radius: 50px;
  background-color: rgba(230, 174, 23, 0.3);
  transition: background-color 250ms ease;

  &:hover {
    background-color: #e6ae17;
  }

  svg {
    fill: white;
    margin-left: 8px;
  }
`;


export const ProfileLink = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  font-size: 18px;
`
