import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';  // Take info from components and show data on mobile devices

const ListScreen = () => {
    const friends = [
        { 'name' : 'Anshul', 'age' : '1'},
        { 'name' : 'Anjali', 'age' : '2'},
        { 'name' : 'Akshay', 'age' : '3'},
        { 'name' : 'Ashwini', 'age' : '4'},
        { 'name' : 'Akshit', 'age' : '5'},
        { 'name' : 'Rohan', 'age' : '6'},
        { 'name' : 'Muskaan', 'age' : '7'},
        { 'name' : 'Priyank', 'age' : '8'}
    ]
    
    return (
        <FlatList 
            keyExtractor = { friend => friend.name}
            data={friends}
            renderItem = {({ item }) => {
                return <Text style = {styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}/>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical:50
    }
});

export default ListScreen;