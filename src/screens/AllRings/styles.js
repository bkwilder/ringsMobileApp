import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
    },

    addRingForm:{
      justifyContent:'center'
    },
    header:{
        alignSelf: 'center',
        marginTop:40,
        width: '70%',
        textAlign:'center',
        borderRadius: 50,
        height: 100,
        paddingTop:10,
        justifyContent:'center',
        alignContent:'center',


    },
    headerText:{
      fontFamily:'Oswald',
      fontSize: 50,
      alignSelf: 'center',
      color: "#435c8a",
    },
    ringCard:{
        backgroundColor: '#f0efeb',
        margin:10,
        height: 300,
        width:300,
        borderRadius:150,
        justifyContent:'center',
        alignItems:'center',
        alignSelf: 'center',
    },

    button: {
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
      input: {
        height: 48,
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
      buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Oswald',
        
      },
      noRingsText:{
        fontFamily:'Arvo',
        color: "#435c8a",
      }

})