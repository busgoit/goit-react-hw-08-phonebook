import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  gap: 30px;
`;

export const StyledNavLink = styled(NavLink)`
  margin-left: 20px;
  padding: 15px;
  font-size: 18px;

  border: none;
  border-radius: 10px;

  color: #010101;

  cursor: pointer;
  text-decoration: none;
  outline: none;

  transition: 0.2s ease-in-out;

  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 11px 11px 23px #b1b1b1, -11px -11px 23px #ffffff;

  &:hover {
    opacity: 0.5;
    color: green;
  }

  &:active {
    color: green;
    opacity: 1;
    background: #e0e0e0;
    box-shadow: inset 11px 11px 23px #b1b1b1, inset -11px -11px 23px #ffffff;
  }
`;
