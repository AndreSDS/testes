import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SplashScreen } from './src/screen/SplashScreen'
import * as SplashScreenComponent from 'expo-splash-screen'
import * as Font from 'expo-font'
import {
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
  SourceSansPro_700Bold,
  SourceSansPro_900Black,
} from '@expo-google-fonts/source-sans-pro'
import { CustomTheme } from './src/components/CustomTheme'

export default function App() {
  const customFonts = {
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SourceSansPro_700Bold,
    SourceSansPro_900Black,
  }

  const [fontsLoaded, setFonLoaded] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        await SplashScreenComponent.preventAutoHideAsync()
        await Font.loadAsync(customFonts)
        setFonLoaded(true)
      } catch (e) {
        console.warn(e)
      } finally {
        if (fontsLoaded) {
          await SplashScreenComponent.hideAsync()
        }
      }
    })()
  }, [])

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar style="auto" />
      <CustomTheme>
        <SplashScreen />
      </CustomTheme>
    </>
  )
}
