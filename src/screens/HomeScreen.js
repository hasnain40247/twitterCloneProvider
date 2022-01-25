import React, { useContext, useEffect, useState } from "react";
import {
  Animated,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  View,
} from "react-native";
import { FAB } from "react-native-elements";
import { useFocusEffect } from "@react-navigation/native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import CustomHeader from "../components/CustomHeaderButton";
import ListItem from "../components/ListItem";
import { Context as ChirpContext } from "../context/ChirpContext";
import { Context as AuthContext } from "../context/AuthContext";
const HomeScreen = ({ navigation }) => {
  const { state, fetchChirp } = useContext(ChirpContext);
  


  useFocusEffect(
    React.useCallback(() => {
     
      fetchChirp();
    }, [state.length])
  );



  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 90);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 90],
    outputRange: [0, -90],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          zIndex: 4,
          elevation: 4,
          transform: [{ translateY: translateY }],
        }}
      >
        <CustomHeader />
      </Animated.View>
      <FlatList
      
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 85 }}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
        data={state}
        renderItem={({ item }) => {
          return <ListItem date={item.date} userId={item.userId} idParam={item._id}  />;
        }}
        keyExtractor={(item) => item._id}
      />
      <FAB
        onPress={() => {
          navigation.navigate("Tweet");
        }}
        style={styles.fab}
        visible={true}
        icon={
          <MaterialCommunityIcons name="pencil-plus" size={24} color="white" />
        }
        color="#1DA1F2"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  header: {},
  container: {
    flex: 1,
  },

  title: {
    fontSize: 32,
  },
});

export default HomeScreen;
