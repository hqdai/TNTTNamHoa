import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
  Divide,
} from 'react-native-elements';

import { Colors } from '../../../themes';

import Header from './Components/Header';
import styles from './styles';

class Login extends Component {
  componentWillMount() {

  }

  render() {
    return (
      // <ImageBackground
      //   source={require('../../../assets/images/colortheory.jpg')}
      //   style={{ width: '100%', height: '100%' }}
      // >
        <View
          style={styles.container}
        >
          <Header />
          <View style={{ justifyContent: 'space-between', flex: 1 }}>
            <FormLabel>Mã số</FormLabel>
            <FormInput
              labelStyle={{ backgroundColor: 'black' }}
              placeholder="Nhập mã số - VD: HT0xx"
              inputContainerStyle={{ color: 'black' }}
            />
            <FormLabel>Mật khẩu</FormLabel>
            <FormInput
              placeholder="Nhập mật khẩu"
              secureTextEntry
            />
            <Button
              icon={{name: 'squirrel', type: 'octicon'}}
              title="ĐĂNG NHẬP"
            />
            <Button
              title="QUÊN MẬT KHẨU"
            />
          </View>
        </View>
      // </ImageBackground>
    );
  }
}

export default Login;
