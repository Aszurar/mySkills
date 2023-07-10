import React from 'react';

import { StatusBar } from 'react-native';

import { Home } from './src/pages/Home';
// import SplashScreen from 'react-native-splash-screen'
export default function App() {
  // useEffect(() => {
  //   SplashScreen.hide()
  // }, [])

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#121015'} />
      <Home />
    </>
  );
}
