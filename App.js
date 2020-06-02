/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Home from './screens/home';
import About from './screens/about';
import ReviewDetails from './screens/reviewDetails';
import Navigator from './routes/homeStack';

export default function App() {
  return <Navigator />;
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: 'gold',
  },
});
