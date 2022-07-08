import styled from 'styled-components/native'

export const TagContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.red};
  height: ${({ theme }) => theme.metrics.px(24)}px;
  max-width: ${({ theme }) => theme.metrics.px(100)}px;
  border-radius: ${({ theme }) => theme.metrics.px(24)}px;
  margin-top: ${({ mt, theme }) => theme.metrics.px([mt || 0])}px;
  margin-bottom: ${({ mb, theme }) => theme.metrics.px([mb || 0])}px;
  margin-left: ${({ ml, theme }) => theme.metrics.px([ml || 0])}px;
  margin-right: ${({ mr, theme }) => theme.metrics.px([mr || 0])}px;
`
