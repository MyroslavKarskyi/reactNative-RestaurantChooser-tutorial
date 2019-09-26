import React from 'react';
import {Constants} from "expo";

import {Image, Platform, View} from 'react-native';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {HomeScreen} from "./screens/HomeScreen";
import {PeopleScreen} from "./screens/PeopleScreen";
import {DecisionScreen} from "./screens/DecisionScreen";
import {RestaurantsScreen} from "./screens/RestaurantsScreen";

console.log("yo Your application is running on", Platform.OS.toLowerCase());//tells us what platform we are running on

//NAVIGATOR
const TabNavigator = createMaterialBottomTabNavigator(
    { //routes
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>
                    </View>),
            }
        },
        People: {
            screen: PeopleScreen,
            navigationOptions: {
                tabBarLabel: 'People',
                tabBarIcon: ({tintColor}) => (
                    <Image source={require("./images/icon-people.png")}
                           style={{width: 32, height: 32, tintColor: tintColor}}/>
                ),
                activeColor: '#f60c0d',
                inactiveColor: '#f65a22',
                barStyle: {backgroundColor: '#f69b31'},
            }
        },
        Decision: {
            screen: DecisionScreen,
            navigationOptions: {
                tabBarLabel: 'Decision',
                tabBarIcon: ({tintColor}) => (
                    <Image source={require("./images/icon-decision.png")}
                           style={{width: 32, height: 32, tintColor: tintColor}}/>
                ),
                activeColor: '#615af6',
                inactiveColor: '#46f6d7',
                barStyle: {backgroundColor: '#67baf6'},
            }
        },
        Restaurants: {
            screen: RestaurantsScreen,
            navigationOptions: {
                tabBarLabel: 'Restaurants',
                tabBarIcon: ({tintColor}) => (
                    <Image source={require("./images/icon-restaurants.png")}
                           style={{width: 32, height: 32, tintColor: tintColor}}
                    />),
                activeColor: '#0b5fff',
                inactiveColor: '#699bff',
                barStyle: {backgroundColor: '#b5c8f6'},
            }
        },
    },
    { //configurations
        initialRouteName: "Home",
        activeColor: '#f0edf6', //default if not chosen otherwise
        inactiveColor: '#226557',
        barStyle: {backgroundColor: '#3BAD87'},
    },
);

export default createAppContainer(TabNavigator); //
