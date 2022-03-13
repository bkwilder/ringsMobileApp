import { StyleSheet } from 'react-native';
 /*
 mac&cheese: #F4B886
lightCyan: #D3F3EE
 prussianBlue: #0E273C
 indianRed: #C75B5B
 ghostWhite: #E8EAF3
*/
export default StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'white',
  },

  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
    // fontFamily: 'Kalam',
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
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#2e2e2d',
  },
  footerLink: {
    color: '#788eec',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Arvo',
    color: "#435c8a",
    fontSize: 30,
    backgroundColor: 'white',
    width: 200,
    height:50,
    alignSelf: 'center',
    borderRadius: 100,
    paddingTop: 3
  },
  signUp:{
    alignSelf:'center',
    marginBottom: 30,
    backgroundColor:'white',
    marginTop: 10,
    color: '#F4B886',
    width: 80,
    alignSelf:'center',
    textAlign: 'center',
    
  },
  cancel:{
    alignSelf:'center',
    backgroundColor:'white',
    marginTop: 10,
    color: '#F4B886',
    width: 100,
    alignSelf:'center',
    textAlign: 'center',
    padding: 4,
    
  },
  cancelText:{
    alignSelf:'center',
    color: '#F4B886',
    width: 100,
    alignSelf:'center',
    textAlign: 'center',
    padding: 10,
    
  },
  description:{
    fontFamily:'Arvo',
    color: "#435c8a",
    justifyContent: 'center',
    margin:20,
    textAlign:'center',
    fontSize: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius:40,

  },
  descriptionBox:{
    height: 200,
    width: 100,

  }
});

