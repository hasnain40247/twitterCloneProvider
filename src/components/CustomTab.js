import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { View } from "react-native";
const CustomTab = ({ icon, title, logout = false }) => {
  return (
    <View style={styles.row}>
      {icon ? icon : null}
      {logout ? (
        <Text style={[styles.text, styles.log]}>{title}</Text>
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  log: {
    color: "red",
  },
  row: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "900",
    fontSize: 20,

    color: "black",
  },
});

export default CustomTab;
