import {
    FlatList,
    Text,
    Image,
    View,
} from "react-native";
import { StyleSheet } from "react-native";

import { styleData } from "../Data";

const StyleDetails = () => {

    console.log(styleData);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{item.title}</Text>
                {item.image !== null && <Image source={item.image} style={styles.image} />}
                <Text style={styles.baseText}>{item.description}</Text>
                <Text style={styles.baseText}>{item.usefulFor}</Text>
            </View>
        );
    }

    return (
        <FlatList
            style={{flex: 1, backgroundColor: "#333"}}
            data={styleData}
            renderItem={renderItem}
            keyExtractor={(item, index) => String(index)}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 26,
        fontWeight: "700",
        marginBottom: 16,
        color: "#fff",
    },
    image: {
        flex: 1,
        height: 300,
        marginBottom: 16,
    },
    baseText: {
        color: "#fff",
        fontSize: 16,
    }
})


export default StyleDetails;