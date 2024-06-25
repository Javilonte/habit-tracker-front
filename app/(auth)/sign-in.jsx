import { View, Text, Image } from 'react-native'
import React,{ useState }from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import {icons} from '../../constants/icons'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
    const[form, setForm] = useState({
        email:'',
        password:''
    })
  return (
    <GestureHandlerRootView className="flex" >
        <SafeAreaView className="bg-background h-full">
            <ScrollView 
                    className="m-5">
                <View className="w-full flex justify-center min-h-[85] px-4 my-6">
                <Image source={icons.profile} resizeMode='contain' className="w-[115px] h-[35px] " />
                <Text className="2xl text-black text-semibold mt-10 font-psemibold" >Access to HabitQuest</Text>                
                
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
                />
                <CustomButton 
                  title="Sign in"          
                />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-black-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-tech"
            >
              Signup
            </Link>
          </View>
          </View>
            </ScrollView>
        </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default SignIn