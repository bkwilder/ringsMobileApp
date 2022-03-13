import React from "react";
import { connect } from "react-redux";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import { signUp } from "../../store";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      email: "",
    };
  }

  onSubmit = (userInfo) => {
    this.props.signUp(userInfo);
  };

  render() {
    console.log(this.state);
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
            <ScrollView>
            <View style={styles.description}>
              <Text style={styles.description}>
                Have trouble keeping track of all the different aspects to your personality? Store
                them here as
              </Text>
              <Text style={styles.title}>Rings</Text>
              </View>

              <TextInput
                style={styles.input}
                placeholder="First Name"
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => this.setState({ firstName: text })}
                value={this.state.firstName}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => this.setState({ email: text })}
                value={this.state.email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />
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
                onPress={() => this.onSubmit(this.state)}
              >
                <Text style={styles.buttonTitle}>SignUp</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.login}
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <View style={styles.cancel}><Text style={styles.cancelText}>Already a user? Login.</Text></View>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAwareScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUp(user)),
  };
};

export default connect(mapState, mapDispatch)(SignUp);
