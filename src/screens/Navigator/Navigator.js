import 'react-native-gesture-handler';
import React from 'react';
import { connect } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Login/Login'
import Home from '../Home/Home'
import Logout from '../Logout/Logout'
import AllRings from '../AllRings/AllRings'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Tab = createMaterialBottomTabNavigator()


export function Navigator(props) {
    return(
        <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#D6EADF"
          inactiveColor="#6e8dc7"
          barStyle={{ backgroundColor: '#95B8D1' }}
          shifting={false}
        >
          {props.isLoggedIn ? (
            <>
              <Tab.Screen name='Home' component={Home}/>
              <Tab.Screen name='Rings' component={AllRings}/>
              <Tab.Screen name='Logout' component={Logout}/>

            </>
          ) : (
            <>
              <Tab.Screen name="Login" component={Login}
              options={{
                  tabBarLabel: 'Login',
                  tabBarIcon: ({ color }) => (
                    <MaterialIcons name="food-bank" color={color} size={26} />
                  ),
                }}
              />
            </>
          )}
        </Tab.Navigator>
      </NavigationContainer>
    )
}


const mapState = (state) => {
    return {
      isLoggedIn: !!state.auth.id
    };
  };
  
  export default connect(mapState)(Navigator);