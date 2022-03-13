import { StyleSheet } from "react-native";

export default StyleSheet.create({

  container: {
        justifyContent: 'center', 
        alignContent: 'center',
        alignItems: 'center',


  },
  quizContainer: {
    alignSelf: 'center',

    padding: 10,
    margin: 10,
    width: 300,
    height:100,
    backgroundColor: "white",
    borderRadius:30,
  },


  name:{
    fontFamily:'Oswald',
    marginTop: 5,
    marginBottom: 5,
    fontSize: 15,
    textAlign: 'center',
  },

  description:{
    fontFamily:'Lato',
    alignContent:'center',
    marginTop: 10,

    fontSize: 15,
  },
  button:{
    backgroundColor:'white',
    height: 20,
    width: 130,
    borderRadius: 50,
    textAlign: 'center',

  },
  text: {
    alignSelf: 'center'
  }
});
