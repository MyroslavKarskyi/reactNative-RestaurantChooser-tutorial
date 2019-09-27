import React, {Component} from "react";
import PropTypes from "prop-types";
import {Platform, StyleSheet, Text, TextInput, View} from "react-native";

class CustomTextInput extends Component {

    render() {

        const {
            label,//text of the lable for out input component
            labelStyle,
            maxLength, //max length of the text in input
            textInputStyle, //style of the text in input
            stateHolder, //refers to the object storing the state of our component
            stateFieldName // name of the field
        } = this.props;

        return (
            <View>
                <Text style={[styles.fieldLabel, labelStyle]}>{label}</Text>
                <TextInput maxLength={maxLength}
                           onChangeText={(inText) => stateHolder.setState(
                               () => {
                                   const obj = {};
                                   obj[stateFieldName] = inText;
                                   return obj;
                               }
                           )}
                           style={[styles.textInput, textInputStyle]}
                />
            </View>
        );

    }

}

const styles = StyleSheet.create({

    fieldLabel: {marginLeft: 10},

    textInput: {
        height: 40, marginLeft: 10, width: "96%", marginBottom: 20,
        ...Platform.select({ //style changes slightely depending on the OS
            ios: {
                marginTop: 4, paddingLeft: 10, borderRadius: 8,
                borderColor: "#c0c0c0", borderWidth: 2
            },
            android: {}
        })
    }

});

CustomTextInput.propTypes = { //helps to prevent or track errors
    label: PropTypes.string.isRequired,
    labelStyle: PropTypes.object,
    maxLength: PropTypes.number,
    textInputStyle: PropTypes.object,
    stateHolder: PropTypes.object.isRequired,
    stateFieldName: PropTypes.string.isRequired
};

export default CustomTextInput;
