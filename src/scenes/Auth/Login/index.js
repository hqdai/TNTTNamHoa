import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  FormLabel,
  FormInput,
  Button,
} from 'react-native-elements';
import { AuthActions } from '../../../ducks/Auth';


import Header from './Components/Header';
import styles from './styles';

class Login extends Component {
  static propTypes = {
    loginUser: PropTypes.func.isRequired,
  };

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
    this.props.loginUser(this.state.ID, this.state.Password);
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

const mapDispatchToProps = dispatch => ({
  loginUser: (ID, password) => dispatch(AuthActions.loginUser(ID, password)),
});

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Login);
