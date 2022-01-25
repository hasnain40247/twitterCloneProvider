import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoutContainer from "./LogoutContainer";
import NavigationContainer from "./NavigationContainer";
import UserCard from "./UserCard";
import { useDrawerStatus } from "@react-navigation/drawer";
const CustomDrawer = () => {

  const [button, setButton] = useState(0);

  const isDrawerOpen = useDrawerStatus();

  useEffect(() => {
    if (isDrawerOpen == "closed") {
      setButton(0);
    }
  }, [isDrawerOpen]);

  return (
    <SafeAreaView style={styles.safecontainer}>
      <UserCard button={button} onpress={() => setButton(!button)} />
      {button == 1 ? <LogoutContainer /> : <NavigationContainer />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safecontainer: {
    flex: 1,
  },
});

export default CustomDrawer;
