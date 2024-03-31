import React,{useState} from "react";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { View,StyleSheet,Pressable ,Image,Text ,ScrollView} from "react-native";

export default function HomeScreen(navigation) {
    const [selectedIndex,setSelectedIndex]=useState(0);

    const SegmentedContent=()=>{
        if(selectedIndex==1){
            return(
                <ScrollView>
                    <Text style={{marginLeft:50,marginTop:20,fontSize:18}}>2024年3月17日 星期日</Text>
                    <View style={styles.containerStyle}> 
                        <View style={styles.iconContainer}>
                            <Image 
                                style={styles.icon}
                                source={{
                                    uri:""
                                }}
                            />
                            <Image 
                                style={styles.icon}
                                source={{
                                    uri:""
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
                
            
            )
        }else{
            return(
                <Text style={{marginLeft:50,marginTop:20,fontSize:18}}>2024年3月17日 星期日</Text>
            )
        }
    }
    return(
        <View flex={1} >
         <SegmentedControlTab
            values={["按日排序", "按月排序"]}
            tabStyle={{ 
                
               backgroundColor: "white",
               marginTop: 50,
               borderColor: "gray",
            }}
            activeTabStyle={{
               backgroundColor: "gray",
               marginTop: 50,    
               borderColor: "gray",       
            }}
            firstTabStyle={{ marginLeft: 50 }}
            lastTabStyle={{ marginRight: 50 }}
            tabTextStyle={{ fontSize: 16, padding: 5, color: "gray"}}
            activeTabTextStyle={{ color: "white" }}
            selectedIndex={selectedIndex}
            onTabPress={(index) => setSelectedIndex(index)}
         />
         <SegmentedContent />
      </View>
    );
}