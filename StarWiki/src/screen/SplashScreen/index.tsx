import React, { useEffect } from 'react'
import { CustomText, Logo, Container } from '../../components'

export const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 2000)
  }, [navigation])

  return (
    <Container align="center" justify="center">
      <Logo size="large" />
      <CustomText fontFamily="bold">StarWars - Wiki</CustomText>
    </Container>
  )
}
