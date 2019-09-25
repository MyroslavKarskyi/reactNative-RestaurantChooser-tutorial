import React from 'react'
import {TabNavigator} from "react-navigation";
import {PeopleScreen} from "./screens/PeopleScreen";
import {DecisionScreen} from "./screens/DecisionScreen";
import {RestaurantsScreen} from "./screens/RestaurantsScreen";


const tabs = TabNavigator({ //TODO

    PeopleScreen: {
        screen: PeopleScreen,
        navigationOptions: {
            tabBarLabel: "People",
            tabBarIcon: ({tintColor}) => (
                <Image source={require("./images/icon-people.png")}
                       style={{width: 32, height: 32, tintColor: tintColor}}/>
            )
        }
    },

    DecisionScreen: {
        screen: DecisionScreen,
        navigationOptions: {
            tabBarLabel: "Decision",
            tabBarIcon: ({tintColor}) => (
                <Image source={require("./images/icon-decision.png")}
                       style={{width: 32, height: 32, tintColor: tintColor}}
                />
            )
        }
    },

    RestaurantsScreen: {
        screen: RestaurantsScreen,
        navigationOptions: {
            tabBarLabel: "Restaurants",
            tabBarIcon: ({tintColor}) => (
                <Image source={require("./images/icon-restaurants.png")}
                       style={{width: 32, height: 32, tintColor: tintColor}}
                />
            )
        }
    }
});

export default tabs;
