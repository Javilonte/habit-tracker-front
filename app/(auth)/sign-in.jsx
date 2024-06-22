import { View, Text, Image } from 'react-native'
import React,{ useState }from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import {icons} from '../../constants/icons'
import FormField from '@/components/FormField'

const SignIn = () => {
    const[form, setForm] = useState({
        email:'',
        password:''
    })
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView className="bg-secondary h-full">
            <ScrollView>
                <View className="w-full justify-center min-h-[85] px-4 my-6">
                <Image source={icons.profile} resizeMode='contain' className="w-[115px] h-[35px] " />
                <Text className="2xl text-black text-semibold mt-10 font-psemibold" >Log in to HabitQuest</Text>                
                </View>
                <FormField 
                    title="Email"
                    value={form.email}
                    handleChangeText={(e) => setForm({
                        ...form, 
                        email: e,
                    })}
                    otherStyles="mt-7"
                    keyboardType="email-address"
                />
                <FormField 
                    title="Password"
                    value={form.password}
                    handleChangeText={(e) => setForm({
                        ...form, 
                        password: e,
                    })}
                    otherStyles="mt-7"
                />
            </ScrollView>
        </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default SignIn