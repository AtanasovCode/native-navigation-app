import React from "react";
import { View, ScrollView, Text, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";

import Hero from "../components/Hero";
import Details from "../components/Details";

const Explanation = ({ navigation, route }) => {

    const screenHeight = Dimensions.get('window').height; // Get screen width

    const data = route.params;


    return (
        <SafeAreaView style={[styles.container, { minHeight: screenHeight }]}>
            <StatusBar style="light" />
            <ScrollView>
                <View style={[styles.wrapper, { height: screenHeight }]}>
                    <Hero data={data} />
                </View>
                <View style={[styles.wrapper, {minHeight: screenHeight}]}>
                    <Details 
                        type={data.type}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
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
