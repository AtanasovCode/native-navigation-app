import React from "react";
import {
    FlatList,
    View,
    Text,
    Image,
    ImageBackground,
    StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Hero from "../components/Hero";


const Explanation = ({ navigation, route }) => {

    const data = route.params;

    console.log(data.description);

    const renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, backgroundColor: "#000", }}>
                <Text style={{ color: "#fff" }}>{item.name}</Text>
                <Text style={{ color: "#fff" }}>{item.description}</Text>
            </View>
        );
    };


    return (
        <View style={{ flex: 1 }}>
            <Hero
                data={data}
            />
        </View>
    );
}

export default Explanation;