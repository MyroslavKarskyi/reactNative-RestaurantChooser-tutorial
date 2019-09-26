import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";

export class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            advise: null,
        };
    }


    newAdvise = () => {
        fetch("https://hargrimm-wikihow-v1.p.rapidapi.com/steps?count=3", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "hargrimm-wikihow-v1.p.rapidapi.com",
                "x-rapidapi-key": "baf63dccedmsh789c63c1eaaa07ep1e846bjsnf74317cc7bae"
            }
        }).then((result) => {
            return result.json();

        }).then((res) => {
            console.log("RES ", res);
            this.setState({advise: res});

        }).catch(err => {
            console.log(err);
        });
    }

    adView = (advise) => {

        return (
            <View style={styles.containerText}>
                <Text>1- {advise[1]}</Text>
                <Text>2- {advise[2]}</Text>
                <Text>3- {advise[3]}</Text>
            </View>
        );

    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Before you start..</Text>
                <View style={styles.container}>
                    <View>
                        <Button
                            title="Try"
                            onPress={() => this.newAdvise()}
                        />
                    </View>
                </View>
                {this.state.advise !== null ? this.adView(this.state.advise) : null}

            </View>
        );
    }
}


const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        alignItems: 'center',
    },
    container: {
        paddingTop: 35,
        backgroundColor: '#fff',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerText: {
        paddingTop: 15,
        backgroundColor: '#fff',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    moreButton: {
        width: 50,
        marginBottom: 10
    }
});
