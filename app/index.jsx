import { Text, View, Image} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from 'expo-router'
import {icons} from '../constants/icons';

export default function Index() {
  return (
    <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={icons.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={icons.logo}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">HabitQuest</Text>
            </Text>

            <Image
              source={icons.eye}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with HabitQuest
          </Text>

          <Link href="/home"> Go to home</Link>
          <Link href="/create"> Go to create</Link>
          <StatusBar backgroundColor="#161622" style="light" />
          {/* <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          /> */}
        </View>
  );
}
  