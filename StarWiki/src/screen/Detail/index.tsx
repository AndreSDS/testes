import React from 'react'
import { View } from 'react-native'
import { CustomText, GoBackButton, Hero } from '~/components'
import { ScreenScrollContainer } from '~/components/Container'
import { useDataStore } from '~/stores'

export const Detail = () => {
  const { selectedData } = useDataStore()

  return (
    <ScreenScrollContainer>
      <GoBackButton />
      <Hero item={selectedData} onDetail />
      <View style={{ marginHorizontal: 24 }}>
        <CustomText size={18} fontFamily="black">
          Descrição
        </CustomText>
        <CustomText mt={12} size={14} lh={20} fontFamily="regular">
          {selectedData.description}
        </CustomText>
      </View>
    </ScreenScrollContainer>
  )
}
