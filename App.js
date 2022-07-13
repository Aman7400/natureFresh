import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import GetStarted from './src/views/GetStarted/GetStarted'

const image = require('./assets/images/get-started.jpeg') 

import { useFonts, BubblerOne_400Regular } from '@expo-google-fonts/bubbler-one';
import {Ubuntu_700Bold_Italic } from "@expo-google-fonts/ubuntu"
import { StatusBar } from 'expo-status-bar';

const App = () => {

  let [fontsLoaded] = useFonts({
    BubblerOne_400Regular,
    Ubuntu_700Bold_Italic 
  });

  if (!fontsLoaded) {
    return <View>
      <Text>
        Loading...
      </Text>
    </View>;
  }

  return (
<>
<GetStarted/>
<StatusBar style="light" />
</>
  )
}

export default App