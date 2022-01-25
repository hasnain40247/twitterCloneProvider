import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Button, Input, Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthInput from "../../components/AuthInput";
import { Context as AuthContext } from "../../context/AuthContext";
const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");

  const [inputColor, setInputColor] = useState("#657786");
  const { state, signup } = useContext(AuthContext);
  console.log(state);
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Entypo name="twitter" size={24} color="#1DA1F2" />,
      headerTitleAlign: "center",
      headerStyle: {
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0,
      },
    });
  },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create your account</Text>

      <View style={styles.inputContainer}>
        <AuthInput
          value={name}
          changeText={(newText) => setName(newText)}
          color={inputColor}
          placeholder={"Name"}
          onFocus={() => setInputColor("#1DA1F2")}
          onBlur={() => setInputColor("#657786")}
        />
        <AuthInput
          value={email}
          changeText={(newText) => setEmail(newText)}
          color={inputColor}
          placeholder={"Email"}
          onFocus={() => setInputColor("#1DA1F2")}
          onBlur={() => setInputColor("#657786")}
        />
        <AuthInput
          value={passw}
          changeText={(newText) => setPassw(newText)}
          color={inputColor}
          placeholder={"Password"}
          onFocus={() => setInputColor("#1DA1F2")}
          onBlur={() => setInputColor("#657786")}
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => {
            signup({ email, name, passw });
          }}
          buttonStyle={styles.buttonStyle}
          titleStyle={{ fontSize: 17, fontWeight: "bold" }}
          title={"Next"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: 80,
    borderRadius: 100,
    backgroundColor: "#1DA1F2",
  },
  inputContainer: {
    paddingHorizontal: "5%",
  },

  button: {
    alignItems: "flex-end",
    borderTopColor: "#E1E8ED",
    borderTopWidth: 0.2,
    padding: 10,
  },
  title: {
    paddingHorizontal: "5%",
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    paddingHorizontal: "5%",
    fontWeight: "bold",
    fontSize: 40,
  },

  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",

    justifyContent: "space-between",
  },
});

export default SignupScreen;
