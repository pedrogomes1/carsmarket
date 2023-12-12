import { Tabs } from 'expo-router'
import Icon from '@expo/vector-icons/AntDesign'

import { colors } from '@/styles/theme'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.darkness,
        tabBarInactiveBackgroundColor: colors.darkness,
        tabBarStyle: {
          borderColor: colors.darkness,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ size }) => (
            <Icon name="home" color={colors.blue_300} size={size} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="register-vehicle"
        options={{
          tabBarIcon: ({ size }) => (
            <Icon name="plus" color={colors.blue_300} size={size} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  )
}
