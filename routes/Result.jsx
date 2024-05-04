import React from "react";
import { 
    View,
    Text,
    Image, 
} from "react-native";


const Result = () => {
    return (
        <View style={{flex: 1, backgroundColor: "#000", alignItems: "center", justifyContent: "center"}}>
            <Text style={{color: "#fff", fontSize: 50, fontWeight: "900"}}>Congratulations, you are a Matthew!</Text>
        </View>
    );
}


export default Result;