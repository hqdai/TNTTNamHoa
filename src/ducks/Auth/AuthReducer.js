import { LOGIN_REQUESTED, LOGIN_SUCCESS, LOGIN_FAIL } from './AuthTypes';

const INITIAL_STATE = {
  logging: false,
  user: null,
  error: null,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return {
        ...state,
        logging: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
        logging: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        user: null,
        error: action.payload,
        logging: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
