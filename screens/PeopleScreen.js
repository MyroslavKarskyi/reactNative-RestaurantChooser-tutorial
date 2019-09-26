import React from "react";
import {StyleSheet, Text, View} from "react-native";
import CustomButton from '../components/CustomButton'

export class PeopleScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>People Screen</Text>
                <CustomButton/>
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

