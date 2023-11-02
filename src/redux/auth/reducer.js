import { LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS } from '../actionTypes';

const initState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: '',
  errMsg: '',
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case LOGIN_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errMsg: payload,
        token: '',
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        errMsg: '',
        isAuth: true,
        token: payload,
      };
    }

    default: {
      return state;
    }
  }
};
