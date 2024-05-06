import React from "react";
import { useState, useEffect } from "react";
import {
    View,
    ScrollView,
    Text,
    Image,
    TouchableHighlight,
} from "react-native";
import { StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { styleData } from "../components/Data";
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Result = ({ navigation, route }) => {

    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;

    const data = route.params;

    const [result, setResult] = useState();

    useEffect(() => {
        const foundResult = styleData.find((item) => item.value === data.result);
        setResult(foundResult ? [foundResult] : []);
    }, []);

    return (
        <SafeAreaView style={[styles.container, { height: height, minHeight: height }]}>
            {
                result && result.map((item) => {
                    return (
                        <ScrollView key={item.value} style={[styles.wrapper, { maxHeight: height }]}>
                            <View style={[styles.imageContainer, { width: width }]}>
                                <TouchableHighlight
                                    style={[styles.button]}
                                    onPress={() => navigation.navigate("Home")}
                                >
                                    <MaterialCommunityIcons name="home-variant" size={24} color="#fff" />
                                </TouchableHighlight>
                                <Image source={item.image} style={[styles.image, { width: width, height: height * 0.6 }]} />
                                <LinearGradient
                                    colors={['rgba(0, 0, 0, 0)', '#1a1a1b']}
                                    style={styles.gradient}
                                    locations={[0.55, 1]}
                                />
                            </View>

                            <View style={[styles.textContainer]}>
                                <Text style={[styles.title, styles.baseText]}>{item.title}</Text>
                                <Text style={[styles.baseText, styles.text]}>{item.description}</Text>
                                {item.usefulFor && <Text style={[styles.baseText, styles.subTitle]}>Useful For</Text>}
                                <Text style={[styles.baseText, styles.text]}>{item.usefulFor}</Text>
                            </View>
                        </ScrollView>
                    );
                })
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1a1a1b",
        flex: 1,
    },
    wrapper: {
    },
    textContainer: {
        flex: 1,
        paddingBottom: 25,
    },
    imageContainer: {
        position: "relative",
    },
    title: {
        fontSize: 26,
        fontWeight: "700",
        textAlign: "left",
        marginLeft: "6%",
        marginRight: "6%",
        marginBottom: "4%"
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "500",
        marginTop: "2%",
        marginBottom: "2%",
    },
    baseText: {
        color: "#fff",
        marginLeft: "6%",
        marginRight: "6%",
    },
    image: {
        flex: 1
    },
    gradient: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: "flex-end",
    },
    button: {
        position: "absolute",
        top: "2%",
        left: "2%",
        zIndex: 4,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1a1a1b",
        padding: 6,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 32,
    },
    buttonText: {
        color: "#000",
        fontSize: 14,
    },
})

export default Result;