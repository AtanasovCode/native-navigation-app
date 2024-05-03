import React from "react";
import {
    View,
    Text,
    ScrollView,
} from "react-native";
import { StyleSheet } from "react-native";

import StyleDetails from "./details/StyleDetails";
import CapabilitiesDetails from "./details/CapabilitiesDetails";
import BatteryPower from "./details/BatteryPower";

const Details = ({ type }) => {

    return (
        <View style={{flex: 1}}>
            {type === "styles" && <StyleDetails />}
            {type === "capabilities" && <CapabilitiesDetails />}
            {type === "battery" && <BatteryPower />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#000",
    },
    baseText: {
        fontSize: 17,
        marginBottom: 26,
        textAlign: "left",
        color: "#fff",
    },
    title: {
        color: "#fff",
        fontSize: 26,
        fontWeight: 700,
        marginBottom: 16,
    },
})

export default Details;