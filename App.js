import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./src/screens/HomeScreen";
import CustomHeader from "./src/components/CustomHeaderButton";
import CustomDrawer from "./src/components/CustomDrawer";
import ListScreen from "./src/screens/ListScreen";
import BookmarkScreen from "./src/screens/BookmarkScreen";
import { Provider as MenuProvider } from "react-native-paper";
import MomentScreen from "./src/screens/MomentScreen";
import SettingScreen from "./src/screens/SettingScreen";
import HelpScreen from "./src/screens/HelpScreen";
import TopicScreen from "./src/screens/TopicScreen"
import MonetizationScreen from "./src/screens/MonetizationScreen"
import TweetScreen from "./src/screens/TweetScreen";
import LandScreen from "./src/screens/AuthScreens/LandScreen";
import SignupScreen from "./src/screens/AuthScreens/SignupScreen";
import SigninScreen from "./src/screens/AuthScreens/SigninScreen";
import { Provider as AuthProvider} from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import { Context as AuthContext } from "./src/context/AuthContext";
import { Provider as ChirpProvider } from "./src/context/ChirpContext";
import ResolveScreen from "./src/screens/AuthScreens/ResolveScreen";
import TweetDetailScreen from "./src/screens/TweetDetailScreen";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Root=()=> {
    return (
        <Drawer.Navigator 
        screeenOptions={({ navigation }) => {
             return {
               header: () => <CustomHeader navigation={navigation} />,
             };
           }}
     // Here we are setting our custom sidebar menu 
     drawerContent={()=><CustomDrawer/>}
       >
         <Drawer.Screen
           name="Home"
           component={HomeScreen}
           options={({ navigation }) => {
             return {
               headerShown: false,
               headerTransparent: true,
          
             };
           }}
         />
       </Drawer.Navigator>
    );
  }
let isSignedIn=false
const App = () => {
  const {state:{token}}= useContext(AuthContext)

  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{headerTitleStyle:{fontSize:25, fontWeight:"bold"}}} >


  {token!=null?<>
    <Stack.Screen
      name="Root"
      component={Root}
      options={{ headerShown: false }}
    />
     <Stack.Screen name="Detail" component={TweetDetailScreen} />

    <Stack.Screen name="Lists" component={ListScreen} />
    <Stack.Screen name="Topics" component={TopicScreen} />
    <Stack.Screen name="Bookmarks" component={BookmarkScreen} />
    <Stack.Screen name="Moments" component={MomentScreen} />
    <Stack.Screen name="Monetization" component={MonetizationScreen} />
    <Stack.Screen name="Settings" component={SettingScreen} />
    <Stack.Screen name="Help" component={HelpScreen} />
    <Stack.Screen name="Tweet" component={TweetScreen} />
    </>: <>

 <Stack.Screen name="LandingPage" component={LandScreen}
/>
 <Stack.Screen name="Signup" component={SignupScreen} />
     <Stack.Screen name="Signin" component={SigninScreen} />


 </>}

  




      </Stack.Navigator>
  
    </NavigationContainer>
  );
};

export default()=>{
  return (
<MenuProvider>
<ChirpProvider>

<AuthProvider>
    <App />
  </AuthProvider>
  </ChirpProvider>
</MenuProvider>
 
  
  
  )
}



// isSignedIn?(
//   <Stack.Screen
//       name="Root"
//       component={Root}
//       options={{ headerShown: false }}
//     />
//     <Stack.Screen name="Lists" component={ListScreen} />
//     <Stack.Screen name="Topics" component={TopicScreen} />
//     <Stack.Screen name="Bookmarks" component={BookmarkScreen} />
//     <Stack.Screen name="Moments" component={MomentScreen} />
//     <Stack.Screen name="Monetization" component={MonetizationScreen} />
//     <Stack.Screen name="Settings" component={SettingScreen} />
//     <Stack.Screen name="Help" component={HelpScreen} />
//     <Stack.Screen name="Tweet" component={TweetScreen} />
// ):(
//   <Stack.Screen name="LandingPage" component={LandScreen} />
//     <Stack.Screen name="Signup" component={SignupScreen} />
//     <Stack.Screen name="Signin" component={SigninScreen} />

// )