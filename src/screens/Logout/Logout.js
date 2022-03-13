import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Button,
  Alert
} from "react-native";
import { connect } from "react-redux";
import { logout } from "../../store/auth";
import styles from "./styles";
import UpdateAccount from "./UpdateAccount";


class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editAccountView: false,
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.changeView = this.changeView.bind(this)
  }

  handleLogout = () => {
    this.props.logoutUser();
    this.props.navigation.navigate("Home");
  };
  changeView() {
    this.setState({ editAccountView: false });
  }



  render() {
    console.log(this.state)
    return (
      <View>
        <ImageBackground
          source={require("../../../assets/tree_rings.jpeg")}
          style={{ opacity: 0.6, width: "100%", height: "100%" }}
        ><View style={styles.container}>
          {this.state.editAccountView ? (
            <View styles={styles.updateAccountContainer}><UpdateAccount change={this.changeView}/></View>
          ) : (
            <View style={styles.container}>
              <TouchableOpacity style={styles.quizContainer} disabled="true">
                <Image
                  source={require("../../../assets/tree.png")}
                  style={{ flex: 0.8, height: "100%", width: "100%" }}
                />
                <Text style={styles.value}>{this.props.auth.firstName}</Text>
                <Text style={styles.name}>{this.props.auth.username}</Text>
                <Text style={styles.description}>{this.props.auth.email}</Text>
                <Button
                title="Edit Account Info"
                onPress={()=>this.setState({ editAccountView: true })}
              />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={this.handleLogout}
              >
                <Text style={styles.logout}>Logout</Text>
              </TouchableOpacity>

            </View>
          )}
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapState = (state) => {
  return {
    rings: state.rings,
    auth: state.auth,
  };
};
const mapDispatch = (dispatch) => {
  return {
    logoutUser: () => dispatch(logout()),
    
  };
};

export default connect(mapState, mapDispatch)(Logout);
