import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { AUTH_LOGIN } from '../constants/ScreenConstants';

import Login from '../scenes/Auth/Login';

import reduxHOC from './reduxHOC';

function registerScreens(store) {
  Navigation.registerComponent(AUTH_LOGIN, () => reduxHOC(Login, store));
}

export default registerScreens;
