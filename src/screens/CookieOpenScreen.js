import React from "react";
import { View ,Image,Pressable,Text,StyleSheet} from "react-native";

const CookieOpenScreen =({navigation})=>{
    return(
        
        <View style={styles.bigcontainer}>
            <Pressable onPress={() => navigation.goBack()}>
            <Image
            source = {{uri: 'https://github.com/joyce0129/EmotionApp/blob/main/src/img/arrow_back_ios_new.png?raw=true'}}
            style={{width: 25, height: 25,marginTop:20,marginLeft:10}}
            />
            </Pressable>
            <View style={styles.container}>
            
                <View style={styles.wordContainer}>
                    <Text style={{fontSize:30,color:"#1D1D1D",marginTop:20,fontFamily:"cjkFonts"}}>準備好了嗎?</Text>
                </View>    
                <View style={styles.wordContainer}>
                    <Text style={{fontSize:30,color:"#1D1D1D",fontFamily:"cjkFonts"}}></Text>
                </View> 
            
                <View style={styles.imgContainer}>
                    <Image 
                    style={styles.icon}
                    source={{
                    uri:"https://github.com/joyce0129/EmotionApp/blob/main/src/img/cookieopen.png?raw=true"
                    }}
                    />
                </View>

                <View style={styles.bottom}>
                <Pressable
                    onPress={()=> navigation.navigate("LuckyDetail_cookieopen")}>
                    <Text style={{fontSize:24,color:"#1D1D1D",fontFamily:"cjkFonts"}}>打開幸運餅乾</Text>
                </Pressable>
                
                </View>

            </View>
        </View>



        
        
    )
}

const styles=StyleSheet.create({
    bigcontainer:{
        flex: 1,
        backgroundColor:"#FFEFDE"
    },
    container:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems: "center",
        backgroundColor:"#FFEFDE"
    },
    wordContainer:{
        flexDirection:"row",
        justifyContent:"center"
    },
    imgContainer:{
        flexDirection:"row",
        justifyContent:"center",
        
    },
    icon:{
        width:300,
        height:300
    },
    bottom:{
        marginTop:100,
        display: "flex",
        flexDirection:"row",
        justifyContent:"center",
        backgroundColor:"#F5D2AE",
        borderRadius:20,
        width:230,
        
        padding:10
    },
    
}
)

export default CookieOpenScreen;