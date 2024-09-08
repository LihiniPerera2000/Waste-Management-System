import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Custom Header Component
const CustomHeader = ({ navigation, title, backgroundColor, textColor }) => {
  const [notificationIcon, setNotificationIcon] = useState('notifications');

  return (
    <View style={[styles.header, { backgroundColor }]}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={30} color="#06523E" />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      </View>

      <Image 
        source={require('../Images/Logo.png')} 
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backButton: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    padding: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    top: 7,
    width: 80, 
    height: 50, 
    position: 'absolute',
    right: 10,
  },
});

export default CustomHeader;
