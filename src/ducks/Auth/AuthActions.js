import AuthType from './AuthTypes';

const AuthActions = {
  loginUser(ID, password) {
    return {
      type: AuthType.LOGIN_REQUESTED,
      payload: { ID, password },
    };
  },
};

export default AuthActions;
