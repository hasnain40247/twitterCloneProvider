import React, { useContext } from "react";
import { StyleSheet, Text, Image } from "react-native";
import { View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Context as AuthContext } from "../context/AuthContext";

const CustomHeader = () => {
  const { state } = useContext(AuthContext);

  const navigation = useNavigation();

  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openMenu}>
        <Image
          style={styles.image}
          source={{
            uri: state.user.img,
          }}
        />
      </TouchableOpacity>
      <View>
        <Entypo name="twitter" size={24} color="#1DA1F2" />
      </View>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="chart-timeline-variant"
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    borderRadius: 1000, 
  },

  header: {
    width: "100%",
    paddingTop: 30,
    height: 90,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,

    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 13,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    letterSpacing: 1,
  },
});
export default CustomHeader;
