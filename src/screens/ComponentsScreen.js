import React from 'react';  // How different components work together
import {Text, StyleSheet, View} from 'react-native';  // Take info from components and show data on mobile devices

const ComponentsScreen = () => {
    const name = "Anshul"
    return (
        <View>
            <Text style = {styles.bigText}>Getting Started with React Native!</Text>
            <Text style = {styles.smallText}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    bigText: {
        fontSize: 45
    },
    smallText: {
        fontSize: 20
    }
});

export default ComponentsScreen;