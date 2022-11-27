import styled from 'styled-components';
import Container from '../../components/Container';
import Content from '../../components/Content';

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
