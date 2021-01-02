import React from 'react';
import {View, StyleSheet} from 'react-native';

export default ({children, style}) => 
  <View style={[style, styles.containerStyle]}>{children}</View>;

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'column',
  },
});