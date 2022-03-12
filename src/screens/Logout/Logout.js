import React from "react";
import { View, TouchableOpacity, Text, ImageBackground } from "react-native";
import { connect } from "react-redux";
import { logout } from "../../store/auth";
import styles from "./styles";

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout = () => {
    this.props.logoutUser();
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <View>
        <ImageBackground
          source={require("../../../assets/tree.png")}
          style={{ width: "100%", height: "100%" }}
        >
            <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={this.handleLogout}>
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    logoutUser: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatch)(Logout);
