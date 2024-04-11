import { Center, Text, Image, VStack, FlatList,Pressable } from "@gluestack-ui/themed";
import { useTheme, useNavigation } from '@react-navigation/native';

import emotionData from "../json/emotions.json";
import DetailList from "../components/DetailList";

const Question2Screen = ({ route }) => {
    const { colors } = useTheme();
    const navigation = useNavigation();

    const name = route.params; // 從 Q1 傳來的情緒名稱
    
    let emotions = emotionData.data;

    // 會影響排版的變數
    let bgColor, detail, imgSrc;
    const w = 240, h = 240;
    
    switch(name){
        case "happy":
            bgColor = colors.bg_happy_dark;
            detail = emotions[0].detail;
            imgSrc = emotions[0].img;
            break;
        case "angry":
            bgColor = colors.bg_angry_dark;
            detail = emotions[1].detail;
            imgSrc = emotions[1].img;
            break;
        case "sad":
            bgColor = colors.bg_sad_dark;
            detail = emotions[2].detail;
            imgSrc = emotions[2].img;
            break;
        case "fear":
            bgColor = colors.bg_fear_dark;
            detail = emotions[3].detail;
            imgSrc = emotions[3].img;
            break;
        default:
            console.log("Q1 到 Q2 的資料未正確傳輸！");
    }

    return (
        <VStack flex={1} bg={bgColor}>
            <Pressable onPress={() => navigation.goBack()}>
                    <Image
                    source = {{uri: 'https://github.com/joyce0129/EmotionApp/blob/main/src/img/arrow_back_ios_new.png?raw=true'}}
                    style={{width: 25, height: 25,marginTop:20,marginLeft:10}}
                    />
                </Pressable>
            <Center >
            <VStack mt={65}>
                <VStack alignItems="center">
                    <Image 
                        width={w}
                        height={h}
                        source={{ uri: imgSrc }}
                        alt={name}
                    />
                    <Text color={colors.character} fontSize={30} mx={47} mt={25} mb={40}>哪個詞彙更能形容你的感受？</Text>
                </VStack>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={detail}
                    renderItem={ ({ item }) =>  <DetailList detail={item} /> }
                    keyExtractor={ (item, index) => item + index }
                />
            </VStack>
        </Center>
        </VStack>
        
    );
};

export default Question2Screen;