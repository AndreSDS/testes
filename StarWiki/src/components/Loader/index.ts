import styled from 'styled-components/native'

export const Loader = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.red,
  size: 'large',
}))`
  flex: 1;
  justify-content: center;
  flex-direction: row;
  justify-content: space-around;
  padding: ${({ theme }) => theme.metrics.px(10)}px;
  background-color: ${({ theme }) => theme.colors.dark};
`
