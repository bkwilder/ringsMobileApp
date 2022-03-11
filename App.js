import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#D6EADF"
          inactiveColor="#6e8dc7"
          barStyle={{ backgroundColor: '#95B8D1' }}
          shifting={false}
        >
          {user ? (
            <>
              <Tab.Screen
                name="FridgeNavigator"
                options={{
                  tabBarLabel: 'Fridge',
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                      name="fridge"
                      color={color}
                      size={26}
                    />
                  ),
                }}
              >
                {(props) => <FridgeNavigator {...props} extraData={user} />}
              </Tab.Screen>
              <Tab.Screen
                name="New Order"
                options={{
                  tabBarLabel: 'New Order',
                  tabBarIcon: ({ color }) => (
                    <FontAwesome5
                      name="shopping-basket"
                      color={color}
                      size={20}
                    />
                  ),
                }}
              >
                {(props) => <NewOrderScreen {...props} extraData={user} />}
              </Tab.Screen>
              <Tab.Screen
                name="All Recipes"
                component={AllRecipes}
                options={{
                  tabBarLabel: 'All Recipes',
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                      name="food-variant"
                      color={color}
                      size={26}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="User Profile"
                component={UserProfile}
                options={{
                  tabBarLabel: 'Profile',
                  tabBarIcon: ({ color }) => (
                    <Ionicons name="person-sharp" color={color} size={26} />
                  ),
                }}
              />
            </>
          ) : (
            <>
              <Tab.Screen name="Login" component={LoginScreen}
              options={{
                  tabBarLabel: 'Login',
                  tabBarIcon: ({ color }) => (
                    <MaterialIcons name="food-bank" color={color} size={26} />
                  ),
                }}
              />
              <Tab.Screen name="Registration" component={RegistrationScreen}
               options={{
                tabBarLabel: 'Register',
                  tabBarIcon: ({ color }) => (
                 <MaterialCommunityIcons
                  name="food-fork-drink"
                   color={color}
                   size={26}
                     />
                     ),
                              }}/>
            </>
          )}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
const appName = 'Rings';

AppRegistry.registerComponent(appName, () => RNRedux);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
