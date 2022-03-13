import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { addRing } from "../../store/rings";
import styles from "./styles";

class AddNewRingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      value: "",
      description: "",
      linkToResource: "",
      image: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const token = this.props.auth.token;
    const ring = this.state;
    this.props.addRing(token, ring);
    this.props.change();
  }

  render() {
    return (
      <View style={styles.addRingForm}>
        <TextInput
          style={styles.input}
          placeholder="Name of Quiz (Myers-Briggs)"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => this.setState({ name: text })}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Quiz Value (Ex. ENFJ)"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => this.setState({ value: text })}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Description (Ex. The Teacher)"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => this.setState({ description: text })}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Resource Link (https://www.16personalities.com/)"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => this.setState({ linkToResource: text })}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Image URL to display"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => this.setState({ image: text })}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={this.onSubmit}>
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
    addRing: (token, ring) => dispatch(addRing(token, ring)),
  };
};

export default connect(mapState, mapDispatch)(AddNewRingForm);
