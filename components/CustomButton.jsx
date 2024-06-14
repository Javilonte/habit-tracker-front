import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = () => {
  return (
    <TouchableOpacity className={`bg-buttons rounded-xl min-h-[62px] justify-center items-center mt-7 p-3`}>
        <Text className="text-gray-100  ">Continue with Email</Text>
    </TouchableOpacity>
  )
}

export default CustomButton