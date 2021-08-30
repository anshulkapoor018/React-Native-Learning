import React, {useState} from 'react';  // How different components work together
import {Text, StyleSheet, View, Button} from 'react-native';  // Take info from components and show data on mobile devices

const ColorScreen = () => {
    return (
        <View>
            <Button title = "Add a Color" />
            <View style = {{width: 100, height: 100, backgroundColor: randomRGB() }}></View>
        </View>
    );
};

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});

export default ColorScreen;