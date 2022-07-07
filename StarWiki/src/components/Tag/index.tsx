import React, { ReactNode } from 'react'
import { CustomText } from '..'
import { TagContainer } from './styles'

interface TagProps {
  children: ReactNode
}

export const Tag = ({ children }: TagProps) => (
  <TagContainer>
    <CustomText fontFamily="bold" size={14}>
      {children}
    </CustomText>
  </TagContainer>
)
