import React from 'react'
import { GoBackButton, Hero } from '~/components'
import { ScreenScrollContainer } from '~/components/Container'
import { useDataStore } from '~/stores/DataStore'

export const Detail = () => {
  const { selectedData } = useDataStore()
  return (
    <ScreenScrollContainer>
      <GoBackButton />
      <Hero item={selectedData} onDetail />
    </ScreenScrollContainer>
  )
}
