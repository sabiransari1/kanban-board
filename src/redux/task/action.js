import { TASK_ERROR, TASK_REQUEST, TASK_GET_SUCCESS } from '../actionTypes';
import axios from 'axios';

const url = `https://reqres.in/api/login`;

export const getTasks = async (dispatch) => {
  try {
    dispatch({ type: TASK_REQUEST });

    let res = await fetch(`${url}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });

    const data = await res.json();
    dispatch({ type: TASK_GET_SUCCESS, payload: data.boards });
  } catch (error) {
    dispatch({ type: TASK_ERROR, payload: error });
  }
};
