import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, EvilIcons } from "@expo/vector-icons";

const SocialBar = ({ size = 25 }) => {
  return (
    <View style={styles.row2}>
      <TouchableOpacity>
        <Ionicons name="chatbubble-outline" size={size - 7} color="#979797" />
      </TouchableOpacity>
      <TouchableOpacity>
        <EvilIcons name="retweet" size={size} color="#979797" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="heart-outline" size={size - 7} color="#979797" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="md-share-social-outline" size={18} color="#979797" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  row2: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 23,
  },
});

export default SocialBar;
