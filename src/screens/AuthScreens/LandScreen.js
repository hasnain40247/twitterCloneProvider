import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Button, Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context as AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const LandScreen = ({ navigation }) => {
  const {tryLocalSignin}= useContext(AuthContext)

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Entypo name="twitter" size={24} color="#1DA1F2" />,
      headerTitleAlign: "center",
      headerStyle: {
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0,
      },
    });

    tryLocalSignin({navigation})
  },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        See what's happening in the world right now.
      </Text>

      <View style={{ height: 200, justifyContent: "space-between" }}>
        <View>
          <Button
            buttonStyle={styles.button}
            titleStyle={styles.title}
            title={"Create account"}
            onPress={()=> navigation.navigate("Signup")}
          />
          <Text style={{ marginTop: 20, fontSize: 12 }}>
            By signing up, you agree to our Terms, Privacy Policy, and Cookie
            Use
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#657786" }}>
            Have an account already?{" "}
          </Text>
          <TouchableOpacity   
            onPress={()=> navigation.navigate("Signin")}
          
          style={{ padding: 0, margin: 0 }}>
            <Text style={{ color: "#1DA1F2" }}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 400,
    backgroundColor: "#1DA1F2",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontWeight: "bold",
    fontSize: 40,
  },

  container: {
    padding: "7%",
    paddingTop: "55%",
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default LandScreen;
