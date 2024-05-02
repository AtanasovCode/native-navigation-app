import React from "react";
import {
    View,
    Text,
    ScrollView,
} from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Details = ({ type }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}></ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#000",
    },
    scroll: {},
    baseText: {
        fontSize: 17,
        marginBottom: 26,
        textAlign: "left",
        color: "#fff",
    },
    title: {
        color: "#fff",
        fontSize: 26,
        fontWeight: 700,
        marginBottom: 16,
    },
})

export default Details;