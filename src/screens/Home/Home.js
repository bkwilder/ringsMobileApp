import React from "react";
import { connect } from "react-redux";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import { authenticate } from "../../store";

class Home extends React.Component {
    render() {
        return(
          <View style={styles.container}>
          <View style={styles.circlesContainer}>
              <TouchableOpacity style={styles.circle_1} />
              <TouchableOpacity style={styles.circle_2} />
              <TouchableOpacity style={styles.circle_3} />
          </View>
      </View>
        )
    }
}

const mapState = (state) => {
  return {
    username: state.auth.username
  };
};

export default connect(mapState)(Home);
