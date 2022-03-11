import axios from 'axios'


const SET_RINGS = 'SET_RINGS'

export const setRings = (rings) => {
    return {
      type: SET_RINGS,
      rings,
    };
  };


  export const fetchRings = () => {
    return async (dispatch) => {
      try {
        const token = window.localStorage.getItem('token');
        if (token) {
          const res = await axios.get('/api/rings', {
              headers: {
                authorization: token
              }
          });
          dispatch(setRings(res.data));
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