import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      />
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 50,
    right: 50,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 50,
    left: 50,
  },
});
