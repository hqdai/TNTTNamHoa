import { Navigation } from 'react-native-navigation';
import { AUTH_LOGIN } from '../constants/ScreenConstants';
import RegisterScreens from './RegisterScreens';
import configureStore from '../AppStore';


const TNTTNamHoaInit = () => {
  const store = configureStore();
  RegisterScreens(store);
  Navigation.events().registerAppLaunchedListener(async () => {
    await Navigation.setRoot({
      root: {
        component: {
          name: AUTH_LOGIN,
        },
      },
    });
  });
};

export default TNTTNamHoaInit;
