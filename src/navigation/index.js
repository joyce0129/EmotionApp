import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import LuckyScreen from "../screens/LuckyScreen";
import Queation1Screen from "../screens/Question1Screen";
import DoctorScreen from "../screens/DoctorScreen";
import SettingScreen from "../screens/SettingScreen";


const Stack=createNativeStackNavigator();
const Tab=createBottomTabNavigator();

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Navigation=()=>{
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}

const MyTabs=()=>{
    return(
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                tabBarActiveBackgroundColor:'#E4E3E3',
                
                headerShown:false
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown:false,
                    title:" ",

                    tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name="book" color={color} size={30}
                        />
                    ),
                }}
                />

            <Tab.Screen
                name="LuckyStack"
                component={LuckyScreen}
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
                name="Question1"
                component={Queation1Screen}
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


export default Navigation;