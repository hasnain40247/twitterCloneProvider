import createDataContext from "./createDataContext";
// import trackerApi from "../api/tracker"
// import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";
import { AsyncStorage } from "react-native";
import chirpAPI from "../api/chirp";
const authReducer = (state, action) => {
  switch (action.type) {
    case "setChirpUser":
      return { ...state, chirpUser: action.payload };

    case "signout":
      return { token: null, chirpUser: "", user: "", errorMessage: "" };
    case "signin":
      return {
        errorMessage: "",
        token: action.payload.token,
        user: action.payload.user,
      };

    case "signup":
      return {
        errorMessage: "",
        token: action.payload.token,
        user: action.payload.user,
      };

    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "rem_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => {
  return async ({ navigation }) => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      const user = await AsyncStorage.getItem("user");
      const response = await chirpAPI.get(`/chirpuser/${user}`);
      dispatch({ type: "signin", payload: { token, user: response.data[0] } });
    } else {
      navigation.navigate("LandingPage");
    }
  };
};
const signup = (dispatch) => {
  return async ({ email, name, passw }) => {
    try {
      const response = await chirpAPI.post("/signup", { email, name, passw });
      console.log(response.data);

      await AsyncStorage.setItem("token", response.data.token);
      await AsyncStorage.setItem("user", response.data.user._id);

      dispatch({
        type: "signup",
        payload: { token: response.data.token, user: response.data.user },
      });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, passw }) => {
    try {
      const response = await chirpAPI.post("/signin", { email, passw });

      console.log(response.data);

      await AsyncStorage.setItem("token", response.data.token);
      await AsyncStorage.setItem("user", response.data.user._id);

      dispatch({
        type: "signin",
        payload: { token: response.data.token, user: response.data.user },
      });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };
};

const getChirpUser = (dispatch) => {
  return async ({ userId }) => {
    const response = await chirpAPI.get(`/chirpuser/${userId}`);

    // console.log(response.data);

    return response.data[0];
    // dispatch({type: 'setChirpUser',payload: response.data[0].name})
  };
};
const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");

    dispatch({ type: "signout" });
  };
};
export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signout, signup, tryLocalSignin, getChirpUser },
  { token: null, chirpUser: "", user: "", errorMessage: "" }
);
