import React from "react";
import { StyleSheet, Text, View, Image, Pressable,Linking} from "react-native";

const LuckyDetail=({lucky,navigation})=>{
    return(
       
        <View style={{flexDirection:'column'}}>
            
            <View style={styles.cardContainerStyle}>  
                <View style={styles.cardSectionStyle}>
                    <Pressable
                    onPress={()=> navigation.navigate("LuckyDetail_cookie",lucky)}>
                    <Image
                    style={styles.imageStyle}
                    source={{
                        uri:lucky.image
                    }}/>
                    <View style={styles.headerContainerStyle}>
                        <Text style={styles.headerTitleStyle}>{lucky.title}</Text>
                    </View>
                    </Pressable>
                </View>
            </View>
                
            
        </View>
    )
}
const styles = StyleSheet.create({
    cardContainerStyle: {
    //   shadowColor: "#000",
    //   shadowOffset: { width: 0, height: 2 },
    //   shadowOpacity: 0.1,
    //   shadowRadius: 2,
    //   elevation: 1,
      marginLeft: 50,
      marginRight: -30,
      marginTop:20, 
      
    },
    headerContainerStyle: {
      flexDirection: "row",
      justifyContent: "center",
    },
    headerTitleStyle: {
      fontSize: 18,
      color:"#1D1D1D",
      marginBottom:10
    },

    cardSectionStyle: {
      
      padding: 5,
      backgroundColor: "#FFEFDE",
      borderColor: "#ddd",
      borderBottomWidth: 1,
      borderRadius:10,
      
    },
    imageStyle: {
      height: 120,
      width: 150,
      marginLeft:10
    }
  });
  
  
  export default LuckyDetail;
  
  
  