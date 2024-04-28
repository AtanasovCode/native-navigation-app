import React, { useState } from "react";
import { Text, View, ImageBackground, FlatList } from "react-native";
import { Dimensions, StyleSheet } from "react-native";

const mopedStyle = { uri: "https://images.unsplash.com/photo-1630561222593-35652acc3905?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" };
const fatTyre = { uri: "https://images.unsplash.com/photo-1631068136386-fa145d502a70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWxlY3RyaWMlMjBiaWtlc3xlbnwwfDF8MHx8fDI%3D" };
const foldingStyle = { uri: "https://images.unsplash.com/photo-1590273018519-ba2db69e124c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3RyaWMlMjBiaWtlcyUyMGZvbGRpbmd8ZW58MHwxfDB8fHwy" };
const mtbStyle = { uri: "https://images.unsplash.com/photo-1668106249278-cba50127e361?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3RyaWMlMjBtb3VudGFpbiUyMGJpa2V8ZW58MHwxfDB8fHwy" };

const Categories = ({ navigation }) => {

    const screenWidth = Dimensions.get('window').width; // Get screen width

    const [step, setStep] = useState(1);

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

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                centerContent={true}
                pagingEnabled={true}
                contentContainerStyle={{ minWidth: screenWidth * data.length }}
            />
            <View style={styles.multistepContainer}>
            <View style={[styles.step, step !== 1 && styles.stepInactive]} />
                <View style={[styles.step, step !== 2 && styles.stepInactive]} />
                <View style={[styles.step, step !== 3 && styles.stepInactive]} />
                <View style={[styles.step, step !== 4 && styles.stepInactive]} />
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
    button: {
        backgroundColor: "#03073a",
        padding: 12,
        marginBottom: 15,
        alignItems: "center",
        justifyContent: "Center",
    },
    buttonText: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#fff",
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
        width: 25,
        height: 25,
        borderRadius: 50,
        backgroundColor: "#fff",
    },
    stepInactive: {
        opacity: .566,
    }
})

export default Categories;
