import {
    FlatList,
    Text,
    ImageBackground,
    View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

import { capabilitiesData } from "../Data";

const CapabilitiesDetails = () => {

    const screenHeight = Dimensions.get('window').height; // Get screen width

    const DATA = capabilitiesData;


    const renderItem = ({ item }) => {
        return (
            <View style={[styles.container, {}]}>
                <ImageBackground source={item.image} style={[styles.image]}>
                    <LinearGradient
                        colors={['rgba(0, 0, 0, 0)', '#1a1a1b']}
                        style={styles.gradient}
                        locations={[0.55, 1]}
                    />
                    <Text style={[styles.title, styles.baseText]}>{item.title}</Text>
                </ImageBackground>
                <Text style={[styles.baseText, styles.text]}>{item.description}</Text>
            </View>
        );
    }

    return (
        <View style={{marginTop: 32, marginBottom: 32, minHeight: screenHeight}}>
            <FlatList
                style={{ flex: 1 }}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item, index) => String(index)}
            />
            <View style={{marginTop: 20}}>
                <Text style={[styles.baseText, styles.title, { marginBottom: 16 }]}>Conclusion</Text>
                <Text style={[styles.baseText, styles.text]}>
                    With e-bikes, the terrain you explore is no longer 
                    limited by your physical capabilities. Whether it's 
                    city streets, rough trails, or challenging hills, there's 
                    an e-bike perfectly suited to conquer it. Choose your adventure!
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 64,
    },
    title: {
        fontSize: 36,
        fontWeight: "700",
        color: "#fff",
    },
    image: {
        height: 600,
        position: "relative",
        justifyContent: "flex-end",
        marginBottom: 24,
    },
    gradient: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: "flex-end",
        height: 600,
    },
    baseText: {
        color: "#fff",
        paddingLeft: 26,
        paddingRight: 26,
    },
    text: {
        fontSize: 17,
    }
})


export default CapabilitiesDetails;