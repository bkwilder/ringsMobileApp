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
} from "react-native";
import { connect } from "react-redux";
import { fetchRings } from "../../store/rings";
import styles from "./styles";
import AddNewRingForm from "./AddNewRingForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

class AllRings extends React.Component {
  constructor() {
    super();
    this.state = {
      addRingView: false,
    };
    this.changeView = this.changeView.bind(this)
  }
  componentDidMount() {
    this.props.fetchRings(this.props.auth.token);
  }

  changeView(){
      this.setState({addRingView: false})
  }
  render() {
    const rings = this.props.rings;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Rings</Text>
        <KeyboardAwareScrollView
          style={{ flex: 1, width: "100%" }}
          keyboardShouldPersistTaps="always"
        >
          <View>
            {this.state.addRingView ? (
              <AddNewRingForm change={this.changeView}/>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  this.setState({ addRingView: !this.state.addRingView })
                }
              >
                <Text style={styles.searchText}>ADD NEW RING</Text>
              </TouchableOpacity>
            )}
          </View>
          {this.props.rings.length ? (
            <ScrollView>
              <View>
                {rings.map((ring) => {
                  return (
                    <TouchableOpacity key={ring.id}       
                    onPress={() =>
                        this.props.navigation.navigate('SingleRing', {id: ring.id})
                      } >
                      <View style={styles.ringCard}>
                        <Image source={{ uri: ring.image }} />
                        <Text>{ring.value}</Text>
                        <Text>{ring.name}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          ) : (
            <View>
              <Text>Add a new ring to your tree!</Text>
            </View>
          )}
        </KeyboardAwareScrollView>
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
    fetchRings: (token) => dispatch(fetchRings(token)),
  };
};

export default connect(mapState, mapDispatch)(AllRings);
