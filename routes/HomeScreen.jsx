import React from 'react';
import { View, Text, StatusBar, FlatList, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const background = { uri: 'https://images.unsplash.com/photo-1620984721051-36dafb139faa?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' };

const HomeScreen = ({ navigation }) => {

    const data = [
        {
            id: 1,
            name: 'Bike Styles',
            description: 'Explore different styles of e-bikes.',
            icon: <MaterialCommunityIcons name="bike-fast" size={42} color="#c8f3ff" />
        },
        {
            id: 2,
            name: 'Battery',
            description: 'Learn about battery and power.',
            icon: <Entypo name="battery" size={42} color="#00e339" />
        },
        {
            id: 3,
            name: 'Terrain',
            description: 'Understand e-bike capabilities',
            icon: <MaterialCommunityIcons name="road-variant" size={42} color="#9d9a9a" />
        },
        {
            id: 4,
            name: 'Performance',
            description: 'Discover different power options',
            icon: <Ionicons name="speedometer" size={42} color="#f69d9d" />
        },
    ];

    const renderItem = ({ item }) => {
        return (
            <TouchableHighlight style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View style={renderStyles.container}>
                    <View style={renderStyles.iconWrapper}>
                        {item.icon}
                    </View>
                    <View>
                        <Text style={[renderStyles.baseText, renderStyles.title]}>
                            {item.name}
                        </Text>
                        <Text style={[renderStyles.baseText, renderStyles.description]}>
                            {item.description}
                        </Text>
                    </View>
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
                    barStyle="light-content"
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
        fontWeight: "bold"
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
