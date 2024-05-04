import React from "react";
import { useState } from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    Dimensions,
    TouchableHighlight,
    ScrollView,
} from "react-native";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { quizData } from "../components/Data";
import { SafeAreaView } from "react-native-safe-area-context";



const Quiz = () => {

    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;

    const [currentQuestion, setCurrentQuestion] = useState(1);

    const renderItem = ({ item }) => {
        return (
            <View style={[styles.wrapper, { width: width }]}>
                <View style={styles.imageContainer}>
                    <Image
                        source={item.image}
                        style={[styles.image, { maxWidth: width }]}
                    />
                    <LinearGradient
                        colors={['rgba(0, 0, 0, 0)', '#1a1a1b']}
                        style={styles.gradient}
                        locations={[0.655, 1]}
                    />
                </View>
                <ScrollView>
                    <Text style={[styles.baseText, styles.title]}>
                        {item.question}
                    </Text>
                    <View
                        style={styles.answerWrapper}
                    >
                        {item.answers.map((answer) => {
                            return (
                                <TouchableHighlight key={(answer.value)} style={[styles.answer]}>
                                    <Text style={[styles.baseText, styles.answerText]}>
                                        {answer.answer}
                                    </Text>
                                </TouchableHighlight>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
        );
    }

    return (
        <SafeAreaView style={[styles.container, { minWidth: width, minHeight: height }]}>
            <StatusBar style="light" />
            <FlatList
                data={quizData}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.id)}
                horizontal={true}
                pagingEnabled={true}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1a1a1b",
        flex: 1,
    },
    wrapper: {
        overflow: "hidden",
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center",
        paddingLeft: "4%",
        paddingRight: "4%",
        marginBottom: "15%"
    },
    baseText: {
        color: "#fff",
    },
    answerWrapper: {
        alignItems: "center",
        justifyContent: "center",
    },
    answer: {
        backgroundColor: "#29282f",
        textAlign: "center",
        width: "90%",
        marginBottom: 20,
        borderRadius: 12,
        padding: 16,
    },
    answerText: {
        fontSize: 17,
        textAlign: "center",
    },
    imageContainer: {
        height: "30%",
        marginBottom: 22,
        position: "relative",
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
})

export default Quiz;