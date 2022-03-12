// import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React, { useEffect, createContext, useState } from "react";
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { AppRegistry,StyleSheet, Text, TextInput, View, Dimensions } from "react-native";
import { Provider } from "react-redux";
import { connect } from 'react-redux'
import store from './src/store'
import Navigator from './src/screens/Navigator/Navigator'




export default function App() {
  const [loaded] = useFonts({
    Arvo: require('./assets/fonts/Arvo/Arvo-Regular.ttf'),
    Lato: require('./assets/fonts/Lato/Lato-Regular.ttf'),
    Oswald: require('./assets/fonts/Oswald/Oswald-Regular.ttf'),

  });
  
  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}



AppRegistry.registerComponent(appName, () => App);


const appName = "Rings";




