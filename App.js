import 'react-native-gesture-handler';

import React from "react";
import { SafeAreaView,SafeAreaProvider} from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import "react-native-gesture-handler";
import { GluestackUIProvider, StatusBar } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

import { useFonts } from "expo-font";
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const App =()=>{
   //引入字體
   const [fontsLoaded, fontError] = useFonts({
    "cjkFonts": require("./assets/fonts/cjkFonts_allseto_v1.11.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return(
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}} onLayout={onLayoutRootView}>
        <GluestackUIProvider config={config}>
          <StatusBar />
          <Navigation />
        </GluestackUIProvider>         
      </SafeAreaView>  
    </SafeAreaProvider>
  )
}

export default App;