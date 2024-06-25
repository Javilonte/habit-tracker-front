import GlobalProvider from "@/context/GlobalProvider";
import { Stack, SplashScreen } from "expo-router";


//SplashScreen.preventAutoHideAsync(); 

export default function RootLayout() {
  return (

      <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="/search/[query]" options={{ headerShown: false }} /> */}
      
    </Stack>
    
    
  );
}
