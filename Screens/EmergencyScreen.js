// import React, { useState } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   Button,
//   TouchableOpacity,
//   Alert,
//   ScrollView,
// } from 'react-native';
// import Communications from 'react-native-communications';
// import Background from './Background2';

// const EmergencyScreen = () => {
//   const [emergencyType, setEmergencyType] = useState('');
//   const [emergencyDescription, setEmergencyDescription] = useState('');

//   const handleEmergencyButton = () => {
//     if (!emergencyType.trim() || !emergencyDescription.trim()) {
//       Alert.alert('Error', 'Please provide both the type and description of the emergency.');
//       return;
//     }

//     // Simulating sending emergency data to a server
//     sendEmergencyData();
//     Alert.alert('Emergency Sent', 'Your emergency alert has been sent successfully.');
//   };

//   const sendEmergencyData = () => {
//     console.log('Sending emergency data:', {
//       type: emergencyType,
//       description: emergencyDescription,
//     });
//   };

//   return (
//     //<Background>
//     <View style={styles.container}>
//       <Text style={styles.title}>EMERGENCY SERVICES</Text>
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
//         numberOfLines={6}
//         value={emergencyDescription}
//         onChangeText={(text) => setEmergencyDescription(text)}
//       />
//       <TouchableOpacity
//         activeOpacity={0.7}
//         style={styles.buttonAlert}
//         onPress={handleEmergencyButton}>
//         <Text style={styles.buttonAlertText}> Send </Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         activeOpacity={0.7}
//         style={styles.buttonStyle}
//         onPress={() => Communications.phonecall('0112229110', true)}>
//         <Text style={styles.buttonTextStyle}> Call Emergency Service</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         activeOpacity={0.7}
//         style={styles.buttonStyle}
//         onPress={() =>
//           Communications.email(
//             ['lihiniperera116@gmail.com'],
//             null,
//             null,
//             'Emergency Subject',
//             'Emergency Content for the mail',
//           )
//         }>
//         <Text style={styles.buttonTextStyle}>Send an Email</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         activeOpacity={0.7}
//         style={styles.buttonStyle}
//         onPress={() => Communications.text('0712233444')}>
//         <Text style={styles.buttonTextStyle}>Send a Message</Text>
//       </TouchableOpacity>

//       <ScrollView style={styles.contactList}>
//         <View style={styles.contactItem}>
//           <Text style={styles.contactName}>Community Hotline</Text>
//           <Text style={styles.contactNumber}>1212</Text>
//         </View>
//         <View style={styles.contactItem}>
//           <Text style={styles.contactName}>Recycling Center</Text>
//           <Text style={styles.contactNumber}>0712345678</Text>
//         </View>
//         <View style={styles.contactItem}>
//           <Text style={styles.contactName}>Hazardous Waste Disposal</Text>
//           <Text style={styles.contactNumber}>0712345680</Text>
//         </View>
//         <View style={styles.contactItem}>
//           <Text style={styles.contactName}>Environmental Protection Agency</Text>
//           <Text style={styles.contactNumber}>0712345680</Text>
//         </View>
//         <View style={styles.contactItem}>
//           <Text style={styles.contactName}>Fire Emergency Services</Text>
//           <Text style={styles.contactNumber}>0712345680</Text>
//         </View>
//         <View style={styles.contactItem}>
//           <Text style={styles.contactName}>Waste Management Contractor</Text>
//           <Text style={styles.contactNumber}>0712345680</Text>
//         </View>
//         <View style={styles.contactItem}>
//           <Text style={styles.contactName}>Municipel Council</Text>
//           <Text style={styles.contactNumber}>0712345680</Text>
//         </View>
//         <View style={styles.contactItem}>
//           <Text style={styles.contactName}>Recycling Information Hotline</Text>
//           <Text style={styles.contactNumber}>0712345680</Text>
//         </View>
//       </ScrollView>
//     </View>
//     //</Background>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#ffffff',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#06523E',
//   },
//   buttonAlert: {
//     marginBottom: 10,
//     width: 100,
//     height: 40,
//     padding: 10,
//     backgroundColor: '#06523E',
//     borderRadius: 5,
//   },
//   buttonStyle: {
//     justifyContent: 'center',
//     marginTop: 15,
//     width: 350,
//     height: 35,
//     backgroundColor: '#06523E',
//     borderRadius: 5,
//   },
//   buttonAlertText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   buttonTextStyle: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 16,
//   },
//   input: {
//     width: 350,
//     borderWidth: 1,
//     borderColor: '#06523E',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 15,
//   },
//   contactList: {
//     marginTop: 20,
//     width: '100%',
//     maxHeight: 200, 
//   },
//   contactItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   contactName: {
//     fontSize: 12,
//     color: '#06523E',
//     fontWeight: 'bold',
//   },
//   contactNumber: {
//     fontSize: 12,
//     color: '#06523E',
//   },
// });

// export default EmergencyScreen;






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
  ScrollView,
} from 'react-native';
import Communications from 'react-native-communications';

const EmergencyScreen = () => {
  const [emergencyType, setEmergencyType] = useState('');
  const [emergencyDescription, setEmergencyDescription] = useState('');

  const handleEmergencyButton = () => {
    if (!emergencyType.trim() || !emergencyDescription.trim()) {
      Alert.alert('Error', 'Please provide both the type and description of the emergency.');
      return;
    }
  };

  return (
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
        style={styles.buttonStyle}
        onPress={() => {
          handleEmergencyButton();
          Communications.phonecall('0789824860', true);
        }}>
        <Text style={styles.buttonTextStyle}> Call Emergency Service</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={() => {
          handleEmergencyButton();
          Communications.email(
            ['lihiniperera116@gmail.com'],
            null,
            null,
            'Emergency Subject',
            `Type of Emergency: ${emergencyType}\nDescription: ${emergencyDescription}`,
          );
        }}>
        <Text style={styles.buttonTextStyle}>Send an Email</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={() => {
          handleEmergencyButton();
          Communications.text('0789824860', `Type of Emergency: ${emergencyType}\nDescription: ${emergencyDescription}`);
        }}>
        <Text style={styles.buttonTextStyle}>Send a Message</Text>
      </TouchableOpacity>

      <ScrollView style={styles.contactList}>
        <View style={styles.contactItem}>
          <Text style={styles.contactName}>Community Hotline</Text>
          <Text style={styles.contactNumber}>1212</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactName}>Recycling Center</Text>
          <Text style={styles.contactNumber}>0712345678</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactName}>Hazardous Waste Disposal</Text>
          <Text style={styles.contactNumber}>0712345680</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactName}>Environmental Protection Agency</Text>
          <Text style={styles.contactNumber}>0712345680</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactName}>Fire Emergency Services</Text>
          <Text style={styles.contactNumber}>0712345680</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactName}>Waste Management Contractor</Text>
          <Text style={styles.contactNumber}>0712345680</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactName}>Municipel Council</Text>
          <Text style={styles.contactNumber}>0712345680</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactName}>Recycling Information Hotline</Text>
          <Text style={styles.contactNumber}>0712345680</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#06523E',
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    width: 350,
    height: 35,
    backgroundColor: '#06523E',
    borderRadius: 5,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  input: {
    width: 350,
    borderWidth: 1,
    borderColor: '#06523E',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  contactList: {
    marginTop: 20,
    width: '100%',
    maxHeight: 200, 
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contactName: {
    fontSize: 12,
    color: '#06523E',
    fontWeight: 'bold',
  },
  contactNumber: {
    fontSize: 12,
    color: '#06523E',
  },
});

export default EmergencyScreen;