import React, { useContext } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native-elements/dist/image/Image";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context as AuthContext } from "../context/AuthContext";
const UserCard = ({ button, onpress }) => {
  const { state } = useContext(AuthContext);
  console.log(state.user);
  return (
    <View style={styles.column}>
      <Image
        style={styles.image}
        source={{
          uri: state.user.img,
        }}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.name}>{state.user.name}</Text>
          <Text style={styles.uname}>@{state.user.username}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          style={{ alignItems: "flex-end", width: 100 }}
          hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
          onPress={onpress}
        >
          {button == 1 ? (
            <AntDesign
              name="up"
              style={{ fontWeight: "bold" }}
              size={14}
              color="black"
            />
          ) : (
            <AntDesign
              name="down"
              style={{ fontWeight: "bold" }}
              size={14}
              color="black"
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.row2}>
        <Text style={styles.following}>
          20 <Text style={styles.subtext}>Following</Text>
        </Text>
        <Text style={styles.following}>
          20 <Text style={styles.subtext}>Followers</Text>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  following: {
    paddingRight: 20,
    fontSize: 17,
    fontWeight: "bold",
  },
  subtext: {
    paddingRight: 20,

    fontWeight: "normal",
  },
  row2: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  column: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#f2f3f3",
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  uname: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#979797",
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 1000, //// a very high number like 500, 1000, 10000
  },
});
export default UserCard;
