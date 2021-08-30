import React, { Component } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity  } from "react-native";

const HomeScreen = (props) => {
  // console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <TouchableOpacity style = {styles.button} onPress = {() => props.navigation.navigate('Components')}>
        <Text style = {styles.btnText}>Components</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.button} onPress = {() => props.navigation.navigate('List')}>
        <Text style = {styles.btnText}>Lists</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.button} onPress = {() => props.navigation.navigate('Image')}>
        <Text style = {styles.btnText}>Image</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.button} onPress = {() => props.navigation.navigate('Counter')}>
        <Text style = {styles.btnText}>Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.button} onPress = {() => props.navigation.navigate('Color')}>
        <Text style = {styles.btnText}>Color</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
    width: 200,
    marginTop: 20,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 50,
  },
  btnText: {
    color: "black",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
  },
});

export default HomeScreen;
