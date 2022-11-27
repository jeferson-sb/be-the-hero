import styled from 'styled-components';

const Button = styled.button`
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

export default Button;
