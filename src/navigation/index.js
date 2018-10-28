import { Navigation } from 'react-native-navigation';
import { AUTH_LOGIN } from '../constants/ScreenConstants';
import RegisterScreens from './RegisterScreens';
import configureStore from '../AppStore';


export default function TNTTNamHoaInit() {
  const store = configureStore();
  RegisterScreens(store);
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: AUTH_LOGIN,
        },
      },
    });
  });
}
