import styled from 'styled-components';

export const StyledFilter = styled.label`
  display: flex;
  flex-direction: column;
  width: 310px;
  gap: 2px;
`;

export const Input = styled.input`
  font-family: cursive;
  height: 30px;

  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;

  border: 1px solid #e0e0e0;
  outline: none;
  border-radius: 6px;
  background: #e0e0e0;
  box-shadow: inset 11px 11px 23px #b1b1b1, inset -11px -11px 23px #ffffff;
  outline: none;
  :hover,
  :focus {
    border: 1px solid rgba(33, 33, 33, 0.35);
  }
`;
