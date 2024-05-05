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



const Quiz = ({ navigation }) => {

    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;

    const flatListRef = useRef(null);

    const [step, setStep] = useState(1);
    const [viewableItems, setViewableItems] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [result, setResult] = useState();


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


    const calculateBikeType = (answers) => {
        // Define criteria for each bike type
        const criteria = {
            city: ["city", "long-range", "medium-range", "balanced-power", "non-folding", "cargo", "upright", "comfort"],
            folding: ["city", "medium-range", "short-range", "balanced-power", "low-power", "folding", "lightweight", "upright", "comfort",],
            mountain: ["offRoad", "mountain", "medium-range", "balanced-power", "low-power", "non-folding", "lightweight", "balanced", "sporty"],
            moped: ["city", "long-range", "medium-range", "high-power", "non-folding", "balanced", "upright", "sporty", "premium", "balanced-budget"],
            cargo: ["city", "long-range", "medium-range", "high-power", "balanced-power", "non-folding", "cargo", "upright", "comfort",],
            fatTire: ["offRoad", "mountain", "medium-range", "high-power", "balanced-power", "non-folding", "cargo", "balanced", "sporty", "comfort"],
        };

        // Adjust weights for specific options
        const weights = {
            "folding": 4,
            "cargo": 3,
            "long-range": 2,
            "medium-range": 2,
            "short-range": 2,
            "premium": 2,
            "high-power": 2,
        };

        // Initialize scores for each bike type
        const scores = {
            city: 0,
            folding: 0,
            mountain: 0,
            moped: 0,
            cargo: 0,
            fatTire: 0,
        };

        // Iterate through user's answers and update scores based on criteria and weights
        answers.forEach(answer => {
            for (const type in criteria) {
                if (criteria[type].includes(answer.value)) {
                    scores[type] += weights[answer.value] || 1; // Add weight if specified, otherwise default to 1
                }
            }
        });

        // Find the bike type with the highest score
        let maxScore = 0;
        let bestBikeType = "";
        for (const type in scores) {
            if (scores[type] > maxScore) {
                maxScore = scores[type];
                bestBikeType = type;
            }
        }

        return bestBikeType;
    };

    useEffect(() => {
        if(selectedAnswers.length === quizData.length) {
            setResult(calculateBikeType(selectedAnswers))
        }

        if(result) {
            navigation.navigate("Result", {result})
        }
    }, [selectedAnswers, result])

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