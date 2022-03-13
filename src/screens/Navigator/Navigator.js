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
import Feather from "react-native-vector-icons/Feather"

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      inactiveColor="#6e8dc7"
      barStyle={{ backgroundColor: "#F4B886"}}
      shifting={false}
    >
      <Tab.Screen name="Home" component={Home} options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                      name="pine-tree"
                      color={color}
                      size={30}
                    />
                  ),
                }} />
      <Tab.Screen name="Rings" component={AllRings} options={{
                  tabBarLabel: 'Rings',
                  tabBarIcon: ({ color }) => (
                    <Feather
                      name="target"
                      color={color}
                      size={25}
                    />
                  ),
                }}/>
      <Tab.Screen name="Logout" component={Logout} options={{
                  tabBarLabel: 'Profile',
                  tabBarIcon: ({ color }) => (
                    <Feather
                      name="user"
                      color={color}
                      size={25}
                    />
                  ),
                }}/>
    </Tab.Navigator>
  );
}

export function Navigator(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOption={{headerShown:false}}>
        {props.isLoggedIn ? (
          <>
            <Stack.Screen name="Root" component={HomeTabs} options={{ title: 'Rings' }}/>
            <Stack.Screen name="SingleRing" component={SingleRing} options={({route})=>({ title: route.params.name })}/>
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
