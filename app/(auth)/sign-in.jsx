import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'

const SignIn = () => {
  return (
    <SafeAreaView className="bg-secondary h-full">
    <ScrollView>
    <Text className="w-full justify-center">
        SignIn
    </Text>
    </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn