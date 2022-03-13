// import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";
import { useFonts } from 'expo-font';
import { AppRegistry} from "react-native";
import { Provider } from "react-redux";
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




