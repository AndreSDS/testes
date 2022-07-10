import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Detail, SplashScreen } from '~/screen'
import { BottomRoutes } from './bottomRoutes'

export const StackNavigator = createNativeStackNavigator()

const screenOptions = { headerShown: false }

export const StackRoutes = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={screenOptions}>
        <StackNavigator.Screen name="SplashScreen" component={SplashScreen} />
        <StackNavigator.Screen name="TabHome" component={BottomRoutes} />
        <StackNavigator.Screen name="Detail" component={Detail} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}
