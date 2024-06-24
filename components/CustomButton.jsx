import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        
        className={`bg-primary rounded-xl min-h-[62px] justify-center items-center mt-7 p-3
            ${containerStyles} ${isLoading ? 'opacity-50': ''} }
            disabled={isLoading}`
        }>
        <Text className={`text-black font-psemibold 
            text-lg ${textStyles}
        `}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton