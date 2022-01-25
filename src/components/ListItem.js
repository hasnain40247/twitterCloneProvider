import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, TouchableOpacity as TB } from "react-native";
import { View, Image, Text } from "react-native";
import dateFormat, { masks } from "dateformat";
import { useContext } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context as ChirpContext } from "../context/ChirpContext";
import { Context as AuthContext } from "../context/AuthContext";
import CustomTab from "./CustomTab";
import { useNavigation } from "@react-navigation/native";
import SocialBar from "./SocialBar";

const ListItem = ({ date = null, idParam, userId }) => {
  const navigation = useNavigation();
  const refRBSheet = useRef();
  const [showDate, setShowDate] = useState("");
  const { deleteChirp } = useContext(ChirpContext);
  const { getChirpUser } = useContext(AuthContext);
  const { state } = useContext(ChirpContext);
  const [localPost, setLocal] = useState({ user: {}, chirp: {} });

  useEffect(async () => {
    const res = await getChirpUser({ userId });

    setLocal({
      ...localPost,
      user: res,
      chirp: state.filter((chirp) => chirp._id == idParam)[0],
    });

    date = new Date(date != null ? date : localPost.chirp.date);

    var hours = Math.abs(Date.now() - date) / 36e5;

    if (Math.trunc(60 * hours) > 1 || Math.trunc(60 * hours) < 60) {
      setShowDate(`${Math.trunc(60 * hours)}m`);
    }
    if (Math.trunc(60 * hours) >= 60) {
      setShowDate(`${Math.trunc(hours)}h`);
      if (hours > 24) {
        setShowDate(dateFormat(date, "d mmm yy"));
      }
    }
    if (Math.trunc(60 * 60 * hours) <= 59) {
      setShowDate(`${Math.trunc(60 * 60 * hours)}s`);
    }
  }, []);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Detail", { idParam: idParam, userId: userId })
      }
      activeOpacity={0.8}
    >
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{
            uri: localPost.user.img,
          }}
        />
        <View style={styles.column}>
          <View style={styles.row}>
            <Text style={styles.name}>
              {localPost.user.name}{" "}
              <Text style={styles.uname}>
                @{localPost.user.username} • {showDate}
              </Text>
            </Text>

            <TouchableOpacity
              style={{ width: 70, alignItems: "flex-end" }}
              onPress={() => refRBSheet.current.open()}
            >
              <SimpleLineIcons
                name="options-vertical"
                size={12}
                color="#979797"
              />
            </TouchableOpacity>
          </View>
          <Text>{localPost.chirp.chirp} </Text>
          <SocialBar />
        </View>

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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 15,
    fontWeight: "bold",
  },
  uname: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#979797",
  },
  column: {
    flexDirection: "column",
    marginLeft: 10,

    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 1000, //// a very high number like 500, 1000, 10000
  },
  item: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 20,
    marginVertical: 0.5,
  },
});
export default ListItem;
