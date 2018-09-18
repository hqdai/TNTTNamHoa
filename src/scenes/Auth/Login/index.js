import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
  Divide,
} from 'react-native-elements';

import Header from './Components/Header';
import styles from './styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: null,
      Password: null,
    };

    this.onLoginUser.bind(this);
  }

  onIDChange = (text) => {
    this.setState({ ID: text });
  }

  onPasswordChange = (text) => {
    this.setState({ Password: text });
  }

  onLoginUser = () => {
    
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <Header />
        <View style={{ justifyContent: 'space-between', flex: 1 }}>
          <FormLabel>Mã số</FormLabel>
          <FormInput
            labelStyle={{ backgroundColor: 'black' }}
            placeholder="Nhập mã số - VD: HT0xx"
            onChangeText={this.onIDChange}
          />
          <FormLabel>Mật khẩu</FormLabel>
          <FormInput
            placeholder="Nhập mật khẩu"
            secureTextEntry
            onChangeText={this.onPasswordChange}
          />
          <Button
            icon={{ name: 'verified-user' }}
            title="ĐĂNG NHẬP"
            onPress={this.onLoginUser}
          />
          <Button
            icon={{ name: 'person-pin' }}
            title="QUÊN MẬT KHẨU"
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  error: state.auth.error,
  user: state.auth.user,
  loading: state.auth.logging,
});

export default connect(mapStateToProps, null, null, { withRef: true })(Login);
