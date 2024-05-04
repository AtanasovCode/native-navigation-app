import React from "react";
import { useState, useEffect, useRef, } from "react";
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



const Quiz = ({navigation}) => {

    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;

    const flatListRef = useRef(null);

    const [step, setStep] = useState(1);
    const [viewableItems, setViewableItems] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState([]);


    const getVisible = (viewableItems) => {
        const visibleItemIds = viewableItems.viewableItems.map((item) => item.item.id);
        setViewableItems(visibleItemIds);
    };

    useEffect(() => {
        if (viewableItems.length > 0) {
            setStep(viewableItems[0]); // Assuming the first visible item is relevant
        }
    }, [viewableItems])

    const handleStepPress = (id) => {
        setStep(id);
        flatListRef.current.scrollToIndex({ index: id - 1 }); // Adjust index to zero-based
    };

    const handleSelectAnswer = (id, value, answerID) => {
        // Check if answer for answerID already exists in selectedAnswers
        const existingAnswerIndex = selectedAnswers.findIndex(answer => answer.answerID === answerID);

        // If answer exists, replace it with new answer; otherwise, add new answer
        if (existingAnswerIndex !== -1) {
            const updatedAnswers = [...selectedAnswers];
            updatedAnswers[existingAnswerIndex] = { answerID, id, value };
            setSelectedAnswers(updatedAnswers);
        } else {
            setSelectedAnswers(prevAnswers => [...prevAnswers, { answerID, id, value }]);
        }
    }



    useEffect(() => {
        if(selectedAnswers.length === 7) navigation.navigate("Result")
    }, [selectedAnswers])

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
                                <TouchableHighlight
                                    key={(answer.id)}
                                    style={[
                                        styles.answer,
                                        selectedAnswers.find((ans) => ans.answerID === item.id && ans.id === answer.id) && styles.selectedAnswer
                                    ]}
                                    onPress={() => {
                                        handleSelectAnswer(answer.id, answer.value, item.id)
                                        item.id < quizData.length && handleStepPress(item.id + 1)
                                    }}
                                >
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
                ref={flatListRef}
                onViewableItemsChanged={getVisible}
            />
            <View style={styles.multistepContainer}>
                {quizData.map((item) => (
                    <TouchableHighlight
                        key={item.id}
                        style={[styles.step, step !== item.id && styles.stepInactive]}
                        onPress={() => handleStepPress(item.id)}
                    >
                        <Text></Text>
                    </TouchableHighlight>
                ))}
            </View>
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
    selectedAnswer: {
        backgroundColor: "#0080ff"
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
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    multistepContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
        marginTop: 22,
        marginBottom: 22,
    },
    step: {
        borderRadius: 50,
        width: 15,
        height: 15,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: 1,
    },
    stepInactive: {
        opacity: .4,
    },
})

export default Quiz;