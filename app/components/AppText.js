import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import defaultStyles from "../config/styles";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 18,
//     fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
//   },
// });

export default AppText;
