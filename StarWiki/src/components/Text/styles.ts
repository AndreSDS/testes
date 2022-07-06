import styled from 'styled-components/native'

export const Text = styled.Text`
  font-family: 'SourceSansPro_700Bold, sans-serif';
  font-size: 24px;
  line-height: 30px;
  color: ${({ color, theme }) => color || theme.colors.white};
  margin-top: 12px;
`
