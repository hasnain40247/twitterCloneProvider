import React, { useEffect, useState ,useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Button, Input, Text } from "react-native-elements";
import AuthInput from "../../components/AuthInput";
import { Context as AuthContext } from "../../context/AuthContext";

const SigninScreen = ({ navigation }) => {

    const {signin}=useContext(AuthContext)
    
  const [inputColor, setInputColor] = useState("#657786");
const [email, setEmail]=useState("")
const [passw, setPassw]=useState("")

    

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

      <View style={styles.inputContainer}>
      <Text style={styles.text}>To get started, first enter your email</Text>

     
        <AuthInput 
        changeText={setEmail}
        value={email}
          color={inputColor}
          placeholder={"Email"}
          onFocus={() => setInputColor("#1DA1F2")}
          onBlur={() => setInputColor("#657786")}
        />
        <AuthInput
          changeText={setPassw}
        value={passw}
          color={inputColor}
          placeholder={"Password"}
          onFocus={() => setInputColor("#1DA1F2")}
          onBlur={() => setInputColor("#657786")}
        />
    
      </View>
      <View style={styles.button}>
        <Button
   onPress={()=>signin({email,passw})}
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
    paddingHorizontal: "2%",
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
    marginBottom:20
  },

  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",

    justifyContent: "space-between",
  },
});

export default SigninScreen;
