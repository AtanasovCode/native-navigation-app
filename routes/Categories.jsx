import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { Dimensions, StyleSheet } from "react-native";

const mopedStyle = { url: "https://images.unsplash.com/photo-1630561222593-35652acc3905?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" };
const fatTyre = { url: "https://images.unsplash.com/photo-1631068136386-fa145d502a70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWxlY3RyaWMlMjBiaWtlc3xlbnwwfDF8MHx8fDI%3D" };
const foldingStyle = { url: "https://images.unsplash.com/photo-1590273018519-ba2db69e124c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3RyaWMlMjBiaWtlcyUyMGZvbGRpbmd8ZW58MHwxfDB8fHwy" };
const mtbStyle = { url: "https://images.unsplash.com/photo-1668106249278-cba50127e361?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3RyaWMlMjBtb3VudGFpbiUyMGJpa2V8ZW58MHwxfDB8fHwy" };

const Categories = ({ navigation }) => {
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

export default Categories;
