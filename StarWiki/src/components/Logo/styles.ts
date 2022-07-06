import styled from 'styled-components/native'

type LogoProps = {
  width: number | string
  height: number | string
}

export const LogoImage = styled.Image<LogoProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`
