import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
export default function reviewDetails({navigation}) {
  return (
    <View>
      <Text style={styles.item}>{navigation.getParam('title')}</Text>
      <Text style={styles.item}>{navigation.getParam('rating')}</Text>
      <Text style={styles.item}>{navigation.getParam('body')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ccc',
  },
});
