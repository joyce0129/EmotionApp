import 'react-native-gesture-handler';

import React from "react";
import { SafeAreaView,SafeAreaProvider} from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import "react-native-gesture-handler";
import { GluestackUIProvider, StatusBar } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
//import HomeScreen from "./src/screens/HomeScreen";
//import Header from "./src/components/Header";
const App =()=>{
  return(
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <GluestackUIProvider config={config}>
          <StatusBar />
          <Navigation />
        </GluestackUIProvider>         
      </SafeAreaView>  
    </SafeAreaProvider>
  )
}

export default App;