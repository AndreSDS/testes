import React from 'react'
import { CustomText } from '../Text'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '~/styles/theme'

import { PlayButtonContainer } from './styles'

interface PlayButtonProps {
  onPress: () => void
}

export const PlayButton = ({ onPress }: PlayButtonProps) => {
  return (
    <PlayButtonContainer onPress={onPress}>
      <Ionicons
        name="ios-play"
        size={theme.metrics.px(18)}
        color={theme.colors.black}
      />
      <CustomText
        fontFamily="bold"
        color={theme.colors.black}
        size={theme.metrics.px(12)}
      >
        Assitir
      </CustomText>
    </PlayButtonContainer>
  )
}
