import React, { useEffect, useState, useRef } from "react";
import { Text, View, Image, FlatList, TouchableHighlight, ImageBackground } from "react-native";
import { Dimensions, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { introductionData } from "../components/Data";

const Introduction = ({ navigation }) => {


    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const flatListRef = useRef(null);

    const [step, setStep] = useState(0);
    const [viewableItems, setViewableItems] = useState([]);

    const setFirstTime = async () => {
        try {
            await AsyncStorage.setItem('isFirstTime', 'false');
        } catch (error) {
            console.error('Error saving isFirstTime to AsyncStorage:', error);
        }
    };



    const renderItem = ({ item }) => {
        return (
            <View style={[styles.container, { width: screenWidth }]}>
                <View style={{ width: screenWidth, alignItems: "center", justifyContent: "center, flex: 1" }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={[{ width: "75%", aspectRatio: 9 / 16 }]}>
                        <Image source={item.image} style={styles.image} />
                    </View>
                    {
                        item.id <= 4 ?
                            <Text style={styles.description}>{item.description}</Text>
                            :
                            <TouchableHighlight
                                style={styles.button}
                                onPress={() => {
                                    setFirstTime();
                                    navigation.navigate("Home");
                                }}
                            >
                                <Text style={styles.buttonText}>
                                    Explore World
                                </Text>
                            </TouchableHighlight>
                    }
                </View>
            </View>
        );
    };

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

    return (
        <View style={[styles.container, { width: screenWidth, minHeight: screenHeight }]}>
            <StatusBar
                style="light"
                backgroundColor="#07051d"
            />
            <FlatList
                ref={flatListRef}
                data={introductionData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                centerContent={true}
                pagingEnabled={true}
                contentContainerStyle={{ minWidth: screenWidth * introductionData.length }}
                onViewableItemsChanged={getVisible}
            />
            <View style={styles.multistepContainer}>
                {introductionData.map((item) => (
                    <TouchableHighlight
                        key={item.id}
                        style={[styles.step, step !== item.id && styles.stepInactive]}
                        onPress={() => handleStepPress(item.id)}
                    >
                        <Text></Text>
                    </TouchableHighlight>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 26,
        paddingBottom: 26,
        backgroundColor: "#07051d",
        color: "#000",
    },
    image: {
        flex: 1,
        aspectRatio: 9 / 16,
        borderRadius: 32,
        marginTop: 16,
        marginBottom: 16,
    },
    title: {
        width: "100%",
        textAlign: "center",
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
    },
    description: {
        width: "80%",
        textAlign: "center",
        fontSize: 15,
        color: "#fff",
    },
    multistepContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
        marginTop: 8,
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
    button: {
        backgroundColor: "#d5f0e1",
        padding: 14,
        width: "70%",
        alignItems: "center",
        justifyContent: "Center",
        borderRadius: 32,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000000",
    },
})

export default Introduction;