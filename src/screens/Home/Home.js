import React from "react";
import { connect } from "react-redux";
import {
  Image,
  Text,
  TextInput,
  Pressable,
  View,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import { authenticate } from "../../store";
import CirclePath from "./CirclePath";

const top5 = ['Enneagram 7', 'MyersBriggs ENFJ', 'Oak Tree' , '', '']
class Home extends React.Component {

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/tree_rings.jpeg")}
        imageStyle={{ opacity: 0.4 }}
        style={{ opacity: 0.7, width: "100%", height: "100%" }}
      ><View style={styles.container}>
        <Text style={styles.greeting}>Hi, {this.props.firstName}!</Text>
        <Text style={styles.header}>Here are your core rings:</Text>
        <View style={styles.circlesContainer}>


          <TouchableOpacity style={styles.circle_1}/>
          <TouchableOpacity style={styles.circle_2} />
          <TouchableOpacity style={styles.circle_3} />
          <TouchableOpacity style={styles.circle_4} />
          <TouchableOpacity style={styles.circle_5} />
        </View>
        </View>
      </ImageBackground>
    );
  }
}

const mapState = (state) => {
  return {
    username: state.auth.username,
    firstName: state.auth.firstName
  };
};

export default connect(mapState)(Home);
