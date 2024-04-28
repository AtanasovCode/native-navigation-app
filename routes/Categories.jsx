import React, { useEffect, useState, useRef } from "react";
import { Text, View, ImageBackground, FlatList, TouchableHighlight } from "react-native";
import { Dimensions, StyleSheet } from "react-native";

const mopedStyle = { uri: "https://images.unsplash.com/photo-1630561222593-35652acc3905?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" };
const fatTyre = { uri: "https://images.unsplash.com/photo-1631068136386-fa145d502a70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWxlY3RyaWMlMjBiaWtlc3xlbnwwfDF8MHx8fDI%3D" };
const foldingStyle = { uri: "https://images.unsplash.com/photo-1590273018519-ba2db69e124c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3RyaWMlMjBiaWtlcyUyMGZvbGRpbmd8ZW58MHwxfDB8fHwy" };
const mtbStyle = { uri: "https://images.unsplash.com/photo-1668106249278-cba50127e361?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3RyaWMlMjBtb3VudGFpbiUyMGJpa2V8ZW58MHwxfDB8fHwy" };

const Categories = ({ navigation }) => {
    const screenWidth = Dimensions.get('window').width; // Get screen width

    const flatListRef = useRef(null);

    const [step, setStep] = useState(0);
    const [viewableItems, setViewableItems] = useState([]);

    const data = [
        { id: 1, title: "Moped Style", image: mopedStyle },
        { id: 2, title: "Fat Tyre", image: fatTyre },
        { id: 3, title: "Folding", image: foldingStyle },
        { id: 4, title: "Mountain Bike", image: mtbStyle },
    ];

    const renderItem = ({ item }) => {
        return (
            <View style={[styles.container, { width: screenWidth }]}>
                <ImageBackground source={item.image} style={styles.image}>
                    <Text style={styles.heading}>{item.title}</Text>
                </ImageBackground>
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
        <View style={styles.container}>
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
                        <Text style={styles.stepText}>{item.id}</Text>
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
    },
    image: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        width: "100%",
        paddingTop: 16,
    },
    heading: {
        width: "100%",
        textAlign: "center",
        color: "#fff",
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 12,
        padding: 12,
        backgroundColor: "rgba(0, 0, 0, .367)",
    },
    multistepContainer: {
        position: "absolute",
        bottom: "5%",
        left: 0,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
    },
    step: {
        borderRadius: 50,
        width: 32,
        height: 32,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: 1,
    },
    stepText: {
        fontSize: 18,
    },
    stepInactive: {
        opacity: .566,
    }
})

export default Categories;
