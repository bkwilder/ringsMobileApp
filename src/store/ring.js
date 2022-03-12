import axios from 'axios'
import * as Keychain from "react-native-keychain";


const SET_RING = 'SET_RING'

export const setRing = (ring) => {
    return {
      type: SET_RING,
      ring,
    };
  };


  export const fetchRing = (id) => {
    return async (dispatch) => {
      try {
        const token = await Keychain.getGenericPassword();
        if (token) {
          const res = await axios.get(`/api/rings/${id}`, {
              headers: {
                authorization: token
              }
          });
          dispatch(setRing(res.data));
        }
      } catch (error) {
        console.log(error);
      }
    };
};


const initialState = {
  notes:[{note:''}],
  quiz:{},
};


export default function ringsReducer(state = initialState, action) {
    switch (action.type) {
      case SET_RING:
        return action.ring;
      default:
        return state;
    }
}