import styled from 'styled-components';
import { Container, Content } from '../../assets/styles/components';

export const NewIncidentContainer = styled(Container)`
  height: 100vh;
`;

export const NewIncidentContent = styled(Content)`
  form {
    width: 100%;
    max-width: 450px;
  }
  form input,
  form textarea {
    margin-top: 8px;
  }
`;
