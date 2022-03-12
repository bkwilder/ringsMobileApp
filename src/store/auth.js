import axios from "axios";
import * as Keychain from "react-native-keychain";

const TOKEN = "token";

const SET_AUTH = "SET_AUTH";

const setAuth = (auth) => ({ type: SET_AUTH, auth });

export const me = (token) => async (dispatch) => {
  // const {username, token} = await Keychain.getGenericPassword()
  if (token) {
    const res = await axios.get("http://172.20.1.54:3000/auth/me", {
      headers: {
        authorization: token,
      },
    });
    return dispatch(setAuth({ ...res.data, token: token }));
  }
};

export const authenticate =
  (username, password, method) => async (dispatch) => {
    try {
      const res = await axios.post(`http://172.20.1.54:3000/auth/${method}`, {
        username,
        password,
      });
      console.log(res.data);
      // await Keychain.setGenericPassword(username, res.data.token)
      dispatch(me(res.data.token));
    } catch (authError) {
      console.log("oooooppppssss");
      return dispatch(setAuth({ error: authError }));
    }
  };

export const logout = async ({ navigation }) => {
  await Keychain.resetGenericPassword();
  navigation.navigate("Login");
  return {
    type: SET_AUTH,
    auth: {},
  };
};
// export const logout = () => {
//   window.localStorage.removeItem(TOKEN)
//   history.push('/login')
//   return {
//     type: SET_AUTH,
//     auth: {}
//   }
// }

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
}
