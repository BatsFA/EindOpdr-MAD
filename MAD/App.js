// Import of part from react
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Pressable, Image, textLog, Button, TextInput, KeyboardAvoidingView, Platform, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';

// Main Code
// Content section
export default function App() {
  // Melding Soort Select
  const [soort, setSoort] = useState();
  const handleValueChange=(itemValue, itemIndex) => setSoort(itemValue);

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
  };
  const [meldingsoort, setMeldingsoort] = useState('');
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [extrainfo, setExtrainfo] = useState('');
  const [errors, setErrors] = useState({});
  const formvalidation = () => {
    let errors = {};

    if (!location) errors.location = 'locatie niet ingevuld';
    if (!name) errors.name = 'naam niet ingevuld';
    if (!image) errors.image = 'Afbeelding niet geselecteerd.'
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const submitHandling = () => {
    if(formvalidation()) {
      Alert.alert('Verzonden', 'Bedankt voor het melden', [
        {text: 'Cancel',onPress: () => console.log('Cancel Pressed'),style: 'cancel',},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      setMeldingsoort('');
      setLocation('');
      setName('');
      setImage('');
      setErrors({});
    };
  };
  return (
    <KeyboardAvoidingView 
      
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
          

          {/* INPUTFIELDS */}
          {/* Input voor alle nodige informatie */}
          <Text style={styles.formlabel}>Soort Melding</Text>
          <View style={styles.menuinput} value={location}onChangeText={setLocation}>
            <Picker
              style={styles.iteminput}
              selectedValue={soort}
              onValueChange={handleValueChange}>
              <Picker.Item label="Grondkabels" value="grondkabels" />
              <Picker.Item label="Hoogspanningsmasten" value="hoogspanningsmasten" />
              <Picker.Item label="Luchtkabels" value="luchtkabels" />
              <Picker.Item label="Schakelkasten" value="schakelkasten" />
            </Picker>
          </View>
          {/* {errors.meldingsoort ? <Text style={styles.errortxt}>{errors.meldingsoort}</Text> : null} */}

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
            <Button 
            title='Selecteer foto'
            color='#40ab00'
            onPress={pickImage} />
              {image && <Image source={{ uri: image }} 
              style={{ width: 200, height: 140, marginTop: 15, padding: 5, borderWidth: 2, borderWidth: 2,
                borderRadius: 5, borderColor: '#40bf00', }} />}
            {errors.image ? <Text style={styles.errortxt}>{errors.image}</Text> : null}
          </View>

          {/* CONFIRM BTN */}
          {/* This is the btn to confirm and send a notification from the user to the homepage. */}
          <View style={styles.melden}>
            <Pressable style={styles.meldknop} onPress={submitHandling}>
              <Text style={styles.meldknoptxt}>Melden</Text>
            </Pressable>
          </View>
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
    maxHeight: '17%',
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

  // Styling meldingform
  txtform: {
    paddingBottom: 20,
    textAlign: 'center',
    fontSize: 40,
    backgroundColor: '#40ef00',
  },
  invulform: {
    flex: 1,
    maxWidth: '100%',
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: '#40ef00',
    borderRadius: 10,
    shadowColor: '#40ff00',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 0
  },
  formlabel: {
    marginTop: 20,
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  forminput: {
    marginTop: 5,
    padding: 10,
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#40bf00',
    fontSize: 15,
  },
  menuinput: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#40bf00',
  },
  errortxt: {
    color: 'red',
  },
  imageselect: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  melden: {
    flex: 1,
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  meldknop: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#000000',
  },
  meldknoptxt: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#ffffff',
  },

});