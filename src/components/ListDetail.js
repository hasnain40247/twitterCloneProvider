import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, TouchableOpacity as TB } from "react-native";
import { View, Image, Text } from "react-native";
import dateFormat, { masks } from "dateformat";
import { useContext } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  
  SimpleLineIcons,
  MaterialCommunityIcons,

} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context as ChirpContext } from "../context/ChirpContext";
import { Context as AuthContext } from "../context/AuthContext";
import CustomTab from "./CustomTab";
import { useNavigation } from "@react-navigation/native";
import SocialBar from "./SocialBar";


const ListDetail = ({ idParam, userId }) => {

  const navigation = useNavigation();
  const refRBSheet = useRef();
  const { state, deleteChirp } = useContext(ChirpContext);
  const { getChirpUser } = useContext(AuthContext);
  const [localPost, setLocal] = useState({ user: {}, chirp: {} });

  useEffect(async () => {

    const res = await getChirpUser({ userId });

    setLocal({
      ...localPost,
      user: res,
      chirp: state.filter((chirp) => chirp._id == idParam)[0],
    });

    navigation.setOptions({
      title: "Chirp",
      headerStyle: {
        elevation: 0, 
        shadowOpacity: 0,
      },
    });

  }, []);

  return (
    <View style={styles.chirpContainer}>
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{
            uri: localPost.user.img,
          }}
        />
        <View style={styles.column}>
          <Text style={styles.name}>{localPost.user.name} </Text>
          <Text style={styles.uname}>@{localPost.user.username}</Text>
        </View>
        <TouchableOpacity
          style={{ width: 70, alignItems: "flex-end" }}
          onPress={() => refRBSheet.current.open()}
        >
          <SimpleLineIcons name="options-vertical" size={12} color="#979797" />
        </TouchableOpacity>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask
          height={150}
          customStyles={{
            wrapper: {},
            draggableIcon: {
              backgroundColor: "#AAB8C2",
            },
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 8,
              alignItems: "flex-start",
            },
          }}
        >
          <TB
            onPress={() => {
              deleteChirp({ idParam });
              refRBSheet.current.close();
              navigation.goBack();
            }}
          >
            <CustomTab
              icon={
                <MaterialCommunityIcons
                  style={{ marginRight: 11 }}
                  name="delete-outline"
                  size={27}
                  color="#657786"
                />
              }
              logout={true}
              title={"Delete Tweet"}
            />
          </TB>
        </RBSheet>
      </View>
      <Text style={styles.chirp}>{localPost.chirp.chirp}</Text>
      <View
        style={[styles.row, { justifyContent: "flex-start", marginTop: 14 }]}
      >
        <Text style={[styles.uname, { fontSize: 16 }]}>
          {dateFormat(localPost.chirp.date, "hh:MM TT  • dd mmm yy")} •
        </Text>
        <Text style={[styles.uname, { fontSize: 16, color: "#1DA1F2" }]}>
          {" "}
          Twitter Web App
        </Text>
      </View>
      <View style={styles.socialBar}>
        <SocialBar size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: 80,
    borderRadius: 100,
    backgroundColor: "#1DA1F2",
    alignSelf: "flex-end",
  },
  socialBar: {
    marginTop: 14,
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderColor: "#AAB8C2",
    paddingHorizontal: 20,

    paddingBottom: 10,
  },
  row2: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 23,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 4,
  },
  chirp: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 4,
    marginTop: 4,
    letterSpacing: 2,
  },
  uname: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#979797",
  },
  column: {
    flexDirection: "column",
    marginLeft: 10,

    flex: 1,
  },
  chirpContainer: {
    backgroundColor: "white",
    padding: 14,
    flexDirection: "column",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 1000, 
  },
  item: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",

    marginVertical: 0.5,
  },
});
export default ListDetail;
