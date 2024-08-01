import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Image } from 'react-native';

const CustomHeader = ({ navigation, title, backgroundColor, textColor }) => {
  return (
    <View style={[styles.header, { backgroundColor }]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
            source={require('../Images/Back.png')} 
            style={{ width: 50, height: 50, }} 
        />
      </TouchableOpacity>
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'space-between',
    padding: 5,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign: 'right',
    
  },
});

export default CustomHeader;
