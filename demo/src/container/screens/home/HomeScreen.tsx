import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../../../res/colors';

export default function HomeScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text>KKKKKKK</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors._text_white,
    alignContent: 'center',
    alignItems: 'center',
  },
});
