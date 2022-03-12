import "react-native-gesture-handler";
import React from "react";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import {Button} from 'react-native'
import Login from "../Login/Login";
import Home from "../Home/Home";
import Logout from "../Logout/Logout";
import AllRings from "../AllRings/AllRings";
import SingleRing from "../SingleRing/SingleRing";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#D6EADF"
      inactiveColor="#6e8dc7"
      barStyle={{ backgroundColor: "#95B8D1" }}
      shifting={false}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Rings" component={AllRings} />
      <Tab.Screen name="Logout" component={Logout} />
    </Tab.Navigator>
  );
}

export function Navigator(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {props.isLoggedIn ? (
          <>
            <Stack.Screen name="Root" component={HomeTabs} />
            <Stack.Screen name="SingleRing" component={SingleRing}/>
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

export default connect(mapState)(Navigator);
