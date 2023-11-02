import { LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS } from '../actionTypes';
import axios from 'axios';

const url = `https://reqres.in/api/login`;

export const login = (user) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    let res = await axios.post(`${url}`, user);

    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: error.message });
  }
};
