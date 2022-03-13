import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
  StyleSheet
} from "react-native";
import { deleteRing } from "../../store/rings";
import { connect } from "react-redux";
import { addRing } from "../../store/rings";
// import styles from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

class DeleteModal extends React.Component {
    constructor(){
        super();
        this.deleteRing = this.deleteRing.bind(this)
    }

    deleteRing(){
        this.props.deleteRing(this.props.auth.token, this.props.ring.id);
        this.props.navigate('Root')
    }

    render(){
        console.log(this.props);
        return (
            <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.visible}
            onRequestClose={this.props.change}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Are you sure this ring is no longer a part of you??</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={this.deleteRing}
                >
                  <Text style={styles.buttonTitle}>Confirm Delete Ring</Text>
                </Pressable>
                <Pressable style={{paddingTop:10}} onPress={this.props.change}><Text>Cancel</Text></Pressable>
              </View>
            </View>
          </Modal>
        )
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
        deleteRing: (token, ringId) => dispatch(deleteRing(token, ringId))
    };
  };
  
  export default connect(mapState, mapDispatch)(DeleteModal);

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    button: {
      backgroundColor: '#F4B886',
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      height: 48,
      width: 200,
      borderRadius: 5,
      borderColor: 'white',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf:'center',
    },
    buttonTitle: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'Oswald',
      
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
