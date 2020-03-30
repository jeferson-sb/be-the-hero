import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: var(--bg-color);
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  section {
    width: 100%;
    max-width: 380px;
    h1 {
      margin: 64px 0 32px;
      font-size: 32px;
    }
    p {
      font-size: 18px;
      color: #737380;
      line-height: 32px;
    }
  }
`;

export const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  border: 0;
  width: 100%;
  height: 60px;
  background: var(--primary-color);
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  text-align: center;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.4s ease-in-out;
  &:hover {
    filter: brightness(90%);
  }
`;

export const ButtonLink = styled(Link)`
  display: inline-block;
  cursor: pointer;
  border: 0;
  width: 100%;
  height: 60px;
  background: var(--primary-color);
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  text-align: center;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.4s ease-in-out;
  &:hover {
    filter: brightness(90%);
  }
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #41414d;
  font-size: 18px;
  font-weight: 500;
  transition: opacity 0.2s;
  svg {
    margin-right: 8px;
  }
  &:hover {
    opacity: 0.8;
  }
`;
