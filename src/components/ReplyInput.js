import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Input } from "react-native-elements";

const ReplyInput = ({
  autoFocus,
  value,
  changeText,
  placeholder,
  onFocus,
  onBlur,
  color,
  disabled=false
}) => {
  



  return (
    <Input
    disabled={disabled}
    autoFocus={autoFocus}
      autoComplete="off"
      autoCapitalize={"none"}
      value={value}
      onChangeText={changeText}
      underlineColorAndroid={color}
      style={styles.input}
      placeholderTextColor="#657786"
      onBlur={onBlur}
      containerStyle={{ paddingHorizontal: 0, paddingVertical: 0 }}
      selectionColor="#1DA1F2"
      inputStyle={{
        paddingHorizontal: 5,
        fontSize: 15,
        marginVertical: 0,
        paddingVertical: 0,
      }}
      inputContainerStyle={{
        borderBottomWidth: 0,
        paddingHorizontal: 0,
        marginVertical: 0,
        paddingVertical: 0,
      }}
      onFocus={onFocus}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 0,
    paddingVertical: 0,
  },
});

export default ReplyInput;
