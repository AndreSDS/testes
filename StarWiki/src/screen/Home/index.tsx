import React from 'react'
import { CardList, Hero } from '~/components'
import { ScreenScrollContainer } from '~/components/Container'
import { useDataStore } from '~/stores'

export const Home = () => {
  const {
    data: { dataFilmes, dataPersonagens },
  } = useDataStore()

  return (
    <ScreenScrollContainer>
      <Hero item={dataFilmes[0]} />
      <CardList title="Personagens" data={dataPersonagens} />
      <CardList title="Filmes" data={dataFilmes} />
    </ScreenScrollContainer>
  )
}
