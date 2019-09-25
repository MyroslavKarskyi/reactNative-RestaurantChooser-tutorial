import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {Constants} from "expo"; //System information that remains constant throughout the lifetime of your app.
import {TabNavigator} from "react-navigation";

export default function App() {
    const platformOS = Platform.OS.toLowerCase(); //tells us what platform we are running on
    console.log("Your application is running on", platformOS)
    return (
        <View style={styles.container}>
            <Text>RestaurantChooser App</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
