import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'

export const HeroContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(460)}px;
`
export const HeroImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`

export const HeroGradient = styled(LinearGradient)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 ${({ theme }) => theme.metrics.px(24)}px;
  padding-top: ${({ theme }) => theme.metrics.px(28)}px;
`

export const HeroHeadertContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${({ theme }) => theme.metrics.px(330)}px;
`

export const TitleContainer = styled.View`
  height: ${({ theme }) => theme.metrics.px(87)}px;
`

export const ButtonView = styled.View`
  display: flex;
  width: 100%;
  margin-top: ${({ theme }) => theme.metrics.px(8)}px;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`
