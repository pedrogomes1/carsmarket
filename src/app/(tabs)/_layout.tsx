import { Tabs } from 'expo-router'

import { colors } from '@/styles/theme'
import { useState } from 'react'
import { Platform } from 'react-native'
import { HomeSVG } from '@/assets/svgs/HomeIcon'
import { RegisterSVG } from '@/assets/svgs/RegisterIcon'

enum TabsName {
  Home = 'home',
  Register = 'register-vehicle',
}

export default function TabsLayout() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <Tabs
      safeAreaInsets={{
        bottom: Platform.OS === 'ios' ? undefined : 10,
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.darkness,
        tabBarInactiveBackgroundColor: colors.darkness,
        tabBarStyle: {
          borderColor: colors.darkness,
          backgroundColor: colors.darkness,
        },
      }}
    >
      <Tabs.Screen
        name={TabsName.Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => {
            return (
              <HomeSVG
                fill={
                  activeTab === TabsName.Home ? colors.blue_100 : colors.white
                }
              />
            )
          },
          tabBarLabelStyle: {
            color: activeTab === TabsName.Home ? colors.blue_100 : colors.white,
          },
        }}
        listeners={{
          tabPress: () => setActiveTab(TabsName.Home),
        }}
      />
      <Tabs.Screen
        name={TabsName.Register}
        options={{
          tabBarLabel: 'Register',
          tabBarIcon: () => (
            <RegisterSVG
              fill={
                activeTab === TabsName.Register ? colors.blue_100 : colors.white
              }
            />
          ),
          tabBarLabelStyle: {
            color:
              activeTab === TabsName.Register ? colors.blue_100 : colors.white,
          },
        }}
        listeners={{
          tabPress: () => setActiveTab(TabsName.Register),
        }}
      />
    </Tabs>
  )
}
