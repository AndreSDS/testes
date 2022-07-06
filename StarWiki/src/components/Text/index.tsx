import React, { ReactNode } from 'react'
import { Text } from './styles'

interface TextProps {
  children: ReactNode
  color?: string
}

export const CustomText = ({ children, color }: TextProps) => {
  return <Text color={color}>{children}</Text>
}
