import axios from "axios";
import * as Keychain from "react-native-keychain";
import {IP_ADDRESS} from "@env"

const SET_RING = "SET_RING";

export const setRing = (ring) => {
  return {
    type: SET_RING,
    ring,
  };
};

export const fetchRing = (token, id) => {
  return async (dispatch) => {
    try {
      if (token) {
        const res = await axios.get(`http://${IP_ADDRESS}/api/rings/${id}`, {
          headers: {
            authorization: token,
          },
        });
        dispatch(setRing(res.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {
  id: null,
  notes: [{ note: "" }],
  quiz: {
    linkToResource: "",
  },
};

export default function ringsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RING:
      return action.ring;
    default:
      return state;
  }
}
