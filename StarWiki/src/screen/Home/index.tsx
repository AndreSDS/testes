import React from 'react'
import { Container, CardList, Hero } from '../../components'

export const Home = () => {
  return (
    <Container align="flex-start" justify="flex-start">
      <Hero />
      <CardList title="Personagens" />
    </Container>
  )
}
