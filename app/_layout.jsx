import { Stack, SplashScreen } from "expo-router";


//SplashScreen.preventAutoHideAsync(); 

export default function RootLayout() {
  return (


    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}
