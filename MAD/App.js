import { StatusBar } from 'expo-status-bar';
import { React, StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.body}>
      {/* <StatusBar style={styles.statusbar} /> */}
      <View style={styles.header}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <View style={styles.meldingen}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <View style={styles.melding}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <View style={styles.addnew}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    maxHeight: 50,
  },
});