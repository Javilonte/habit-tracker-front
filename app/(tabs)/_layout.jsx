import { Image, View, Text } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'
import { icons } from '../../constants/icons'


const TabIcon = (icon, color, name, focused) =>{
  return (
    <View className="items-center justify-center gap-2">
      <Image 
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'}`}>

        {name}
      </Text>
    </View>
  )
}
const TabsLayout = () => {
  return (
    <>
    <Tabs 
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#primary'
      }}
    >

      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false, 
          tabBarIcon:({color, focused}) => (
            <TabIcon 
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          )
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          headerShown: false, 
          tabBarIcon:({color, focused}) => (
            <TabIcon 
              icon={icons.bookmark}
              color={color}
              name="Bookmark"
              focused={focused}
            />
          )
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          headerShown: false, 
          tabBarIcon:({color, focused}) => (
            <TabIcon 
              icon={icons.create}
              color={color}
              name="Create"
              focused={focused}
            />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false, 
          tabBarIcon:({color, focused}) => (
            <TabIcon 
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          )
        }}
      />
    </Tabs>
    </>
  )
}

export default TabsLayout