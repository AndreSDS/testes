import styled from 'styled-components/native'

export const BottomBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  height: ${({ theme }) => theme.metrics.px(64)}px;
  padding-bottom: ${({ theme }) => theme.metrics.px(4)}px 0;
`

export const BarItem = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
