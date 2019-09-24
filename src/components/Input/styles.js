import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  height: 46px;
  padding: 0 15px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.8)',
})`
  color: #fff
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
`;
