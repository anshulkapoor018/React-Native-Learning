import React, { Component } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, TextComponent  } from "react-native";
import ImageDetail from "../components/ImageDetails";


const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title = "beach" 
                imageSource = {require('../../assets/beach.jpg')}
                imageScore = "9"
            />
            <ImageDetail 
                title = "forest" 
                imageSource = {require('../../assets/forest.jpg')}
                imageScore = "10"
            />
            <ImageDetail 
                title = "mountain" 
                imageSource = {require('../../assets/mountain.jpg')}
                imageScore = "8"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
});

export default ImageScreen;