import React, { Component } from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const ImageDetail = (props) => {
    return (
        <View>
            <Image source= {props.imageSource}/>
            <Text>{props.title}</Text>
            <Text>Image Score - {props.imageScore}</Text>
        </View>
    );
    return 
}

const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
});

export default ImageDetail;