import React, { Component } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity  } from "react-native";

const HomeScreen = (props) => {
  // console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <TouchableOpacity onPress = {() => props.navigation.navigate('Components')}>
        <Text>Components Section</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => props.navigation.navigate('List')}>
        <Text>Lists Section</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
