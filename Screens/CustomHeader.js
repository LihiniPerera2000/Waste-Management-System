import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Custom Header Component
const CustomHeader = ({ navigation, title, backgroundColor, textColor }) => {
  const [notificationIcon, setNotificationIcon] = useState('notifications');

  //Fetch data from server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://172.20.10.5/WasteManagement/getdata.php');
        const data = await response.json();
        console.log('Fetched data:', data); 

        if (data.distance < 5) { // If bin is full change icon to notifications-on
          setNotificationIcon('notifications-on');
        } else {
          setNotificationIcon('notifications');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={[styles.header, { backgroundColor }]}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={30} color="#06523E" />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      </View>

      <TouchableOpacity style={styles.notificationIcon}>
        <Icon name={notificationIcon} size={30} color="#06523E" />
      </TouchableOpacity>
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
  notificationIcon: {
    position: 'absolute',
    padding: 10,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomHeader;