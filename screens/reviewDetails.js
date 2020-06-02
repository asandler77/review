import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
export default function reviewDetails({navigation}) {
  return (
    <View>
      <Text style={styles.item}>{navigation.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ccc',
  },
});
