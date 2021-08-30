import React, {useState} from 'react';  // How different components work together
import {Text, StyleSheet, View, Button, FlatList} from 'react-native';  // Take info from components and show data on mobile devices

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    return (
        <View>
            <Button title = "Add a Color" onPress = {() => {
                setColors([...colors, randomRGB()])
            }} />
            <FlatList
            keyExtractor ={(item) => item}
                data = {colors}
                renderItem = {({item}) => {
                    return <View style = {{width: 100, height: 100, backgroundColor: item }}></View>
                }}
            />
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