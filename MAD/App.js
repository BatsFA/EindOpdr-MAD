// Import of part from react
import { StatusBar } from 'expo-status-bar';
import { React, StyleSheet, Text, View, Pressable, Image, AppRegistry } from 'react-native';

// Main Code
// Content section
export default function App() {
  return (

    // Main Body section
    <View style={styles.body}>
      {/* HEADER */}
      <View style={styles.header}>{/* dit is de complete header, en hierbinnen staan het logo en andere onderdelen. */}
        <Image
          style={styles.logo}
          source={require('./assets/Energie4You_logo.png')}>{/* dit is de plek voor het logo boven in het scherm. */}
        </Image>
      </View>

      {/* MAIN */}
      <View style={styles.main}>{/* dit is voor de achtergrond en eventuele achtergrond effecten.*/}
        <View style={styles.melding}>{/* dit is voor de daadwerkelijke melding zelf. */}
          
        </View>
      </View>
    </View>
  );
}
// Styling
const styles = StyleSheet.create({

  // Styling for main body
  body: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  // Header styling, like bg and logo
  header: {
    flex: 1,
    backgroundColor: '#40ff00',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '11%',
  },
  logo: {
    resizeMode: 'contain',
    maxWidth: '30%',
  },

  // Main content styling
  main: {
    flex: 1,
    backgroundColor: '#40ef00',
  },
});