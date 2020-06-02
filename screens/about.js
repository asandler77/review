import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
export default function about() {
  return (
    <View>
      <Text style={styles.item}>This is About screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'coral',
  },
});
