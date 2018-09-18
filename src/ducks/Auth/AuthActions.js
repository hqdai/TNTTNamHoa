import { LOGIN_REQUESTED } from './AuthTypes';

const loginUser = ({ ID, password }) => ({
  type: LOGIN_REQUESTED,
  payload: { ID, password },
});

export default loginUser;
