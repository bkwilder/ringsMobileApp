import { StyleSheet } from 'react-native';
 /*
 mac&cheese: #F4B886
lightCyan: #D3F3EE
 prussianBlue: #0E273C
 indianRed: #C75B5B
 ghostWhite: #E8EAF3
*/
const BASE_SIZE = 380

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: 'white'
    },
    circlesContainer: {
      width: BASE_SIZE,
      height: BASE_SIZE,
      alignItems: "center",
    },
    circle_1: {
      top: 0,
      position: "absolute",
      width: BASE_SIZE,
      height: BASE_SIZE,
      borderRadius: BASE_SIZE / 2,
      borderWidth: 5,
      borderColor: '#735238'
    },
    circle_2: {
      top: BASE_SIZE * 0.1, // The amount remaining
      left: BASE_SIZE * 0.1,
      position: "absolute",
      width: BASE_SIZE * 0.8, // 80% of the base size
      height: BASE_SIZE * 0.8,
      borderRadius: BASE_SIZE / 2,
      borderWidth: 5,
      borderColor: "#886E58",
    },
    circle_3: {
      top: BASE_SIZE * 0.2,
      left: BASE_SIZE * 0.2,
      position: "absolute",
      width: BASE_SIZE * 0.6,
      height: BASE_SIZE * 0.6, // 60% of the base size
      borderRadius: (BASE_SIZE * 0.6) / 2,
      borderWidth: 5,
      borderColor: "#9D8977",
    },
    circle_4: {
      top: BASE_SIZE * 0.3,
      left: BASE_SIZE * 0.3,
      position: "absolute",
      width: BASE_SIZE * 0.4,
      height: BASE_SIZE * 0.4, // 60% of the base size
      borderRadius: (BASE_SIZE * 0.6) / 2,
      borderWidth: 5,
      borderColor: "#B2A496",
    },
    circle_5: {
      top: BASE_SIZE * 0.4,
      left: BASE_SIZE * 0.4,
      position: "absolute",
      width: BASE_SIZE * 0.2,
      height: BASE_SIZE * 0.2, // 60% of the base size
      borderRadius: (BASE_SIZE * 0.6) / 2,
      borderWidth: 5,
      borderColor: "#D1CBC4",
    },
  });
