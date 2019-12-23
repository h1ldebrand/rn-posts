import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { AppNavigation } from './src/navigation/AppNavigation';
import { bootstrap } from './src/bootstrap';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if(!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={err => console.error(err)}
      />
    )
  }

  return <AppNavigation/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
