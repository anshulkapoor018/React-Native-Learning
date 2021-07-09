import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';  // Take info from components and show data on mobile devices

const ListScreen = () => {
    const friends = [
        { 'name' : 'Anshul', 'age' : '1'},
        { 'name' : 'Anjali', 'age' : '1'},
        { 'name' : 'Akshay', 'age' : '1'},
        { 'name' : 'Ashwini', 'age' : '1'},
        { 'name' : 'Akshit', 'age' : '1'},
        { 'name' : 'Rohan', 'age' : '1'},
        { 'name' : 'Muskaan', 'age' : '1'},
        { 'name' : 'Priyank', 'age' : '1'}
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