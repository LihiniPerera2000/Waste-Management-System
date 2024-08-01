//Example lohout
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const SettingsScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  const handleLogout = () => {
    // Perform logout actions here (e.g., clear user data, reset app state, etc.)
    navigation.navigate('LoginScreen'); // Navigate to the login screen
  };

  return (
    <View style={styles.container}>
      {/* Your other settings screen components */}
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logoutButton}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 20,
  },
});

export default SettingsScreen;
