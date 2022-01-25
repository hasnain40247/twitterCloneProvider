import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Input } from "react-native-elements";

const AuthInput = ({
  value,
  changeText,
  placeholder,
  onFocus,
  onBlur,
  color,
}) => {
  const [check, setCheck] = useState(0);

  useEffect(() => {
    if (placeholder === "Password") {
      setCheck(1);
    } else {
      setCheck(0);
    }
  }, [placeholder]);

  return <Input
      secureTextEntry={check!=1?false:true}
      autoComplete="off"
      autoCapitalize={"none"}
      value={value}
      onChangeText={changeText}
      underlineColorAndroid={color}
      style={styles.input}
      placeholderTextColor="#657786"
      onBlur={onBlur}
      selectionColor="#1DA1F2"
      inputStyle={{ paddingHorizontal: 5, paddingBottom: 5 }}
      inputContainerStyle={{ borderBottomWidth: 0 }}
      onFocus={onFocus}
      placeholder={placeholder}
    />
  
};

const styles = StyleSheet.create({
  input: {
    width: 60,
  },
});

export default AuthInput;
