import React from 'react';
import {
  View, Component, Image, Text,
} from 'react-native';

import styles from './styles';

const Header = () => (
  <View style={styles.container}>
    <Image
      style={styles.imgStyle}
      source={require('../../../../../assets/images/logoTNTT.png')}
    />
  </View>
);

export default Header;
