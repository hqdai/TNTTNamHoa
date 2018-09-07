import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

class Button extends Component {
  render() {
    const { componentStyle, children, textColor } = this.props;
    return (
      <View style={[styles.container, componentStyle]}>
        <TouchableHighlight>
          <Text style={{color: textColor, fontWeight: 'bold'}}>{children}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Button;
