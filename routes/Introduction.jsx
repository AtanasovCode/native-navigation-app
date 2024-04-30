import React, { useEffect, useState, useRef } from "react";
import { Text, View, Image, FlatList, TouchableHighlight, ImageBackground } from "react-native";
import { Dimensions, StyleSheet } from "react-native";

const learnHeaderImage = { uri: "https://images.unsplash.com/photo-1627697856513-10a5583bfbaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGVsZWN0cmljJTIwYmlrZXN8ZW58MHwxfDB8fHwy" };
const stylesHeaderImage = { uri: "https://images.unsplash.com/photo-1622734547816-47e9afe17021?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGVsZWN0cmljJTIwYmlrZXN8ZW58MHwxfDB8fHwy" };
const batteryHeaderImage = { uri: "https://images.unsplash.com/photo-1623982783113-2f2940d3138a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGVsZWN0cmljJTIwYmlrZXN8ZW58MHwxfDB8fHwy" };
const exploreImage = { uri: 'https://images.unsplash.com/photo-1631068190477-190717507d2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxlbGVjdHJpYyUyMGJpa2VzfGVufDB8MXwwfHx8Mg%3D%3D' };
const foldingStyle = { uri: "https://images.unsplash.com/photo-1590273018519-ba2db69e124c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3RyaWMlMjBiaWtlcyUyMGZvbGRpbmd8ZW58MHwxfDB8fHwy" };
const mtbStyle = { uri: "https://images.unsplash.com/photo-1668106249278-cba50127e361?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3RyaWMlMjBtb3VudGFpbiUyMGJpa2V8ZW58MHwxfDB8fHwy" };

const Introduction = ({ navigation }) => {
    const screenWidth = Dimensions.get('window').width; // Get screen width

    const flatListRef = useRef(null);

    const [step, setStep] = useState(0);
    const [viewableItems, setViewableItems] = useState([]);

    const data = [
        {
            id: 1,
            title: "Learn E-Bikes",
            description: "Learn all about e-bikes",
            image: learnHeaderImage,
        },
        {
            id: 2,
            title: "Explore Styles",
            description: "Discover diverse e-bike styles, from moped to foldables.",
            image: stylesHeaderImage,
        },
        {
            id: 3,
            title: "Battery and Range",
            description: "Explore e-bike batteries and their impact on range.",
            image: batteryHeaderImage,
        },
        {
            id: 4,
            title: "Exploration",
            description: "From asphalt to mountains, find the best bike type for you",
            image: mtbStyle
        },
        {
            id: 5,
            title: "E-bike World",
            description: "Explore World!",
            image: exploreImage,
        }
    ];

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
                    <Image source={item.image} style={styles.image} />
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
        <View style={[styles.container, { width: screenWidth }]}>
            <FlatList
                ref={flatListRef}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                centerContent={true}
                pagingEnabled={true}
                contentContainerStyle={{ minWidth: screenWidth * data.length }}
                onViewableItemsChanged={getVisible}
            />
            <View style={styles.multistepContainer}>
                {data.map((item) => (
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
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#07051d",
        color: "#000",
    },
    image: {
        width: "85%",
        aspectRatio: 9 / 16,
        borderRadius: 32,
        marginTop: 14,
        marginBottom: 14,
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
        width: "85%",
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
