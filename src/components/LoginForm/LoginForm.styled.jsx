import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 310px;
  align-items: flex-end;
`;

export const ContactFormLabel = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ContactFormInput = styled(Field)`
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

export const StyledErrorMsg = styled(ErrorMessage)`
  margin: 0;
  font-size: 12px;
  color: #ac3235;
  align-self: flex-start;
`;

export const Button = styled.button`
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
