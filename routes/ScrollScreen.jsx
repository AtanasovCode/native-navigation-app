import { FlatList, Text, View } from "react-native";
import { Dimensions, StyleSheet } from "react-native";

const ScrollScreen = ({ navigation }) => {

    const screenHeight = Dimensions.get('window').height; // Get screen height


    const data = [ // Array of data objects for each screen
        { id: 1, title: 'Screen One', color: '#396400' },
        { id: 2, title: 'Screen Two', color: '#00373e' },
        { id: 3, title: 'Screen Three', color: '#000' },
        { id: 4, title: 'Screen Four', color: '#6b005b' },
    ];

    const renderItem = ({ item }) => (
        <View style={[styles.view, { height: screenHeight, backgroundColor: item.color }]}>
            <Text style={styles.heading}>{item.title}</Text>
        </View>
    );

    const totalHeight = screenHeight * data.length; // Calculate total height of all screens

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id} // Key extractor for each item
            horizontal={false}
            pagingEnabled={true} // Enable paging for one screen per swipe
            contentContainerStyle={{ minHeight: totalHeight }}
            centerContent={false}
            alwaysBounceVertical={false}
        />
    );
};

const styles = StyleSheet.create({
    view: {
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
});

export default ScrollScreen;
