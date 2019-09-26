// import React from "react";
// import CustomButton from "../components/CustomButton";
// import CustomTextInput from "../components/CustomTextInput";
// import { Alert, AsyncStorage, BackHandler, FlatList, Picker, Platform,ScrollView,StyleSheet, Text, View} from "react-native";
// //import { StackNavigator } from "react-navigation";
// import { Root, Toast } from "native-base";
// import Constants from 'expo-constants';
//
// export class RestaurantsScreen extends React.Component {
//     render() { return (
//
//         <Root>
//
//             <View style={styles.listScreenContainer}>
//
//                 <CustomButton text="Add Restaurant"
//                               onPress={ () => { this.props.navigation.navigate("AddScreen"); } } />
//
//                 <FlatList style={styles.restaurantList} data={this.state.listData}
//                           renderItem={ ({item}) =>
//                               <View style={styles.restaurantContainer}>
//                                   <Text style={styles.restaurantName}>{item.name}</Text>
//                                   <CustomButton text="Delete"
//                                                 onPress={ () => {
//                                                     Alert.alert("Please confirm",
//                                                         "Are you sure you want to delete this restaurant?",
//                                                         [
//                                                             { text : "Yes", onPress: () => {
//                                                                     AsyncStorage.getItem("restaurants",
//                                                                         function(inError, inRestaurants) {
//                                                                             if (inRestaurants === null) {
//                                                                                 inRestaurants = [ ];
//                                                                             } else {
//                                                                                 inRestaurants = JSON.parse(inRestaurants);
//                                                                             }
//                                                                             for (let i = 0; i < inRestaurants.length; i++) {
//                                                                                 const restaurant = inRestaurants[i];
//                                                                                 if (restaurant.key === item.key) {
//                                                                                     inRestaurants.splice(i, 1);
//                                                                                     break;
//                                                                                 }
//                                                                             }
//                                                                             AsyncStorage.setItem("restaurants",
//                                                                                 JSON.stringify(inRestaurants), function() {
//                                                                                     this.setState({ listData : inRestaurants });
//                                                                                     Toast.show({ text : "Restaurant deleted",
//                                                                                         position : "bottom", type : "danger",
//                                                                                         duration : 2000
//                                                                                     });
//                                                                                 }.bind(this)
//                                                                             );
//                                                                         }.bind(this)
//                                                                     );
//                                                                 } },
//                                                             { text : "No" }, { text : "Cancel", style : "cancel" }
//                                                         ],
//                                                         { cancelable : true }
//                                                     )
//                                                 } } />
//                               </View>
//                           }
//                 />
//
//             </View>
//
//         </Root>
//
//     ); }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     listScreenContainer : { flex : 1, alignItems : "center", justifyContent :
//             "center",
//         ...Platform.select({
//             ios : { paddingTop : Constants.statusBarHeight },
//             android : { }
//         })
//     },
//     restaurantList : {
//
//     },
//     restaurantContainer : {
//
//     },
//     restaurantName : {
//
//     }
// });


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
