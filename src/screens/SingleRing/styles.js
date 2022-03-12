import { StyleSheet } from "react-native";

export default StyleSheet.create({

  container: {
      flex:1,
        justifyContent: 'center', 
        alignContent: 'center',
        alignItems: 'center'

  },
  quizContainer: {
    alignSelf: 'center',
    alignItems: "center",
    backgroundColor: "white",
    padding: 30,
    height: 400,
    width: 300,
    margin: 30,
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
});
