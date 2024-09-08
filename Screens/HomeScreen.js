import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          source={require('../Images/Logo.png')} 
          style={styles.logo}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={() => navigation.navigate('BinStatus')} style={styles.button}>
            <Image source={require('../Images/Wastebin.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>STATUS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Location')} style={styles.button}>
            <Image source={require('../Images/LocationH.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>LOCATION</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={() => navigation.navigate('Emergency')} style={styles.button}>
            <Image source={require('../Images/Emergency.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>EMERGENCY</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Logout')} style={styles.button}>
            <Image source={require('../Images/Other.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.description}>
        Welcome to Trash Master! Your ultimate solution for efficient waste management. Monitor, manage, and optimize waste collection with ease.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  titleContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#46bb2e',
    height: 200,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    color: '#4e947d',
    marginBottom: 30,
  },
});

export default HomeScreen;