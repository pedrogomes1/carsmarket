import { Tabs, usePathname } from 'expo-router'

import { colors } from '@/styles/theme'
import { Platform } from 'react-native'
import { HomeSVG } from '@/assets/svgs/HomeIcon'
import { RegisterSVG } from '@/assets/svgs/RegisterIcon'

enum TabsName {
  Home = '/home',
  Register = '/register-advertisement',
}

export default function TabsLayout() {
  const currentPathTab = usePathname()

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
        name={'home'}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => {
            return (
              <HomeSVG
                fill={
                  currentPathTab === TabsName.Home
                    ? colors.blue_100
                    : colors.white
                }
              />
            )
          },
          tabBarLabelStyle: {
            color:
              currentPathTab === TabsName.Home ? colors.blue_100 : colors.white,
          },
        }}
      />
      <Tabs.Screen
        name={'register-advertisement'}
        options={{
          tabBarLabel: 'Register',
          tabBarIcon: () => (
            <RegisterSVG
              fill={
                currentPathTab === TabsName.Register
                  ? colors.blue_100
                  : colors.white
              }
            />
          ),
          tabBarLabelStyle: {
            color:
              currentPathTab === TabsName.Register
                ? colors.blue_100
                : colors.white,
          },
        }}
      />
    </Tabs>
  )
}
