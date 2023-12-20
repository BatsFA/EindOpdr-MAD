// Import of part from react
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Pressable, Image, textLog, Button, TextInput, KeyboardAvoidingView, Platform, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

// Main Code
// Content section
export default function App() {
  // IMAGE CONST.
  const [image, setImage] = useState(null);
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
  }
  const [meldingsoort, setMeldingsoort] = useState('');
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [extrainfo, setExtrainfo] = useState('');

  const [errors, setErrors] = useState({});
  const formvalidation = () => {
    let errors = {};

    if (!meldingsoort) errors.meldingsoort = 'Soort melding niet ingevuld';
    if (!location) errors.location = 'locatie niet ingevuld';
    if (!name) errors.name = 'naam niet ingevuld';
    if (!extrainfo) errors.extrainfo = 'Soort melding niet ingevuld';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const submithandling = () => {
    if(formvalidation()) {
      Alert.alert('Verzonden', 'Bedankt voor het melden', [
        {text: 'Cancel',onPress: () => console.log('Cancel Pressed'),style: 'cancel',},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      setMeldingsoort('');
      setLocation('');
      setName('');
      setExtrainfo('');
      setErrors({});
    };
  };
  return (
    <KeyboardAvoidingView 
      behavior='padding'
      style={styles.body}>
      {/* HEADER */}
      <View style={styles.header}>{/* dit is de complete header, en hierbinnen staan het logo en andere onderdelen. */}
        <Image
          style={styles.logo}
          source={require('./assets/Energie4You_logo.png')}>{/* dit is de plek voor het logo boven in het scherm. */}
        </Image>
      </View>

      {/* MAIN */}
      <View style={styles.main}>{/* dit is voor de achtergrond en eventuele achtergrond effecten.*/}

        {/* MELDING FORM */}
        {/* Form for filling in and sending notifications. */}
        <View style={styles.invulform}>
          {/* FORM TITLE */}
          <Text style={styles.txtform} > Melding maken </Text>

          {/* INPUTFIELDS */}
          {/* this is where you put i all the required information. */}
          <Text style={styles.formlabel}>Soort Melding</Text>
          <TextInput style={styles.forminput} placeholder="..." value={meldingsoort} onChangeText={setMeldingsoort}/>
          {errors.meldingsoort ? <Text style={styles.errortxt}>{errors.meldingsoort}</Text> : null}

          <Text style={styles.formlabel}>Locatie</Text>
          <TextInput style={styles.forminput} placeholder="..." value={location}onChangeText={setLocation}/>
          {errors.location ? <Text style={styles.errortxt}>{errors.location}</Text> : null}

          <Text style={styles.formlabel}>Naam Monteur</Text>
          <TextInput style={styles.forminput} placeholder="..." value={name} onChangeText={setName}/>
          {errors.name ? <Text style={styles.errortxt}>{errors.name}</Text> : null}

          <Text style={styles.formlabel}>Extra Informatie</Text>
          <TextInput style={styles.forminput} placeholder="..." value={extrainfo} onChangeText={setExtrainfo}/>
          {errors.extrainfo ? <Text style={styles.errortxt}>{errors.extrainfo}</Text> : null}

          {/* IMAGE PICKER FORM */}
          <View style={styles.imageselect}>
            <Button title='Selecteer foto' onPress={pickImage} />
              {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          </View>

          {/* CONFIRM BTN */}
          {/* This is the btn to confirm and send a notification from the user to the homepage. */}
          <Button title='Melden' onPress={submithandling}/>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
// Styling
const styles = StyleSheet.create({

  // Styling for total body
  body: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#40ff00',
  },

  // Header styling, like bg and logo
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    maxHeight: '15%',
    backgroundColor: '#40ff00',
  },

  // Main content styling
  main: {
    flex: 1,
    backgroundColor: '#40ef00',
  },

  // styling logo within header
  logo: {
    resizeMode: 'contain',
    maxWidth: '30%',
  },

  // Styling meldingform and submit btn
  invulform: {
    padding: 20,
    backgroundColor: '#40ef00',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  formlabel: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  forminput: {
    marginBottom: 15,
    padding: 10,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000000'
  },
  errortxt: {
    color: 'red',
    marginBottom: 10,
  },

});