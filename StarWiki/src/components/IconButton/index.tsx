import React from 'react'
import { CustomText } from '../Text'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '~/styles/theme'
import { IconButtonContainer } from './styles'

interface IconButtonProps {
  iconName: any | string
  label: string
  onPress: () => void
}

export const IconButton = ({ iconName, label, onPress }: IconButtonProps) => {
  return (
    <IconButtonContainer testID={label} onPress={onPress}>
      <Ionicons
        name={iconName}
        size={theme.metrics.px(24)}
        color={theme.colors.white}
      />
      <CustomText fontFamily="semiBold" size={10} mt={6}>
        {label}
      </CustomText>
    </IconButtonContainer>
  )
}
