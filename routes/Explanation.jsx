import React from "react";
import { View, ScrollView, Text, SafeAreaView, FlatList } from "react-native";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";

import Hero from "../components/Hero";
import Details from "../components/Details";

const Explanation = ({ navigation, route }) => {

    const screenHeight = Dimensions.get('window').height; // Get screen width

    const data = route.params;

    const DATA = [
        <Hero data={data} />,
        <Details type={data.type} />
    ]

    const renderItem = ({ item }) => {
        return (
            <View style={{flex: 1, height: screenHeight}}>{ item }</View>
        );
    }


    return (
        <View style={[styles.container, { minHeight: screenHeight }]}>
            <StatusBar style="light" />
            <FlatList 
                data={DATA}
                keyExtractor={(item, index) => String(index)}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1a1a1b",
    },
    scrollView: {
        backgroundColor: "#1a1a1b",
    },
    wrapper: {
    }
})

export default Explanation;
