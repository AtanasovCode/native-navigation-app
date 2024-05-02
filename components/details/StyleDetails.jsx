import {
    FlatList,
    Text,
    Image,
    ImageBackground,
    View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

import { styleData } from "../Data";

const StyleDetails = () => {

    const screenHeight = Dimensions.get('window').height; // Get screen width

    const DATA = styleData;


    const renderItem = ({ item }) => {
        return (
            <View style={[styles.container, { minHeight: screenHeight }]}>
                {
                    item.image !== "" ?
                        <ImageBackground source={item.image} style={styles.image}>
                            <LinearGradient
                                colors={['rgba(0, 0, 0, 0)', '#1a1a1b']}
                                style={styles.gradient}
                                locations={[0.555, 1]}
                            />
                            <Text style={[styles.title, styles.baseText]}>{item.title}</Text>
                        </ImageBackground>
                        :
                        (
                            <Text style={[styles.title, styles.baseText]}>{item.title}</Text>
                        )
                }
                <Text style={[styles.baseText, styles.text]}>{item.description}</Text>
                {item.usefulFor && <Text style={[styles.baseText, styles.subTitle]}>Useful For</Text>}
                <Text style={[styles.baseText, styles.text]}>{item.usefulFor}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={{ flex: 1 }}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item, index) => String(index)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontSize: 36,
        fontWeight: "700",
        color: "#fff",
    },
    subTitle: {
        fontSize: 22,
        fontWeight: "600",
        marginBottom: 16,
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
        marginBottom: 16,
    }
})


export default StyleDetails;