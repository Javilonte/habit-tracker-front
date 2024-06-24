import { Text, View, Image,ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link, Redirect } from 'expo-router'
import { icons } from '../constants/icons'
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView} from "react-native-gesture-handler";
import CustomButton from "../components/CustomButton";
import Loader from "../components/Loader";/* 
import { useGlobalContext } from "../context/GlobalProvider";  */

export default function Index() {/* 
  const { loading, isLogged } = useGlobalContext();
  if (!loading && isLogged) return <Redirect href="/home" />; */

  return (
    
    <GestureHandlerRootView className="flex-1">
      {/* <Loader isLoading={loading} /> */}
    <SafeAreaView className="bg-background h-full">
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
           <Link href="/sign-in">Botón temporal</Link>
            <CustomButton 
            title="Continue with Email"
            /* handlePress={() => router.push('/sign-in')} */
            containerStyles={"w-full m-7"}
          />
        </View>
      </ScrollView>
       <StatusBar />
    </SafeAreaView>
    </GestureHandlerRootView>
  );
}
