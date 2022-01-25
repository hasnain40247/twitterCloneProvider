import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useEffect } from "react";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-elements";
import { Context as ChirpContext } from "../context/ChirpContext";
import { Context as AuthContext } from "../context/AuthContext";
const TweetScreen = ({ navigation }) => {
  const [chirp, setText] = useState("");
  const { createChirp } = useContext(ChirpContext);
  const {state:{user}}=useContext(AuthContext)
  console.log(user);

  useEffect(() => {
    navigation.setOptions({
      title: null,
      headerStyle: {
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0,
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather style={{ padding: 10 }} name="x" size={24} color="black" />
        </TouchableOpacity>
      ),
      headerRight: () =>
        chirp.length >= 1 && chirp.length <=280 ? (
          <Button
            onPress={() => createChirp({chirp, navigation})}
            buttonStyle={styles.buttoncontainer}
            style={styles.button}
            titleStyle={{ fontWeight: "bold", fontSize: 17 }}
            title={"Tweet"}
          />
        ) : (
          <Button
            disabled
            buttonStyle={styles.buttoncontainer}
            style={styles.button}
            titleStyle={{ fontWeight: "bold", fontSize: 17 }}
            title={"Tweet"}
          />
        ),
    });
  }, [chirp.length]);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: user.img
          }}
        />
        <TextInput
          multiline={true}
          autoFocus
          value={chirp}
          onChangeText={setText}
          style={styles.input}
          placeholderTextColor="#838383"
          placeholder="What's happening?"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 8,
    // borderWidth: 3,
    // borderColor: "red",
    fontSize: 20,
    flex: 1,
    marginLeft: 10,
    textAlignVertical: "top",
    flexWrap: "wrap",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 1000, //// a very high number like 500, 1000, 10000
  },
  row: {
    flexDirection: "row",
    flex: 1,
  },
  container: {
    paddingTop: 10,
    paddingHorizontal: 8,
    backgroundColor: "white",
    flex: 1,
  },
  buttoncontainer: {
    marginRight: 10,
    paddingHorizontal: 9,
    paddingVertical: 6,
    width: 80,
    borderRadius: 400,
    backgroundColor: "#1DA1F2",
  },
  button: {},
});

export default TweetScreen;
