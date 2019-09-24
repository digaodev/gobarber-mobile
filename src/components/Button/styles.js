import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;

  background: #fff;
  border-radius: 4px;
  height: 46px;
`;

export const Text = styled.Text`
  color: #7159c1;
  font-weight: bold;
  font-size: 16px;
`;
