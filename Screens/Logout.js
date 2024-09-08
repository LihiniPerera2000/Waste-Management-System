import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import points from './Points'; 

const LogoutScreen = () => {
  const navigation = useNavigation(); 

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => navigation.navigate('LoginScreen') }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.header}>Our Commitment to Sustainable Waste Management</Text>
        {points.map((point, index) => (
          <Text key={index} style={styles.point}>▪ {point}</Text>
        ))}
      </ScrollView>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButtonContainer}>
        <Text style={styles.logoutButton}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#06523E',
  },
  point: {
    fontSize: 14,
    marginBottom: 10,
    color: '#06523E',
    alignSelf: 'flex-start',
    textAlign: 'justify',
  },
  logoutButtonContainer: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#46bb2e',
    height: 35,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 5,
    borderRadius: 5,
  },
  logoutButton: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LogoutScreen;