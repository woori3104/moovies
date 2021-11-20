import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Movies = ({ navigation: { navigate } }) => (
  <TouchableOpacity
    // stack의 Three화면으로 이동
    onPress={() => navigate("Stack", { screen: "Three" })}
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  >
    <Text>Movies</Text>
  </TouchableOpacity>
);
export default Movies;