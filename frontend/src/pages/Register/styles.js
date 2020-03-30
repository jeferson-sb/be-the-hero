import styled from 'styled-components';
import Container from '../../components/Container';
import Content from '../../components/Content';

export const RegisterContainer = styled(Container)`
  height: 100vh;
`;

export const RegisterContent = styled(Content)`
  form {
    width: 100%;
    max-width: 450px;

    input {
      margin-top: 8px;
    }
    .input-group {
      display: flex;
    }
    .input-group input + input {
      margin-left: 8px;
    }
  }
`;
