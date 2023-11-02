import { TASK_ERROR, TASK_REQUEST, TASK_GET_SUCCESS } from '../actionTypes';

const initState = {
  isLoading: false,
  isError: false,
  errMsg: null,
  tasks: new Array(),
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TASK_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case TASK_ERROR: {
      return { ...state, isLoading: false, isError: true, errMsg: payload };
    }
    case TASK_GET_SUCCESS: {
      return { ...state, isLoading: false, isError: false, tasks: payload };
    }
    default: {
      return state;
    }
  }
};
