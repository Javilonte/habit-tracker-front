import { Text, View } from "react-native";
import { Link } from 'expo-router'


export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background"
    >
        <Text className="text text-3xl">HabitApp</Text>
      <Link href="/home">Go to Home </Link>
      <Text>No new habits yet, please add one.</Text>
      
    </View>
  );
}
