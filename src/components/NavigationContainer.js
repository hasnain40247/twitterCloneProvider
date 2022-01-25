import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import CustomTab from "./CustomTab";
import { useNavigation } from "@react-navigation/native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
const NavigationContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.column}>
      <CustomTab
        title={"Profile"}
        icon={
          <FontAwesome
            style={styles.icon}
            name="user-o"
            size={20}
            color="black"
          />
        }
      />

      <TouchableOpacity onPress={() => navigation.navigate("Lists")}>
        <CustomTab
          title={"Lists"}
          icon={
            <MaterialIcons
              style={styles.icon}
              name="list-alt"
              size={20}
              color="black"
            />
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Topics")}>
        <CustomTab
          title={"Topics"}
          icon={
            <Ionicons
              style={styles.icon}
              name="chatbubble-ellipses-outline"
              size={20}
              color="black"
            />
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Bookmarks")}>
        <CustomTab
          title={"Bookmarks"}
          icon={
            <FontAwesome
              style={styles.icon}
              name="bookmark-o"
              size={20}
              color="black"
            />
          }
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Moments")}>
        <CustomTab
          title={"Moments"}
          icon={
            <MaterialCommunityIcons
              style={styles.icon}
              name="lightning-bolt-outline"
              size={20}
              color="black"
            />
          }
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Monetization")}>
        <CustomTab
          title={"Monetization"}
          icon={
            <Ionicons
              style={styles.icon}
              name="cash-outline"
              size={20}
              color="black"
            />
          }
        />
      </TouchableOpacity>
      <View style={{ borderBottomWidth: 1, borderColor: "#f2f3f3" }}></View>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <CustomTab title={"Settings and privacy"} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Help")}>
        <CustomTab title={"Help Center"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 15,
  },
  column: {
    marginTop: 7,
    borderTopWidth: 1,
    borderColor: "#f2f3f3",
    height: 200,
    flexDirection: "column",
    flex: 5,
  },
});

export default NavigationContainer;
