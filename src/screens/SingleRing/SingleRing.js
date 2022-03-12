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
  Pressable,
  Modal,
} from "react-native";
import { connect } from "react-redux";
import DeleteModal from "./DeleteModal";
import { fetchRing } from "../../store/ring";
import styles from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

class SingleRing extends React.Component {
  constructor() {
    super();
    this.state = {
      modalView: false,
    };
    this.changeModalView = this.changeModalView.bind(this)
  }
  componentDidMount() {
    this.props.fetchRing(this.props.auth.token, this.props.route.params.id);
  }

  changeModalView(){
    this.setState({modalView: !this.state.modalView})
  }

  render() {
    console.log('props.....',this.props)
    return (
      <ImageBackground
        source={require("../../../assets/tree.png")}
        style={{ opacity: 0.6, width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <TouchableOpacity style={styles.quizContainer} disabled="true">
            <Image
              source={{ uri: this.props.ring.quiz.image }}
              style={{ flex: 1, height: "100%", width: "100%" }}
            />
            <Text style={styles.value}>{this.props.ring.quiz.value}</Text>
            <Text style={styles.name}>{this.props.ring.quiz.name}</Text>
            <Text style={styles.description}>
              {this.props.ring.quiz.description}
            </Text>
          </TouchableOpacity>
          <DeleteModal change={this.changeModalView} visible={this.state.modalView} navigate={this.props.navigation.navigate}/>
          <Pressable style={styles.button}>
            <Text style={styles.text} onPress={this.changeModalView}>Delete this Ring</Text>
          </Pressable>
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
