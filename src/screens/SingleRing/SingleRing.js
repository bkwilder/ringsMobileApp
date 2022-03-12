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
      <ImageBackground
        source={require("../../../assets/tree.png")}
        style={{ opacity: 0.6, width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <TouchableOpacity style={styles.quizContainer} disabled='true'>
            <Image source={{uri:this.props.ring.quiz.image}} style={{ flex:1, height:'100%', width:'100%'}}/>
            <Text style={styles.value}>{this.props.ring.quiz.value}</Text>
            <Text style={styles.name}>{this.props.ring.quiz.name}</Text>
            <Text style={styles.description}>{this.props.ring.quiz.description}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
