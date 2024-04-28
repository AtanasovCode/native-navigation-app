import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const HomeScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Homescreen</Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate("About")}
            >
                <Text style={styles.buttonText}>About Page</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate("Scroll")}
            >
                <Text style={styles.buttonText}>Scroll Page</Text>
            </TouchableOpacity>
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
    heading: {
        color: "#FFF",
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 12,
    },
    button: {
        color: "#11022f",
        backgroundColor: "#29d8ff",
        padding: 12,
        marginBottom: 15,
    },
    buttonText: {
        fontSize: 17,
        fontWeight: "bold",
    },
})

export default HomeScreen;