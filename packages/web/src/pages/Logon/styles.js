import styled from 'styled-components';
import Container from '../../components/Container';

export const LogonContainer = styled(Container)`
  justify-content: space-between;
  min-height: 100vh;

  section.form {
    width: 100%;
    max-width: 350px;
    margin-right: 30px;
  }
  section.form form {
    margin-top: 100px;
    h1 {
      font-size: 32px;
      margin-bottom: 32px;
    }
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;
    margin: 0.9em;

    & > img {
      width: 80%;
      margin-top: 4px;
    }
    section.form {
      display: flex;
      flex-flow: column wrap;
    }
    section.form form {
      margin-right: 0;
      margin-top: 40px;
    }
    section.form img {
      text-align: center;
      margin-top: 20px;
    }
  }
`;
