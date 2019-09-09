/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import { observer } from "mobx-react-lite";
import { CounterStoreContext } from './stores/CounterStore';
import { Router } from './Router';

export const App = () => {

  return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Router />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  wrapper: {
    backgroundColor: "#F5FCFF",
    width: "100%",
    maxWidth: 425
  }
});

