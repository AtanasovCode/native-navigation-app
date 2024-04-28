import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { Dimensions, StyleSheet } from "react-native";

const AboutScreen = ({ navigation }) => {
    const screenWidth = Dimensions.get('window').width; // Get screen width

    return (
        <ScrollView
            style={styles.container}
            alwaysBounceHorizontal={true}
            centerContent={false} // Disable snapping
            horizontal={true}
            contentContainerStyle={{ width: screenWidth * 4 }} // Set content width
            pagingEnabled={true} // Enable paging for one screen per swipe
        >
            <View style={[styles.viewOne, { width: screenWidth }]}>
                <Text style={styles.heading}>Screen One</Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text>Go Home!</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.viewTwo, { width: screenWidth }]}>
                <Text style={styles.heading}>Screen Two</Text>
            </View>
            <View style={[styles.viewThree, { width: screenWidth }]}>
                <Text style={styles.heading}>Screen Three</Text>
            </View>
            <View style={[styles.viewFour, { width: screenWidth }]}>
                <Text style={styles.heading}>Screen Four</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#11022f",
        color: "#FFF",
    },
    viewOne: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#010040",
    },
    viewTwo: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00674c",
    },
    viewThree: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#910000",
    },
    viewFour: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5b3d00",
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
    },
    buttonText: {
        fontSize: 17,
        fontWeight: "bold",
    },
});

export default AboutScreen;
