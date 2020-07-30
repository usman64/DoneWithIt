import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
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
    position: "absolute",
    top: 50,
    left: 50,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  deleteIcon: {
    position: "absolute",
    top: 50,
    right: 50,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
