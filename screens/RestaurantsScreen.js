import React from "react";
import {StyleSheet, Text, View} from "react-native";

export class RestaurantsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Restaurants Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
