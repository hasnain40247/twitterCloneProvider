import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-elements";
import ReplyInput from "./ReplyInput";

const ReplyBox = ({ clicked }) => {
  const [inputColor, setInputColor] = useState("#657786");

  return clicked ? (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "white",
        borderTopWidth: 0.2,
        borderColor: "#AAB8C2",
        padding: 12,
      }}
    >
      <Text style={[styles.uname, { paddingLeft: 5 }]}>
        Replying to{" "}
        <Text style={[styles.uname, { color: "#1DA1F2" }]}>@hasnain40247</Text>
      </Text>
      <ReplyInput
        autoFocus={true}
        color={inputColor}
        placeholder={"Tweet your reply"}
        onFocus={() => setInputColor("#1DA1F2")}
        onBlur={() => setInputColor("#657786")}
      />

      <Button
        buttonStyle={styles.buttonStyle}
        titleStyle={{ fontSize: 17, fontWeight: "bold" }}
        title={"Reply"}
      />
    </View>
  ) : (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "white",
        borderTopWidth: 0.2,
        borderColor: "#AAB8C2",
        padding: 12,
      }}
    >
      <ReplyInput
        disabled={true}
        color={inputColor}
        placeholder={"Tweet your reply"}
        onFocus={() => setInputColor("#1DA1F2")}
        onBlur={() => setInputColor("#657786")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  uname: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#979797",
  },
  buttonStyle: {
    width: 80,
    borderRadius: 100,
    backgroundColor: "#1DA1F2",
    alignSelf: "flex-end",
  },
});

export default ReplyBox;
