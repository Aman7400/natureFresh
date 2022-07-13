import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, BubblerOne_400Regular } from '@expo-google-fonts/bubbler-one';
import {Ubuntu_700Bold_Italic } from "@expo-google-fonts/ubuntu"
import { colors } from './src/constants/colors';
import { sizes } from './src/constants/fonts';

export default function App() {

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
    <View style={styles.container}>
      <Text style={{ color: colors.primaryExtraDark,fontFamily: 'BubblerOne_400Regular',fontSize:sizes.heading}}>Welcome to Nature Fresh 🍎</Text>
      <Text style={{ color:colors.primaryDark,fontFamily: 'Ubuntu_700Bold_Italic',fontSize:sizes.body}}>Welcome to Nature Fresh 🍎</Text>
      <Text style={{ color:colors.primary,fontFamily: 'Ubuntu_700Bold_Italic',fontSize:sizes.links}}>Welcome to Nature Fresh 🍎</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
