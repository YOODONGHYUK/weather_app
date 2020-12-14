import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Haze: {
        iconName:"weather-hail",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Haze",
        subtitle: "foggy"
    },
    Thunderstorm: {
        iconName:"weather-hail",
        gradient: ["#", "#"],
        title: "Thunderstorm",
        subtitle: "storm is comming"
    },
    Drizzle: {
        iconName:"weather-hail",
        gradient: ["#89f7fe", "#66a6ff"],
        title: "Drizzle",
        subtitle: "need small umbrella"
    },
    Rain: {
        iconName:"weather-rainy",
        gradient: ["#00c6fb", "#005bea"],
        title: "Rain",
        subtitle: "umbrella"
    },
    Snow: {
        iconName:"weather-snowy",
        gradient: ["#7de2fc", "#b9b6e5"],
        title: "Snow",
        subtitle: "white day"
    },
    Atmosphere: {
        iconName:"weather-hail",
        gradient: ["#89f7fe", "#66a6ff"],
        title: "Atmosphere",
        subtitle: "what is Atmosphere"
    },
    Clear: {
        iconName:"weather-sunny",
        gradient: ["#fef253", "#ff7300"],
        title: "Clear",
        subtitle: "sunny day"
    },
    Clouds: {
        iconName:"weather-cloudy",
        gradient: ["#d7d2cc", "#304352"],
        title: "Clouds",
        subtitle: "not sunny, not rain"
    },
    Dust: {
        iconName:"weather-hail",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Dust",
        subtitle: "get mask"
    },
    Mist: {
        iconName:"weather-hail",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Mist",
        subtitle: "sticky"
    }
};

export default function Weather({temp, condition}){
    return (
        <LinearGradient 
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
            <MaterialCommunityIcons 
                size={96} 
                name={weatherOptions[condition].iconName}
                color="white"
            />
            <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Dust",
        "Mist"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }

});