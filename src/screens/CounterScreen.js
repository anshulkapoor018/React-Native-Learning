import React, {useState} from 'react';  // How different components work together
import {Text, StyleSheet, View, Button} from 'react-native';  // Take info from components and show data on mobile devices

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button title = "Increase" onPress = {() => {
                setCounter(counter + 1);
            }} />
            <Button title = "Decrease" onPress = {() => {
                setCounter(counter - 1);
            }} />
            
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    bigText: {
        fontSize: 45
    }
});

export default CounterScreen;