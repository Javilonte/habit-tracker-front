import { Text, View, Image} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from 'expo-router'
import {icons} from '../constants/icons'
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import CustomButton from "@/components/CustomButton";

export default function Index() {
  return (

    <GestureHandlerRootView className="flex-1">
    <SafeAreaView className="bg-secondary h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full justify-center items-center h-full px-4">

          <Image source ={icons.logo} // This is being used just as a playholder

          className="justify-content w-[360px] h-[240px]"
          resizeMode="contain"
          />
          <Text className="relative mt-8">
           <Text className="text-3xl font-bold text-center">
           Embárcate en tu Aventura Épica de Hábitos
           </Text>
           </Text>
          <CustomButton></CustomButton>
          
        </View>

      </ScrollView>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
}
  