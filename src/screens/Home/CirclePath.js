import * as React from "react";
import { View, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import Svg, {
  Circle,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Image,
  Defs,
  ClipPath,
} from "react-native-svg";
const BASE_SIZE = 380;
export default SvgComponent = (props) => (
  <View style={styles.circlesContainer}>
    <Svg height="100%" width="100%" viewBox="0 0 300 300" {...props}>
        
      <G id="circle">
        <Circle
          r={100}
          x={150}
          y={150}
          transform="rotate(+90)"
        />
      </G>

      <Text fill="#000" fontSize="14">
        <TextPath href="#circle" startOffset="40%">
          <TSpan textAnchor="middle" dy={10}>
            Enneagram 7k lksdkljf
          </TSpan>
        </TextPath>
      </Text>

      {/* <Text fill="#000" fontSize="14">
        <TextPath href="#circle" startOffset="20%">
          <TSpan textAnchor="middle" dy={20}>
            Love Language
          </TSpan>
        </TextPath>
      </Text> */}

      {/* <Text fill="#000" fontSize="14">
        <TextPath href="#circle" startOffset="20%">
          <TSpan textAnchor="middle" dy={-40}>
            Myers Briggs
          </TSpan>
        </TextPath>
      </Text> */}

      {/* <Text fill="#000" fontSize="14">
        <TextPath href="#circle" startOffset="20%">
          <TSpan textAnchor="middle" dy={0}>
            high5
          </TSpan>
        </TextPath>
      </Text> */}

      {/* <Text fill="#000" fontSize="14">
        <TextPath href="#circle" startOffset="20%">
          <TSpan textAnchor="middle" dy={-10}>
            Tree
          </TSpan>
        </TextPath>
      </Text> */}
    </Svg>
    <Pressable style={styles.circle_1} />
    <Pressable style={styles.circle_2} />
    <Pressable style={styles.circle_3} />
    <Pressable style={styles.circle_4} />
    <Pressable style={styles.circle_5} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5E3719",
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
