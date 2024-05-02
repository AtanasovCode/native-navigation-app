import React from 'react';
import { View, Text, StatusBar, FlatList, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const background = { uri: 'https://images.unsplash.com/photo-1620984721051-36dafb139faa?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' };

const powerCover = { uri: 'https://images.unsplash.com/photo-1669965691237-e8fea18b09e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWJpa2UlMjBiYXR0ZXJ5fGVufDB8MXwwfHx8Mg%3D%3D' };
const styleCover = { uri: 'https://images.unsplash.com/photo-1636013607379-bff5b3cbeb01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEVsZWN0cmljJTIwQmlrZXxlbnwwfDF8MHx8fDI%3D' };
const batteryCover = { uri: 'https://images.unsplash.com/photo-1585159836811-ddb5ffd97d2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEVsZWN0cmljJTIwQmlrZXxlbnwwfDF8MHx8fDI%3D' };
const capabilitiesCover = { uri: 'https://images.unsplash.com/photo-1642986951087-9e1c0ade1b1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fEVsZWN0cmljJTIwQmlrZXxlbnwwfDF8MHx8fDI%3D' };

const HomeScreen = ({ navigation }) => {

    const data = [
        {
            id: 1,
            name: 'E-Bike Styles',
            icon: <MaterialCommunityIcons name="bike-fast" size={42} color="#c8f3ff" />,
            title: "Different Types of E-Bike Styles",
            description: "From foldable to moped style, e-bikes come in all shapes and sizes.",
            uri: styleCover,
        },
        {
            id: 2,
            name: 'Battery and Power',
            icon: <Entypo name="battery" size={42} color="#00e339" />,
            title: "Batteries and how they effect power",
            description: "The battery is the most important component of any e-bike.",
            uri: batteryCover,
        },
        {
            id: 3,
            name: 'E-Bike Capabilities',
            icon: <MaterialCommunityIcons name="road-variant" size={42} color="#9d9a9a" />,
            title: "Where Can You Take Your E-BIke?",
            description: "From flat asphalt to the steepest of hills, there is an e-bike for every occasion.",
            uri: capabilitiesCover,
        },
        {
            id: 4,
            name: 'Power Options',
            icon: <Ionicons name="speedometer" size={42} color="#f69d9d" />,
            title: "Types of Power Options for E-Bikes",
            description: "250W, 750W, 1000W, what do all of these mean?",
            uri: powerCover,
        },
    ];

    const renderItem = ({ item }) => {
        return (
            <TouchableHighlight
                style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
                onPress={() => navigation.navigate("Explanation", {
                    name: item.name,
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    uri: item.uri
                })}
            >
                <View style={renderStyles.container}>
                    <View style={renderStyles.iconWrapper}>
                        {item.icon}
                    </View>
                    <Text style={[renderStyles.baseText, renderStyles.title]}>
                        {item.name}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={background}
                style={styles.imageBackground}
            >
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0)', '#1a1a1b']}
                    style={styles.gradient}
                    locations={[0.655, 1]}
                />
            </ImageBackground>
            <View style={styles.wrapper}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="transparent"
                />
                <Text style={styles.title}>
                    Learn About
                </Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const renderStyles = StyleSheet.create({
    container: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#29282f",
        marginBottom: 20,
        borderRadius: 12,
        padding: 16,
        position: "relative",
    },
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    baseText: {
        color: "#f4ecec",
        textAlign: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "left",
        width: "100%",
        paddingLeft: "20%",
    },
    description: {
        fontSize: 12,
    },
    iconWrapper: {
        position: "absolute",
        left: 15,
    },
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1a1a1b",
        flex: 1,
    },
    imageBackground: {
        height: 240,
        width: "100%",
        resizeMode: "cover",
        marginBottom: 22,
    },
    gradient: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: "flex-end",
    },
    title: {
        color: "#fff",
        fontSize: 36,
        fontWeight: "900",
        marginBottom: 26,
        textAlign: "center",
    },
    wrapper: {
        alignItems: "center",
        justifyContent: "center",
    },
});

export default HomeScreen;
