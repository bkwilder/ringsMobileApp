import React from "react";
import { connect } from "react-redux";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import { authenticate } from "../../store";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  onLoginPress = (username, password) => {
    this.props.login(username, password);
  };

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/tree_rings.jpeg")}
          style={{ opacity: 0.6, width: "100%", height: "100%" }}
        >
          <KeyboardAwareScrollView
            style={{ flex: 1, width: "100%" }}
            keyboardShouldPersistTaps="never"
            // maintainVisibleContentPosition
          >
            <View style={styles.title}><Text style={styles.titleText}>Rings</Text></View>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => this.setState({ username: text })}
              value={this.state.username}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholderTextColor="#aaaaaa"
              secureTextEntry
              placeholder="Password"
              onChangeText={(text) => this.setState({ password: text })}
              value={this.state.password}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.onLoginPress(this.state.username, this.state.password)
              }
            >
              <Text style={styles.buttonTitle}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.cancel}>
              <Text
                style={styles.cancelText}
                onPress={() => this.props.navigation.navigate("SignUp")}
              >
                Not a user? Sign Up!
              </Text></View>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    isLoggedIn: !!state.auth.id,
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    login: (username, password) =>
      dispatch(authenticate(username, password, "login")),
  };
};

export default connect(mapLogin, mapDispatch)(LoginScreen);
