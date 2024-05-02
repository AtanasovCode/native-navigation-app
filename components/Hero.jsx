import React from "react";
import { StyleSheet } from "react-native";
import {
    FlatList,
    View,
    Text,
    ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";


const Hero = ({ data }) => {

    return (
        <View style={styles.container}>
            <StatusBar
                style={data.id === 1 ? "light" : "dark"}
            />
            <ImageBackground
                source={data.uri}
                style={styles.imageBackground}
            >
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0)', '#1a1a1b']}
                    style={styles.gradient}
                    locations={[0.655, 1]}
                />
            </ImageBackground>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1a1a1b",
    },
    imageBackground: {
        flex: 1,
        height: "90%",
        position: "relative",
    },
    gradient: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: "flex-end",
        height: "90%",
    },
    textWrapper: {
        position: "absolute",
        bottom: "6%",
        left: 0,
        paddingRight: 26,
        paddingLeft: 26,
    },
    title: {
        color: "#fff",
        fontSize: 36,
        fontWeight: "700",
        marginBottom: 16,
        textAlign: "left",
    },
    description: {
        fontSize: 15,
        color: "#fff",
        textAlign: "left",
    }
})

export default Hero;