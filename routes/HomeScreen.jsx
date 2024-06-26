import React from 'react';
import { View, Text, StatusBar, FlatList, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { data } from '../components/Data';
import { Dimensions } from 'react-native';
const background = { uri: 'https://images.unsplash.com/photo-1620984721051-36dafb139faa?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' };

import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {

    const screenHeight = Dimensions.get('window').height; // Get screen width

    return (
        <View style={[styles.container, { minHeight: screenHeight }]}>
            <View style={styles.imageContainer}>
                <Image
                    source={background}
                    style={styles.image}
                />
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0)', '#1a1a1b']}
                    style={styles.gradient}
                    locations={[0.655, 1]}
                />
            </View>
            <View style={styles.wrapper}>
                <Text style={[styles.title, { marginBottom: 8 }]}>Take the Quiz</Text>
                <Text style={[renderStyles.baseText, { marginBottom: 16 }]}>
                    Find out which E-bike is best for you
                </Text>
                <TouchableHighlight
                    style={{ alignItems: "center", justifyContent: "center" }}
                    onPress={() => navigation.navigate("Quiz")}
                >
                    <View style={renderStyles.container}>
                        <View style={renderStyles.iconWrapper}>
                            <MaterialIcons name="quiz" size={36} color="#fff" />
                        </View>
                        <Text style={[renderStyles.baseText, renderStyles.title]}>
                            Start Quiz
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.wrapper}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="transparent"
                />
                <Text style={styles.title}>
                    Learn About
                </Text>
            </View>
            {
                data.map((item) => {
                    return (
                        <TouchableHighlight
                            key={item.id}
                            style={{ alignItems: "center", justifyContent: "center" }}
                            onPress={() => navigation.navigate("Explanation", {
                                name: item.name,
                                id: item.id,
                                title: item.title,
                                description: item.description,
                                uri: item.uri,
                                type: item.type,
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
                })
            }
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
        fontSize: 20,
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
        justifyContent: "flex-start"
    },
    imageContainer: {
        height: "20%",
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
    title: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 26,
        textAlign: "center",
    },
    wrapper: {
        alignItems: "center",
        justifyContent: "center",
    },
});

export default HomeScreen;
