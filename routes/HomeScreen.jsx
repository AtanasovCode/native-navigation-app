import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { StyleSheet } from "react-native";

const image = { uri: 'https://images.unsplash.com/photo-1610569982425-c5ab6a017ab2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' };

const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={{width: "60%"}}>
                    <Text style={styles.heading}>E-bike World</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("About")}
                    >
                        <Text style={styles.buttonText}>E-Bike Categories</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("Scroll")}
                    >
                        <Text style={styles.buttonText}>Scroll Page</Text>
                    </TouchableOpacity>
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
    heading: {
        color: "#000",
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 12,
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
})

export default HomeScreen;