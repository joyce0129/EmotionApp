import React from "react";
import { View ,Image,Pressable,Text,StyleSheet,ScrollView,SectionList,FlatList} from "react-native";
import Data from "../json/lucky.json"
import LuckyDetail from "../components/LuckyDetail";


    


const LuckyScreen =({navigation})=>{
    return(
        <View>
            <Text style={{fontSize:24,marginTop:20,marginLeft:50,color:"#1D1D1D"}} >激勵話語</Text>
            <FlatList
            horizontal={true}
            data={Data.data}
            renderItem={({item})=><LuckyDetail lucky={item} navigation={navigation}/>}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item=>item.title}
    />
        </View>
        
    );  
    
};





export default LuckyScreen;