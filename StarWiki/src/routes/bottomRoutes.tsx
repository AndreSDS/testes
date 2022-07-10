import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Favorites, Home, Search } from '~/screen'
import { BottomBar } from '~/components'

export const TabNavigator = createBottomTabNavigator()

export const BottomRoutes = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomBar {...props} />}
    >
      <TabNavigator.Screen name="Home" component={Home} />
      <TabNavigator.Screen
        options={{
          tabBarLabel: 'Perquisar',
        }}
        name="Search"
        component={Search}
      />
      <TabNavigator.Screen
        options={{
          tabBarLabel: 'Favoritos',
        }}
        name="Favorites"
        component={Favorites}
      />
    </TabNavigator.Navigator>
  )
}
