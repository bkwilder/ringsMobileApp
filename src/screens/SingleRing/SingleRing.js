import React, { useCallback } from "react";
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
  Linking,
  Alert,
  Button,
} from "react-native";
import { connect } from "react-redux";
import DeleteModal from "./DeleteModal";
import Notes from "../Notes/Notes";
import { fetchRing } from "../../store/ring";
import styles from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const OpenURLButton = ({ url = "www.google.com", children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};
class SingleRing extends React.Component {
  constructor() {
    super();
    this.state = {
      modalView: false,
      notesView: false,
    };
    this.changeModalView = this.changeModalView.bind(this);
  }
  componentDidMount() {
    this.props.fetchRing(this.props.auth.token, this.props.route.params.id);
  }

  changeModalView() {
    this.setState({ modalView: !this.state.modalView });
  }

  render() {
    if (!this.props.ring.quiz) return <></>;
    return (
      <ImageBackground
        source={require("../../../assets/tree_rings.jpeg")}
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
            {this.props.ring.quiz.linkToResource ? (
              <OpenURLButton url={this.props.ring.quiz.linkToResource}>
                Link To More Info
              </OpenURLButton>
            ) : (
              <></>
            )}
          </TouchableOpacity>
          <DeleteModal
            change={this.changeModalView}
            visible={this.state.modalView}
            navigate={this.props.navigation.navigate}
          />
          <Pressable style={styles.button}>
            <Text style={styles.text} onPress={this.changeModalView}>
              Delete this Ring
            </Text>
          </Pressable>
          <View style={styles.showNotes}>
              <Text>Show Notes</Text>
            <MaterialIcons name="keyboard-arrow-up" size={25} />
            </View>
          {!this.state.notesView ? (
            <></>
          ) : (
            this.props.ring.notes.map((note) => (
            <Notes
              key={note.id}
              note={note}
              navigate={this.props.navigation.navigate}
            />
          )))}
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
