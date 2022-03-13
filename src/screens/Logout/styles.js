import { StyleSheet } from "react-native";
const BASE_SIZE = 100;

export default StyleSheet.create({
  container: {
    flex:1,
      justifyContent: 'center', 
      alignContent: 'center',
      alignItems: 'center'

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
  },
quizContainer: {
  alignSelf: 'center',
  alignItems: "center",
  backgroundColor: "white",
  padding: 30,
  height: 400,
  width: 300,
  margin: 5,
  borderRadius:30,
},

value:{
  fontFamily:'Arvo',
  marginTop:20,
  fontSize: 20,
},

name:{
  fontFamily:'Oswald',
  marginTop: 5,
  marginBottom: 5,
  fontSize: 20,
},

description:{
  fontFamily:'Lato',
  justifyContent:'center',
  alignContent:'center',
  marginTop: 10,
  textAlign: 'center',
  fontSize: 15,
},
button:{
  backgroundColor:'white',
  height: 20,
  width: 130,
  borderRadius: 50,
  textAlign: 'center'
},
text: {
  alignSelf: 'center'
},
input: {
  height: 48,
  width: 300,
  borderRadius: 5,
  overflow: 'hidden',
  backgroundColor: 'white',
  fontFamily: 'Lato',
  marginTop: 15,
  marginBottom: 10,
  marginLeft: 30,
  marginRight: 30,
  paddingLeft: 16,
},

cancel:{
  alignSelf:'center',
  marginBottom: 30,
  backgroundColor:'white',
  marginTop: 10,
  color: '#F4B886',
  width: 80,
  alignSelf:'center',
  textAlign: 'center',
  
},
buttonTitle: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  fontFamily: 'Oswald',
  
},
submitButton: {
  backgroundColor: '#F4B886',
  marginLeft: 30,
  marginRight: 30,
  marginTop: 20,
  marginBottom: 30,
  height: 48,
  width: 200,
  borderRadius: 5,
  borderColor: 'white',
  borderWidth: 1,
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf:'center',
  opacity: 0.9,
},
});
