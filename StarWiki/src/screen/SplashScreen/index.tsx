import { CustomText, Logo } from '../../components'
import { theme } from '../../styles'

import { Container } from './styles'

export const SplashScreen = () => {
  return (
    <Container>
      <Logo />
      <CustomText>StarWars - Wiki</CustomText>
    </Container>
  )
}
