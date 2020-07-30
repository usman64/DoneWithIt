import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText.js";

import Icon from "./Icon";

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.contatiner} onPress={onPress}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label} numberOfLines={1}>
        {item.label}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contatiner: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
    textAlign: "center",
  },
  label: {
    marginTop: 5,
  },
});

export default CategoryPickerItem;
