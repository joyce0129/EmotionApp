import React from "react";
import { StyleSheet,Image, TouchableOpacity, Button} from "react-native";
import { Center, Text } from "@gluestack-ui/themed";

import { NavigationContainer, useTheme, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import CookieScreen from "../screens/CookieScreen";
import DoctorScreen from "../screens/DoctorScreen";
import SettingScreen from "../screens/SettingScreen";
import LuckyScreen from "../screens/LuckyScreen";
import CookieOpenScreen from "../screens/CookieOpenScreen";
import Question1Screen from "../screens/Question1Screen";
import Question2Screen from "../screens/Question2Screen";
import DiaryScreen from "../screens/DiaryScreen";
import TheTheme from "../theme";
import HomeOneScreen from "../screens/HomeOneScreen"

const Stack=createNativeStackNavigator();
const Tab=createBottomTabNavigator();
const Drawer=createDrawerNavigator();

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HelpScreen from "../screens/HelpScreen";
import LogoutScreen from "../screens/LogoutScreen";
import AccountScreen from "../screens/AccountScreen";

const Navigation=()=>{
    return(
        <NavigationContainer theme={TheTheme}>
            <MyDrawer/>
        </NavigationContainer>
    )
}

//LuckyStack
const LuckyStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Lucky"
            component={LuckyScreen}
            options={{headerShown:false}}
        />
            <Stack.Screen
            name="LuckyDetail_cookie"
            component={CookieScreen}
            options={{headerShown:false}}
            />
        <Stack.Screen
            name="LuckyDetail_cookieopen"
            component={CookieOpenScreen}
            options={{headerShown:false}}
            />
        </Stack.Navigator>
        
    )
}
//HomeStack
const HomeStack=({navigation})=>{
    //const {colors}=useTheme();

    return(
        <Stack.Navigator
            screenOptions={{
                //headerTintColor:colors.character,
            }}
        >
            <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                //headerShown:false,

                headerLeft:()=>(
                    <MaterialCommunityIcons
                    name={'menu'}
                    size={20}
                    onPress={()=>navigation.openDrawer()}
                    style={{marginRight:20}}
                    />
                ),
            }}/>
        </Stack.Navigator>
    )
}
//MyTabs
const MyTabs=()=>{
    return(
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                tabBarActiveBackgroundColor:'#E4E3E3',
                tabBarActiveTintColor:'#1D1D1D',
                
                headerShown:false
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    headerShown:false,
                    title:"",

                    tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name="book" color={color} size={30}
                        />
                    ),
                    
                }}
                />

            <Tab.Screen
                name="LuckyStack"
                component={LuckyStack}
                options={{
                    headerShown:false,
                    title:" ",

                    tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name="star" color={color} size={30}
                        />
                    ),
                }}
                />

            <Tab.Screen
                name="Question"
                component={QuestionStack}
                options={{
                    headerShown:false,
                    title:" ",

                    tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name="plus-circle-outline" color={color} size={37}
                        />
                    ),
                }}
                />

            <Tab.Screen
                name="Doctor"
                component={DoctorScreen}
                options={{
                    headerShown:false,
                    title:" ",

                    tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name="heart-flash" color={color} size={30}
                        />
                    ),
                }}
                />
            <Tab.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    headerShown:false,
                    title:" ",

                    tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name="cog-outline" color={color} size={30}
                        />
                    ),
                }}
                />

            </Tab.Navigator>
    );
}

const QuestionStack = () => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    
    return (
      <Stack.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
            headerTintColor: colors.character, // 改變返回鍵與 Header 文字的顏色
        }}
      >

        <Stack.Screen
          name="Q1"
          component={Question1Screen}
          options={() => ({
            headerTransparent: true, // 使 Header 透明化
            headerBackTitleVisible: false, // 使 Header 上返回鍵的文字透明化，只適用於 iOS
            headerTitle: "", //避免文字透明化沒起效，直接不寫標題
            headerLeft: () => (
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name={"chevron-left"}
                  size={36}
                  onPress={() => navigation.goBack()}
                  style={{ color: colors.character }}
                />
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen
          name="Q2" 
          component={Question2Screen}
          options={() => ({
            headerShown: false,
            // headerTransparent: true, // 使 Header 透明化
            // headerBackTitleVisible: false, // 使 Header 上返回鍵的文字透明化，只適用於 iOS
            // headerTitle: "", //避免文字透明化沒起效，直接不寫標題
            // headerLeft: () => (
            //   <TouchableOpacity>
            //     <MaterialCommunityIcons
            //       name={"chevron-left"}
            //       size={36}
            //       onPress={() => navigation.goBack()}
            //       style={{ color: colors.character }}
            //     />
            //   </TouchableOpacity>
            // )
          })}
        />
        <Stack.Screen
          name="Diary" 
          component={DiaryScreen}
          options={() => ({
            headerTransparent: true, // 使 Header 透明化
            headerBackTitleVisible: false, // 使 Header 上返回鍵的文字透明化，只適用於 iOS
            headerTitle: "", //避免文字透明化沒起效，直接不寫標題
            headerLeft: () => (
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name={"close"}
                  size={28}
                  onPress={() => navigation.goBack()}
                  style={{ color: colors.character }}
                />
              </TouchableOpacity>
            )
          })}
        />
      </Stack.Navigator>
    );
}

//Drawercontent
const Drawercontent=(props)=>{
    return(
        <DrawerContentScrollView {...props}
        contentContainerStyle={{paddingTop:0}}
        >
            <Image
             style={styles.drawerimage}
             source={{
                uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/Ellipse%202.png?raw=true"
             }}
            />
            <Text style={styles.user}>Birdie</Text>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    );
}
//DrawerStyle
const styles = StyleSheet.create({
    drawerimage: {
      width:50,
      height:50,
      marginTop:20,
      margin:5,
      marginLeft:20,
      
    //   borderWidth:1,
      borderRadius:20,
      borderColor:"#1D1D1D"
    },
    user: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'left',
      marginLeft: 20,
      marginBottom: 20,
    }
    
  });

//MyDrawer
export const MyDrawer=()=>{
    return(
        <Drawer.Navigator
           screenOptions={{
            
            drawerActiveBackgroundColor:'#F5F5F5',
            drawerActiveTintColor:'#1D1D1D',
            drawerInactiveTintColor:'gray',
            drawerStyle:{width:250},
            drawerLabelStyle:{fontSize:14,fontWeight:'400'}
        }}
        drawerContent={props=><Drawercontent{...props}/>}
        >
        
        <Drawer.Screen
          name="Home"
          component={MyTabs}
          options={{
            headerShown:false,
            drawerLabel:"首頁",
            drawerIcon:({color})=>(
                <MaterialCommunityIcons name="home" color={color} size={30}/>
            ),

          }}
        />

        <Drawer.Screen
          name="Account"
          component={AccountScreen}
          options={{
            //headerShown:false,
            drawerLabel:"登入",
            drawerIcon:({color})=>(
                <MaterialCommunityIcons name="account-circle" color={color} size={30}/>
            ),

          }}
        />

        <Drawer.Screen
            name="Help"
            component={HelpScreen}
            options={{
             //headerShown:false,
             drawerLabel:"幫助",
             drawerIcon:({color})=>(
                <MaterialCommunityIcons name="help-circle" color={color} size={30}/>
                ),

             }}
            />

            <Drawer.Screen
                name="Logout"
                component={LogoutScreen}
                options={{
                //headerShown:false,
                drawerLabel:"登出",
                drawerIcon:({color})=>(
                    <MaterialCommunityIcons name="logout" color={color} size={30}/>
                    ),

                }}
            />
        </Drawer.Navigator>
    )
}

//AccountStack
const AccountStack=({navigation})=>{
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Account"
            component={AccountScreen}
            options={{headerShown:false,
                headerLeft:()=>(
                    <MaterialCommunityIcons
                    name={'menu'}
                    size={20}
                    onPress={()=>navigation.openDrawer()}
                    style={{marginRight:20}}
                    />
                ),
            }}/>
        </Stack.Navigator>
    )
}


//HelpStack
const HelpStack=({navigation})=>{
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Help"
            component={HelpScreen}
            options={{headerShown:false,
                headerLeft:()=>(
                    <MaterialCommunityIcons
                    name={'menu'}
                    size={20}
                    onPress={()=>navigation.openDrawer()}
                    style={{marginRight:20}}
                    />
                ),
            }}/>
        </Stack.Navigator>
    )
}

//LogoutStack
const LogoutStack=({navigation})=>{
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Logout"
            component={LogoutScreen}
            options={{headerShown:false,
                headerLeft:()=>(
                    <MaterialCommunityIcons
                    name={'menu'}
                    size={20}
                    onPress={()=>navigation.openDrawer()}
                    style={{marginRight:20}}
                    />
                ),
            }}/>
        </Stack.Navigator>
    )
}
export default Navigation;