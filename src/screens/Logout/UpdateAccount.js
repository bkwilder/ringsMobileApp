import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { updateUser } from "../../store/auth";
import styles from "./styles";

class UpdateAccount extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      Alert.alert("The new passwords do not match!");
    } else {
      this.props.updateUser(this.props.auth.token, {
        ...this.state,
        id: this.props.auth.id,
      });
      this.props.change();
    }
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.addRingForm}>
        <TextInput
          style={styles.input}
          placeholder={this.props.auth.firstName}
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => this.setState({ firstName: text })}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder={this.props.auth.username}
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => this.setState({ username: text })}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder={this.props.auth.email}
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => this.setState({ description: text })}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => this.setState({ password: text })}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => this.setState({ confirmPassword: text })}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.submitButton} onPress={this.onSubmit}>
          <Text style={styles.buttonTitle}>SUBMIT</Text>
        </TouchableOpacity>
        <Text style={styles.cancel} onPress={this.props.change}>
          Cancel
        </Text>
      </View>
    );
  }
}

const mapState = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    updateUser: (token, updatedUser) =>
      dispatch(updateUser(token, updatedUser)),
  };
};

export default connect(mapState, mapDispatch)(UpdateAccount);
