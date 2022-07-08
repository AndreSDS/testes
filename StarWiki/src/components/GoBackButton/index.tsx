import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { GoBackButtonContainer } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '~/styles'

export const GoBackButton: React.FC = () => {
  const { goBack } = useNavigation()

  return (
    <GoBackButtonContainer onPress={() => goBack()}>
      <Ionicons
        name="chevron-back"
        size={theme.metrics.px(28)}
        color={theme.colors.white}
      />
    </GoBackButtonContainer>
  )
}
