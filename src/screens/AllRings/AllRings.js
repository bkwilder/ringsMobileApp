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
    this.changeView = this.changeView.bind(this);
  }
  componentDidMount() {
    this.props.fetchRings(this.props.auth.token);
  }

  changeView() {
    this.setState({ addRingView: false });
  }
  render() {
    const rings = this.props.rings;
    return (
      <View>
      
      <ImageBackground
        source={require("../../../assets/tree_rings.jpeg")}
        imageStyle={{opacity: 0.6}}
        style={{ opacity:0.8, width: "100%", height: "100%" }}
      >    
<ScrollView
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
 >
        <View style={styles.header}><Text style={styles.headerText}>Rings</Text></View>
        <View style={styles.container}>
            
            <View>
              {this.state.addRingView ? (
                <AddNewRingForm change={this.changeView} />
              ) : (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    this.setState({ addRingView: !this.state.addRingView })
                  }
                >
                  <Text style={styles.buttonTitle}>ADD NEW RING</Text>
                </TouchableOpacity>
              )}
            </View>
            {this.props.rings.length ? (
              
                <View>
                  {rings.map((ring) => {
                    return (
                      <TouchableOpacity
                        key={ring.id}
                        onPress={() =>
                          this.props.navigation.navigate("SingleRing", {
                            id: ring.ringId,
                            name: ring.name
                          })
                        }
                      >
                        <View style={styles.ringCard}>
                          <View style={{flex: .5, height: 150, width: 150}}>
                          <Image source={{ uri: ring.image }} style={{ flex: 1, height: "100%", width: '100%', borderRadius: 40,}}/>
                          </View>
                          <Text style={styles.value}>{ring.value}</Text>
                          <Text style={styles.name}>{ring.name}</Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              
            ) : (
              <View>
                <Text>Add a new ring to your tree!</Text>
              </View>
            )}
        </View>
        </ScrollView>
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
    fetchRings: (token) => dispatch(fetchRings(token)),
  };
};

export default connect(mapState, mapDispatch)(AllRings);
