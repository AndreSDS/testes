import styled from 'styled-components/native'

const sizes = {
  small: 28,
  large: 64,
}

export const LogoImage = styled.Image`
  width: ${({ size, theme }) => theme.metrics.px(sizes[size || 'large'])}px;
  height: ${({ size, theme }) => theme.metrics.px(sizes[size || 'large'])}px;
`
