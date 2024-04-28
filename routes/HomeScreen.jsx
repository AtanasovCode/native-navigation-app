import { View, Text, TouchableHighlight, ImageBackground } from "react-native";
import { StyleSheet } from "react-native";

const image = { uri: 'https://images.unsplash.com/photo-1610569982425-c5ab6a017ab2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' };

const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.subContainer}>
                    <Text style={styles.heading}>E-bike World</Text>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => navigation.navigate("Categories")}
                    >
                        <Text style={styles.buttonText}>
                            Explore World
                        </Text>
                    </TouchableHighlight>

                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#11022f",
        color: "#FFF",
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
    subContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
        width: "70%",
        paddingtop: 64,
        paddingBottom: 64,
    },
    heading: {
        color: "#000",
        fontSize: 42,
        fontWeight: "900",
        marginBottom: 12,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#fcfafa",
        padding: 16,
        width: "100%",
        paddingLeft: 32,
        paddingRight: 32,
        marginBottom: 15,
        alignItems: "center",
        justifyContent: "Center",
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#000000",
    },
})

export default HomeScreen;