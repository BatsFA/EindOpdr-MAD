// Import of part from react
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, AppRegistry, timesPressed, textLog, Button, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

// Main Code
// Content section
export default function App() {
  const [currency, setCurrency] = useState('US Dollar');
  const [image, setImage] = useState(null);

  // IMAGE CONST.
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    // BTN CONST.
  const [timesPressed, setTimesPressed] = useState(null);
    let textLog = '';
    if (timesPressed > 1) {
      textLog = timesPressed + 'x onPress';
    } else if (timesPressed > 0) {
      textLog = 'onPress';
    }
  }
  
  return (
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

        {/* INVUL FORM */}
        {/*  */}
        <View style={styles.meldform}>
          <Text style={styles.txtform} > Melding maken </Text>
          <View style={styles.invulform}>
            <TextInput style={styles.nameform} placeholder="Soort Melding"/>
            <TextInput style={styles.locationform} placeholder="Locatie"/>
            <TextInput style={styles.nameform} placeholder="Naam Monteur"/>
            <TextInput style={styles.infoform} placeholder="Extra Informatie"/>
          </View>
        </View>

        {/* IMAGE PICKER FORM */}
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button style={styles.selectimage} title="Selecteer Foto" onPress={pickImage} />
          {image && <Image source={{ uri: image }} style={styles.imageplacement} 
          />}
        </View>

        {/* MELD/CONFIRM KNOP */}
        <View style={styles.melding}>{/* dit is voor de daadwerkelijke melding zelf. */}
          <Pressable onPress={() => 
          {setTimesPressed(current => current + 1)}} 
          style={({pressed}) => [{ backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'}, styles.wrapperCustom ]}>
          {({pressed}) => (
            <Text style={styles.text}>{pressed ? 'verzonden' : 'Melden'}</Text>
         )}
         </Pressable>
         <View style={styles.logBox}>
           <Text testID="pressable_press_console">{textLog}</Text>
         </View>
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
  text: {
    
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});