import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '../../styles'

interface Props {
  children: ReactNode
}

export const CustomTheme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
