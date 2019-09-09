/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState, Fragment, useContext } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import { observer } from "mobx-react-lite";
import { CounterStoreContext } from './stores/CounterStore';

export const App = observer(() => {
  const counterStore = useContext(CounterStoreContext);

  return (
      <View>
        <Text>Welcome to the Workout App!</Text>
        <Text>Count: {counterStore.count}</Text>
        <Button title="increment" onPress={() => counterStore.count++}/>
        <Text>Welcome to the Workout App!</Text>
      </View>
  );
});

// const styles = StyleSheet.create({
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

