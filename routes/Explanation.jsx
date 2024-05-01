import React from "react";
import {
    FlatList,
    View,
    Text,
    ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Hero from "../components/Hero";


const Explanation = ({ navigation, route }) => {

    const data = [route.params];

    const renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, backgroundColor: "#000", width: "100%", height: "100%" }}>
                <Text style={{ fontSize: 32, color: "#fff" }}>{item.title}</Text>
            </View>
        );
    };


    return (
        <View>
            <Hero 
                data={data}
            />
        </View>
    );
}

export default Explanation;