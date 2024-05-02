import {
    FlatList,
    Text,
    Image,
    View,
} from "react-native";
import { StyleSheet } from "react-native";

import { styleData } from "../Data";

const StyleDetails = () => {

    const DATA = styleData;


    const renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{item.title}</Text>
                {item.image !== "" && <Image source={item.image} style={styles.image} />}
                <Text style={styles.baseText}>{item.description}</Text>
                <Text style={styles.baseText}>{item.usefulFor}</Text>
            </View>
        );
    }

    return (
        <View style={{flex: 1}}>
            <FlatList
                style={{ flex: 1}}
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
        fontSize: 26,
        fontWeight: "700",
        marginBottom: 16,
        color: "#fff",
    },
    image: {
        height: 300,
        marginBottom: 16,
    },
    baseText: {
        color: "#fff",
        fontSize: 16,
    }
})


export default StyleDetails;