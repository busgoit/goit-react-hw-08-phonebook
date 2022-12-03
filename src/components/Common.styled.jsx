import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 1280px;
  padding: 0 60px;
  display: flex;
  flex-wrap: wrap;
  padding-top: 45px;
  padding-bottom: 50px;

  @media screen and (max-width: 1279px) {
    width: 768px;
  }
  @media screen and (max-width: 767px) {
    width: 480px;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  padding: 25px;
  width: 100%;

  border-radius: 20px;

  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 11px 11px 23px #b1b1b1, -11px -11px 23px #ffffff;
`;

export const MainHeading = styled.h1`
  font-size: 26px;

  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 28px;

  text-align: center;
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
    color: red;
  }

  &:active {
    color: red;
    opacity: 1;
    background: #e0e0e0;
    box-shadow: inset 11px 11px 23px #b1b1b1, inset -11px -11px 23px #ffffff;
  }
`;

export const MessageContainer = styled.div`
  height: 25px;
`;
