import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:80,
    },

    ringCard:{
        backgroundColor: '#6C584C',
        margin:10,
        height: 200,
        width:200,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
    },

    button: {
        backgroundColor: '#B8E0D2',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 70,
        marginRight: 70,
        marginTop: 10,
        marginBottom: 30,
        height: 48,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
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

})