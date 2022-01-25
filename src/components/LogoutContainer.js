import React, { useContext } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomTab from "./CustomTab";
import { Context as AuthContext } from "../context/AuthContext";

const LogoutContainer = () => {
  const { signout } = useContext(AuthContext);
  return (
    <View style={styles.column}>
      <CustomTab title={"Create a new account"} />

      <CustomTab title={"Add an existing account"} />
      <TouchableOpacity onPress={signout}>
        <CustomTab logout={true} title={"Log Out"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 15,
  },
  column: {
    marginTop: 7,

    height: 200,
    flexDirection: "column",
    flex: 5,
  },
});

export default LogoutContainer;
