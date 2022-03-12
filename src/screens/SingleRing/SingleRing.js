import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import { connect } from "react-redux";
import { fetchRing } from "../../store/ring";
import styles from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

class SingleRing extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchRing(this.props.auth.token, this.props.route.params.id);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/tree.png")}
          style={{ opacity: 0.6, width: "100%", height: "100%" }}
        >
          <Text>{this.props.ring.quiz.value}</Text>
        </ImageBackground>
      </View>
    );
  }
}

const mapState = (state) => {
  return {
    ring: state.ring,
    auth: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchRing: (token, id) => dispatch(fetchRing(token, id)),
  };
};

export default connect(mapState, mapDispatch)(SingleRing);
