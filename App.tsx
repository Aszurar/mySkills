import React, { useEffect } from 'react';

import { StatusBar } from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Home } from './src/pages/Home';
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={'#121015'} />
      <Home />
    </SafeAreaProvider>
  );
}
