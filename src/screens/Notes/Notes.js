import React, { useCallback } from "react";
import { Text, View, Pressable, Linking, Alert, Button } from "react-native";
import { connect } from "react-redux";
import DeleteNoteModal from "./DeleteNoteModal";

import styles from "./styles";

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
class Notes extends React.Component {
  constructor() {
    super();
    this.state = {
      modalView: false,
    };
    this.changeModalView = this.changeModalView.bind(this);
  }

  changeModalView() {
    this.setState({ modalView: !this.state.modalView });
  }

  render() {
    if (!this.props.note) return <></>;
    return (
      <View style={styles.container}>
        <View style={styles.quizContainer} disabled="true">
          <Text style={styles.name}>
            {this.props.note.createdAt.slice(0, 10)}
          </Text>
          <Text style={styles.description}>{this.props.note.note}</Text>
          {this.props.note.resourceLink ? (
            <OpenURLButton url={this.props.note.resourceLink}>
              Link To Resource!
            </OpenURLButton>
          ) : (
            <></>
          )}
        </View>
        <DeleteNoteModal
          change={this.changeModalView}
          visible={this.state.modalView}
          navigate={this.props.navigate}
        />
        <Pressable style={styles.button}>
          <Text style={styles.text} onPress={this.changeModalView}>
            Delete this Note
          </Text>
        </Pressable>
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

export default connect(mapState, null)(Notes);
