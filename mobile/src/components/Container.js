import styled from 'styled-components/native';
import Constants from 'expo-constants';

const Container = styled.View`
  flex: 1;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export default Container;
