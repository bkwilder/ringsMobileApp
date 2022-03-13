import axios from "axios";
import * as SecureStore from "expo-secure-store";
// import {IP_ADDRESS} from "react-native-dotenv"

const SET_RINGS = "SET_RINGS";

export const setRings = (rings) => {
  return {
    type: SET_RINGS,
    rings,
  };
};

export const fetchRings = (token) => {
  return async (dispatch) => {
    try {
      if (token) {
        const res = await axios.get(`http://172.20.1.54:3000/api/rings`, {
          headers: {
            authorization: token,
          },
        });
        dispatch(setRings(res.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addRing = (token, ring) => {
  return async (dispatch) => {
    try {
      if (token) {
        const res = await axios.post(
          `http://172.20.1.54:3000/api/rings`,
          ring,
          {
            headers: {
              authorization: token,
            },
          }
        );
        dispatch(fetchRings(token));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteRing = (token, ringId) => {
  return async (dispatch) => {
    try {
      if (token) {
        await axios.delete(`http://172.20.1.54:3000/api/rings/${ringId}`, {
          headers: {
            authorization: token,
          },
        });
        dispatch(fetchRings(token));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
const initialState = [];

export default function ringsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RINGS:
      return action.rings;
    default:
      return state;
  }
}
