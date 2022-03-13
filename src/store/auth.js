import axios from "axios";
import * as Keychain from "react-native-keychain";
import {IP_ADDRESS} from "@env"

const TOKEN = "token";

const SET_AUTH = "SET_AUTH";

const setAuth = (auth) => ({ type: SET_AUTH, auth });

export const me = (token) => async (dispatch) => {
  // const {username, token} = await Keychain.getGenericPassword()
  if (token) {
    const res = await axios.get(`http://${IP_ADDRESS}/auth/me`, {
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
      const res = await axios.post(`http://${IP_ADDRESS}/auth/${method}`, {
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
export const signUp =
  (user) => async (dispatch) => {
    try {
      const res = await axios.post(`http://${IP_ADDRESS}/auth/signup`, user);
      console.log(res.data);
      // await Keychain.setGenericPassword(username, res.data.token)
      dispatch(me(res.data.token));
    } catch (authError) {
      console.log("oooooppppssss");
      return dispatch(setAuth({ error: authError }));
    }
  };

export const logout = () => {
  // await Keychain.resetGenericPassword();
  
  return {
    type: SET_AUTH,
    auth: {},
  };
};

export const updateUser = (token, updatedUser) => {
  return async (dispatch) => {
    try {
      if (token) {
        const { data } = await axios.put(
          `http://${IP_ADDRESS}/api/users/${updatedUser.id}`,
          updatedUser,
          {
            headers: {
              authorization: token,
            },
          }
        );
        dispatch(setAuth({ ...data, token: token }));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

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
