import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

import styles from './styles';

class InputText extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    
  }

  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <View style={{ borderWidth: 1, borderColor: '#ccc', padding: 10 }}>
          <TextInput
            placeholder={this.props.placeholder}
          />
        </View>
      </View>
    );
  }
}

export default InputText;
