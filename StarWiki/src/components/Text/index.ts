import styled from 'styled-components/native'

export const CustomText = styled.Text`
  font-size: ${({ theme, size }) => theme.metrics.px(size || 24)}px;
  font-family: ${({ theme, fontFamily }) =>
    theme.fonts[fontFamily || 'regular']};
  color: ${({ color, theme }) => theme.colors[color || 'white']};
  margin-top: ${({ mt, theme }) => theme.metrics.px([mt || 0])}px;
  margin-bottom: ${({ mb, theme }) => theme.metrics.px([mb || 0])}px;
  margin-left: ${({ ml, theme }) => theme.metrics.px([ml || 0])}px;
  margin-right: ${({ mr, theme }) => theme.metrics.px([mr || 0])}px;
  line-height: ${({ lh, theme }) =>
    lh ? `${theme.metrics.px(lh)}px` : 'normal'};
`
