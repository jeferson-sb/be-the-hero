import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1.25rem;
    margin-left: 24px;
  }
  img {
    height: 64px;
  }
  a[class] {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }

  button {
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid var(--gray);
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;
    &:hover {
      border-color: #cecece;
    }
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style-type: none;
  padding-left: 0;

  li {
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 4px 9px rgba(0, 0, 0, 0.02);
    position: relative;

    button {
      position: absolute;
      background-color: transparent;
      right: 24px;
      top: 24px;
      &:hover svg {
        stroke: var(--primary-color);
      }
    }
    strong {
      display: block;
      margin-bottom: 1rem;
      color: #41414d;
    }
    p + strong {
      margin-top: 2rem;
    }
    p {
      color: #737380;
      line-height: 21px;
      font-size: 1rem;
    }
  }
`;
