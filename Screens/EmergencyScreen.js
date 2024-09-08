import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import Communications from 'react-native-communications';
import { Picker } from '@react-native-picker/picker';

const EmergencyScreen = () => {
  const [emergencyType, setEmergencyType] = useState('');
  const [emergencyDescription, setEmergencyDescription] = useState('');

  const handleEmergencyButton = () => {
    if (!emergencyType.trim() || !emergencyDescription.trim()) {
      Alert.alert('Error', 'Please provide both the type and description of the emergency.');
      return false;
    }
    return true;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>EMERGENCY SERVICES</Text>
      <Picker
        selectedValue={emergencyType}
        style={styles.picker}
        onValueChange={(itemValue) => setEmergencyType(itemValue)}>
        <Picker.Item label="Select Type of Emergency" value="" />
        <Picker.Item label="Hazardous Waste Exposure" value="Hazardous Waste Exposure" />
        <Picker.Item label="Vehicle Accidents" value="Vehicle Accidents" />
        <Picker.Item label="Fire Hazards" value="Fire Hazards" />
        <Picker.Item label="Equipment Malfunction" value="Equipment Malfunction" />
        <Picker.Item label="Biological Hazards" value="Biological Hazards" />
        <Picker.Item label="Other" value="Other" />
      </Picker>
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
          Communications.phonecall('111', true);
        }}>
        <Text style={styles.buttonTextStyle}>Call Emergency Service</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={() => {
          if (handleEmergencyButton()) {
            Communications.email(
              ['lihiniperera116@gmail.com'],
              null,
              null,
              emergencyType,
              emergencyDescription,
            );
          }
        }}>
        <Text style={styles.buttonTextStyle}>Send an Email</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={() => {
          if (handleEmergencyButton()) {
            Communications.text('0789824860', `Type of Emergency: ${emergencyType}\nDescription: ${emergencyDescription}`);
          }
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
    </SafeAreaView>
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
  picker: {
    width:350,
    height: 50,
    marginBottom: 15,
    borderColor: '#06523E',
    borderWidth: 1,
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