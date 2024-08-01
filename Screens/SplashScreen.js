import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const SplashScreen = () => {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
        <Image 
            source={require('../Images/TrashMaster.png')} 
            style={{ width: width, height: height, resizeMode: 'cover' }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default SplashScreen;

