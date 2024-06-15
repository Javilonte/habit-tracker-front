import { Image, View, Text } from 'react-native'
import { StatusBar } from "expo-status-bar";
import React from 'react'
import { Tabs , Redirect} from 'expo-router'
import { icons } from '../../constants/icons'

const TabIcon = ({ icon ,color ,name, focused}) =>{
  return (
    <View className="items-center justify-center gap-1 mt-2" >
      <Image 
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6 p-1"
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'}`}style={{ color: className="bg-secondary" }}>
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
        tabBarActiveTintColor: "#A1DD70"
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
              icon={icons.eye}
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