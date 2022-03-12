import { StyleSheet } from "react-native";
const BASE_SIZE = 100;

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop:330,
  },

  button: {
    top: 0,
    position: "absolute",
    width: BASE_SIZE,
    height: BASE_SIZE,
    borderRadius: BASE_SIZE / 2,
    alignContent:'center',
    justifyContent:'center',
    backgroundColor: "#886E58",
  },

  logout:{
      alignSelf:'center'
  }
});
