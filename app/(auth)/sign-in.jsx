import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'

const SignIn = () => {
  return (
    <SafeAreaView className="bg-secondary h-full">
    <ScrollView>
    <View className="w-full justify-center min-h-[85] px-4 my-6">
        <Image />
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn