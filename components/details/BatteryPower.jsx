import {
    View,
    Text,
    FlatList,
    ImageBackground,
} from "react-native";
import { StyleSheet } from "react-native";
import { batteryData, motorData, powerData } from "../Data";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const BatteryPower = () => {

    const screenHeight = Dimensions.get('window').height; // Get screen width

    const batteryItem = ({ item }) => {
        return (
            <View style={[styles.container]}>
                {
                    !item.image ? (
                        <Text style={[styles.baseText, styles.title]}>{item.title}</Text>
                    )
                        :
                        (
                            <ImageBackground source={item.image} style={[styles.image]}>
                                <LinearGradient
                                    colors={['rgba(0, 0, 0, 0)', '#1a1a1b']}
                                    style={styles.gradient}
                                    locations={[0.55, 1]}
                                />
                                <Text style={[styles.title, styles.baseText]}>{item.title}</Text>
                            </ImageBackground>
                        )
                }
                <Text style={[styles.baseText, styles.text]}>{item.description}</Text>
            </View>
        );
    };

    const powerItem = ({ item }) => {
        return (
            <View style={[powerStyles.container]}>
                <View style={powerStyles.wrapper}>
                    <Text style={[powerStyles.title]}>{item.title}</Text>
                </View>
                <View style={powerStyles.wrapper}>
                    <Text style={[powerStyles.text]}>{item.description}</Text>

                </View>
            </View>
        );
    }

    const motorItem = ({ item }) => {
        return (
            <View style={[styles.container]}>
                <Text style={[styles.title, styles.baseText]}>{item.title}</Text>
                <Text style={[styles.text, styles.baseText]}>{item.description}</Text>
            </View>
        );
    }

    return (
        <View style={{ minHeight: screenHeight, paddingTop: 26, paddingBottom: 26, }}>
            <Text style={[styles.mainTitle, styles.baseText]}>E-Bike Batteries</Text>
            <FlatList
                data={batteryData}
                renderItem={batteryItem}
                keyExtractor={(item, index) => String(index)}
            />
            <Text style={[styles.mainTitle, styles.baseText]}>E-Bike Motors</Text>
            <FlatList
                data={motorData}
                renderItem={motorItem}
                keyExtractor={(item, index) => String(index * 5)}
            />
            <FlatList
                data={powerData}
                renderItem={powerItem}
                keyExtractor={(item, index) => String(index * 5)}
                style={{marginTop: 26,}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 26,
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
        paddingLeft: 26,
        paddingRight: 26,
        color: "#fff",
    },
    mainTitle: {
        fontSize: 40,
        fontWeight: "800",
        marginBottom: 26,
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 16,
    },
    text: [],
})

const powerStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingLeft: 16,
        paddingRight: 16,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 32,
        borderBottomWidth: 1,
        borderBottomColor: "#999999",
        paddingBottom: 22,
    },
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        marginRight: 16,
        color: "#fff",
    },
    text: {
        color: "#fff",
        fontSize: 13,
    },
})

export default BatteryPower