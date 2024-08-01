// // import React in our code
// import React from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
// } from 'react-native';

// // 1. Either import the whole module
// //import Communications from 'react-native-communications';
// /* 2. Or import single methods
//  import {
//   phonecall,
//   email,
//   text,
//   web
// } from 'react-native-communications';*/

// const WeatherScreen = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <Text style={styles.titleText}>
//           Make Emergency Phone Call, Send SMS or Email
//         </Text>
//         {/* Call: phonecall(phoneNumber, prompt) */}
//         {/* <TouchableOpacity
//           activeOpacity={0.7}
//           style={styles.buttonStyle}
//           onPress={() => Communications.phonecall('0123456789', true)}>
//           <Text style={styles.buttonTextStyle}> Call National Help Service</Text>
//         </TouchableOpacity> */}
//         {/* Mail: email(to, cc, bcc, subject, body) */}
//         <TouchableOpacity
//           activeOpacity={0.7}
//           style={styles.buttonStyle}
//           onPress={() =>
//             Communications.email(
//               ['NationalHelpService@gmail.com'],
//               null,
//               null,
//               'Demo Subject',
//               'Demo Content for the mail',
//             )
//           }>
//           <Text style={styles.buttonTextStyle}>Send an Email to National Help Service</Text>
//         </TouchableOpacity>
//         {/* SMS: text(phoneNumber = null, body = null) */}
//         <TouchableOpacity
//           activeOpacity={0.7}
//           style={styles.buttonStyle}
//           onPress={() => Communications.text('0123456789')}>
//           <Text style={styles.buttonTextStyle}>Send a Text/iMessage to National Help Service </Text>
//         </TouchableOpacity>
//         {/* Web: web(address = null)*/}
//         <TouchableOpacity
//           activeOpacity={0.7}
//           style={styles.buttonStyle}
//           onPress={() =>
//             Communications.web('https://www.srilanka.travel/emergency-services')
//           }>
//           <Text style={styles.buttonTextStyle}> Emergency Hotline List</Text>
//         </TouchableOpacity>
//         <Text
//           style={{
//             fontSize: 15,
//             textAlign: 'center',
//             color: 'grey',
//             position: 'absolute', 
//             bottom: 0,
//           }}>

//          Example
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//   },
//   titleText: {
//     fontSize: 22,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   buttonStyle: {
//     justifyContent: 'center',
//     marginTop: 15,
//     padding: 10,
//     backgroundColor: '#1F319D',
//   },
//   buttonTextStyle: {
//     color: '#fff',
//     textAlign: 'center',
//   },
// });

// export default WeatherScreen;

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
// import Geolocation from '@react-native-community/geolocation';

// const WeatherScreen = () => {
//   const [emergencyType, setEmergencyType] = useState('');
//   const [emergencyDescription, setEmergencyDescription] = useState('');
//   const [location, setLocation] = useState(null);

//   const handleEmergencyButton = () => {
//     if (!emergencyType.trim() || !emergencyDescription.trim()) {
//       Alert.alert('Error', 'Please provide both the type and description of the emergency.');
//       return;
//     }

//     // Simulating sending emergency data to a server
//     sendEmergencyData();
//     Alert.alert('Emergency Sent', 'Your emergency alert has been sent successfully.');

//     // You can also integrate real-time services to handle emergency alerts
//   };

//   const sendEmergencyData = () => {
//     // Simulate sending emergency data to a server or emergency services
//     console.log('Sending emergency data:', {
//       type: emergencyType,
//       description: emergencyDescription,
//       //location: location ? `${location.latitude}, ${location.longitude}` : 'Unknown',
//     });
//   };

//   const getCurrentLocation = () => {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setLocation({ latitude, longitude });
//       },
//       (error) => {
//         console.error('Error getting current location:', error);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Make Emergency Phone Call, Send SMS or Email</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Type of Emergency"
//         value={emergencyType}
//         onChangeText={(text) => setEmergencyType(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Description"
//         multiline
//         numberOfLines={4}
//         value={emergencyDescription}
//         onChangeText={(text) => setEmergencyDescription(text)}
//       />
//       <Button title="Send Emergency Alert" onPress={handleEmergencyButton} />
//       {/* <Button title="Get Current Location" onPress={getCurrentLocation} /> */}

//       {/* {location && (
//         <Text style={styles.location}>
//           Current Location: {location.latitude}, {location.longitude}
//         </Text>
//       )} */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 10,
//   },
//   location: {
//     marginTop: 20,
//     fontSize: 16,
//   },
// });

// export default WeatherScreen;


import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Communications from 'react-native-communications';
import Background from './Background2';


const EmergencyScreen = () => {
  const [emergencyType, setEmergencyType] = useState('');
  const [emergencyDescription, setEmergencyDescription] = useState('');

  const handleEmergencyButton = () => {
    if (!emergencyType.trim() || !emergencyDescription.trim()) {
      Alert.alert('Error', 'Please provide both the type and description of the emergency.');
      return;
    }

    // Simulating sending emergency data to a server
    sendEmergencyData();
    Alert.alert('Emergency Sent', 'Your emergency alert has been sent successfully.');

    // You can also integrate real-time services to handle emergency alerts
  };

  const sendEmergencyData = () => {
    // Simulate sending emergency data to a server or emergency services
    console.log('Sending emergency data:', {
      type: emergencyType,
      description: emergencyDescription,
    });
  };

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>EMERGENCY SERVICES</Text>
        <TextInput
          style={styles.input}
          placeholder="Type of Emergency"
          value={emergencyType}
          onChangeText={(text) => setEmergencyType(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          multiline
          numberOfLines={6}
          value={emergencyDescription}
          onChangeText={(text) => setEmergencyDescription(text)}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonAlert}
          onPress={handleEmergencyButton
          }>
          <Text style={styles.buttonAlertText}> Send </Text>
        </TouchableOpacity>

        
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={() =>
              Communications.phonecall('01122333444', true)
            }>
            <Text style={styles.buttonTextStyle}> Call Emergency Service</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={() =>
              Communications.email(
                ['trashmasteremergency@gmail.com'],
                null,
                null,
                'Emergency Subject',
                'Emergency Content for the mail',
              )
            }>
            <Text style={styles.buttonTextStyle}>Send an Email</Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={() => Communications.text('0712233444')}>
            <Text style={styles.buttonTextStyle}>Send a Message  </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={() =>
              Communications.web('https://www.trashmasteremergency.com/contact')
            }>
            <Text style={styles.buttonTextStyle}> Emergency Contact List</Text>
          </TouchableOpacity>
      

        <Text style={{
            fontSize: 15,
            textAlign: 'center',
            color: '#4e947d',
            position: 'absolute',
            bottom: 30,
          }}>
          Report emergencies swiftly and ensure timely action for a cleaner, safer environment. 
        </Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#06523E',
  },
  buttonAlert: {
    marginBottom: 30,
    width: 100,
    height: 40,
    padding: 10,
    backgroundColor: '#06523E',
    borderRadius: 5,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    width: 350,
    height: 50,
    padding: 10,
    backgroundColor: '#1ED8A6',
    borderRadius: 5,
  },
  buttonAlertText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: 350,
    borderWidth: 1,
    borderColor: '#1ED8A6',
    padding: 10,
    marginBottom: 15,
  },
});

export default EmergencyScreen;



