import React from "react";
import { StyleSheet, Text, View,Image,Pressable } from "react-native";
import { DrawerActions } from "@react-navigation/native";

const Header = ({navigation}) => {
  return (
      <View style={styles.boxStyle}>
        <Pressable onPress={()=> navigation.toggleDrawer()}>
        <Image
          style={styles.iconStyle}
          source={{uri:'https://github.com/joyce0129/BookApp_wk3/blob/main/img/icon.png?raw=true'}}
        />
        </Pressable>
        
      </View>
  );
};

const styles = StyleSheet.create({
  boxStyle:{
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconStyle: {
    width:20,
    height:20,
    margin:20
  }
});

export default Header;