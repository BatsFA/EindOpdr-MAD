import { StatusBar } from 'expo-status-bar';
import { React, StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainscreen}>
      <View style={styles.header}>
      <StatusBar style={styles.header}/>
      </View>
      <Pressable style={styles.btnmelding}>
        <Text style={styles.btnmeldingtxt}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignContent: 'center',
  },
  mainscreen: {
    display: 'flex',
    flexDirection: 'collumn',
    alignContent: 'center',
  },
  btnmelding: {
    maxWidth: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0000',
    borderRadius: 4.0,
  },
  bntmeldingtxt: {
    alignContent: 'center',
    fontSize: '20',
    lineHeight: '21',
    fontWeight: 'bold',
    letterSpacing: '0.25',
    color: '#fff',
  },
});
