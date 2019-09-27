//Has 2 sub-screeens:
//--1. add restaurant screen
//--2. show added restaurants
//--TODO : edit present restaurant
import React from "react";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import {
    Alert,
    AsyncStorage,
    BackHandler,
    FlatList,
    Picker,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import Constants from 'expo-constants'; // similar to RN Platform, but by Expo, gives other info type
import {Root, Toast} from "native-base"; //third party library, very useful


/*Main screen : Restaurant Screen - temporary*/
export class RestaurantsScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Restaurants Screez</Text>
            </View>
        );
    }
}


/*Sub-screen 1 : RestaurantsListScreen */
class ListScreen extends React.Component {

    constructor(props) { //'props' is the obj containing all the component's props, that are then passed to the super component
        super(props); //here
        this.state = {listData: []};
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", () => {
            return true;
        }); //stops that back function of the hardware

        AsyncStorage.getItem("restaurants", //shows the lsit as soon as the component has mounted
            function (inError, inRestaurants) {
                if (inRestaurants === null) {
                    inRestaurants = [];
                } else {
                    inRestaurants = JSON.parse(inRestaurants);
                }
                this.setState({listData: inRestaurants});
            }.bind(this)
        );

    };

    render() {
        return (
            <Root>
                <View style={styles.listScreenContainer}>

                    <CustomButton
                        text="Add Restaurant"
                        onPress={() => {
                            this.props.navigation.navigate("AddScreen");
                        }}
                    />

                    <FlatList
                        style={styles.restaurantList}
                        data={this.state.listData}
                        renderItem={({item}) => //for each element in the list
                            <View style={styles.restaurantContainer}>
                                <Text style={styles.restaurantName}>{item.name}</Text>
                                <CustomButton
                                    text="Delete"
                                    onPress={() => { //an alert appears delete yes or no
                                        Alert.alert("Please confirm",
                                            "Are you sure you want to delete this restaurant?",
                                            [
                                                {
                                                    text: "Yes", onPress: () => { //if press yes
                                                        AsyncStorage.getItem("restaurants", //key-value data storage. only stores strings. so first we need to stringify
                                                            function (inError, inRestaurants) {// getItem() method is called to get the object under the key restaurants
                                                                if (inRestaurants === null) {
                                                                    inRestaurants = [];
                                                                } else {
                                                                    inRestaurants = JSON.parse(inRestaurants);//the string retrieved is deserialized into an object using JSON.parse(). After that, it's a simple matter of iterating the array and finding the restaurant with the key that matches the key of the item of the FlatList and removing it from the array.
                                                                }
                                                                for (let i = 0; i < inRestaurants.length; i++) {
                                                                    const restaurant = inRestaurants[i];
                                                                    if (restaurant.key === item.key) {
                                                                        inRestaurants.splice(i, 1);
                                                                        break;
                                                                    }
                                                                }
                                                                AsyncStorage.setItem("restaurants", // writes the array back into storage
                                                                    JSON.stringify(inRestaurants), function () {//JSON.stringify() to serialize the restaurants array into a string for storage
                                                                        this.setState({listData: inRestaurants});
                                                                        Toast.show({
                                                                            text: "Restaurant deleted",
                                                                            position: "bottom", type: "danger",
                                                                            duration: 2000
                                                                        });
                                                                    }.bind(this)
                                                                );
                                                            }.bind(this)
                                                        );
                                                    }
                                                },
                                                {text: "No"}, {text: "Cancel", style: "cancel"}
                                            ],
                                            {cancelable: true}
                                        )
                                    }}/>
                            </View>
                        }
                    />
                </View>
            </Root>

        );
    }

}


/*Sub-screen 2 : AddRestaurantScreen */
class AddScreen extends React.Component {

    constructor(inProps) {
        super(inProps);
        this.state = {
            name: "",
            cuisine: "",
            price: "",
            rating: "",
            phone: "",
            address: "",
            webSite: "",
            delivery: "",
            key: `r_${new Date().getTime()}` //shortcut to stringify whatever comes out of the instructions inside. generate a key with a timestamp
        };
    }

    render() {
        return (
            <ScrollView style={styles.addScreenContainer}>
                <View style={styles.addScreenInnerContainer}>

                    <View style={styles.addScreenFormContainer}>
                        <CustomTextInput label="Name" maxLength={20}
                                         stateHolder={this} stateFieldName="name"/>

                        <Text style={styles.fieldLabel}>Cuisine</Text>
                        <View style={styles.pickerContainer}>
                            <Picker style={styles.picker} prompt="Cuisine"
                                    selectedValue={this.state.cuisine}
                                    onValueChange={(inItemValue) => this.setState({
                                        cuisine:
                                        inItemValue
                                    })}
                            >
                                <Picker.Item label="" value=""/>
                                <Picker.Item label="Algerian" value="Algerian"/>
                                <Picker.Item label="American" value="American"/>
                                ...
                                <Picker.Item label="Other" value="Other"/>
                                ...
                            </Picker>
                        </View>
                    </View>
                </View>

            </ScrollView>
        )
    }
}

/*styleSheet*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listScreenContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        ...Platform.select({ //method used to..
            ios: {
                paddingTop: Constants.statusBarHeight
            },// set a paddingTop attribute for iOS but not Android, so that the container doesn't overlap the status bar.
            android: {}
        })
    },
    restaurantList: {
        width: "94%"
    },
    restaurantContainer: {
        flexDirection: "row", //row, means that the children of this View will be laid out in a row, side by side
        marginTop: 4,
        marginBottom: 4,
        borderColor: "#e0e0e0",
        borderBottomWidth: 2,
        alignItems: "center"
    },
    restaurantName: {
        flex: 1
    },
    addScreenContainer: {
        marginTop: Constants.statusBarHeight
    },
    addScreenInnerContainer: {
        flex: 1,
        alignItems: "center",
        paddingTop: 20,
        width: "100%"
    },
    addScreenFormContainer: {
        width: "96%"
    },
    fieldLabel: {
        marginLeft: 10
    },
    pickerContainer: {
        ...Platform.select({
            ios: {},
            android: {
                width: "96%",
                borderRadius: 8,
                borderColor: "#c0c0c0",
                borderWidth: 2,
                marginLeft: 10,
                marginBottom: 20,
                marginTop: 4
            }
        })
    },
    picker: {
        ...Platform.select({
            ios: {
                width: "96%",
                borderRadius: 8,
                borderColor: "#c0c0c0",
                borderWidth: 2,
                marginLeft: 10,
                marginBottom: 20,
                marginTop: 4
            },
            android: {}
        })
    }
});
