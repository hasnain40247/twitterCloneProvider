import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ListDetail from "../components/ListDetail";
import ListItem from "../components/ListItem";
import ReplyBox from "../components/ReplyBox";

import { Context as ChirpContext } from "../context/ChirpContext";

const TweetDetailScreen = ({ route, navigation }) => {
  const { state, fetchChirp } = useContext(ChirpContext);
  console.log(route);
  console.log(navigation);
  const [clicked, setClicked]= useState(false)


  const { idParam, userId } = route.params;
  // const dummdetails = [
  //   {
  //     name: "djdjdjd",

  //     _id: "61edc8e71dc1b8de4438c494",
  //     userId: "61edc34b1dc1b8de4438c3b9",
  //   },
  //   {
  //     name: "djdjdjdddd",

  //     _id: "61edc8e71dc1b8de4438c494",
  //     userId: "61edc34b1dc1b8de4438c3b9",
  //   },
  //   {
  //     name: "djdjdddsks",

  //     _id: "61edc8e71dc1b8de4438c494",
  //     userId: "61edc34b1dc1b8de4438c3b9",
  //   },
  //   {
  //     name: "djdjdkjjkwjd",

  //     _id: "61edc8e71dc1b8de4438c494",
  //     userId: "61edc34b1dc1b8de4438c3b9",
  //   },
  //   {
  //     name: "djdkdsdqqjdjd",

  //     _id: "61edc8e71dc1b8de4438c494",
  //     userId: "61edc34b1dc1b8de4438c3b9",
  //   },
  //   {
  //     name: "djdjjkwjkkddjd",

  //     _id: "61edc8e71dc1b8de4438c494",
  //     userId: "61edc34b1dc1b8de4438c3b9",
  //   },
  // ];

  const getHeader = () => {
    return <ListDetail userId={userId} idParam={idParam} />;
  };

  return (
    <View style={styles.container}>
    <ListDetail userId={userId} idParam={idParam} />
      {/* <FlatList
        ListHeaderComponent={getHeader}
        style={{ flex: 1 }}
        data={dummdetails}
        renderItem={({ item }) => {
          return <ListItem userId={item.userId} idParam={item._id} />;
        }}
        keyExtractor={(item) => item.name}
      /> */}
{clicked? <ReplyBox clicked={true} />: <TouchableOpacity onPress={()=>setClicked(true)}>

<ReplyBox clicked={false}/>
</TouchableOpacity> }

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
    backgroundColor:"white",
  
    flexDirection: "column",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 32,
  },
});

export default TweetDetailScreen;
