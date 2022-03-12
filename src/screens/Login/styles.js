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
    marginTop: 200,
    textAlign: 'center',
    fontFamily: 'Arvo',
    fontSize: 30,
    backgroundColor: 'white',
    width: 200,
    alignSelf: 'center',
    borderRadius: 20
  },
});
