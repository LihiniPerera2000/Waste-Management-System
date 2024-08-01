// // Import React and Component
// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import Background from './Background2';

// const HomeScreen = ({navigation}) => {
//     return (
//       <Background>
//         <View style={styles.container}>
//           <View style={styles.titleContainer}>
//             <Text style={styles.title}>WELCOME TO TRASH MASTER</Text>
//           </View>
//           <View style={styles.buttonRow}>
//             <TouchableOpacity onPress={() => navigation.navigate('BinStatus')} style={[styles.button]}>
//               <Text style={styles.buttonText}>STATUS</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => navigation.navigate('Details')} style={[styles.button]}>
//               <Text style={styles.buttonText}>LOCATION</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.buttonRow}>
//             <TouchableOpacity onPress={() => navigation.navigate('Weather')} style={[styles.button]}>
//               <Text style={styles.buttonText}>EMERGENCY</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => navigation.navigate('BinStatus')} style={[styles.button]}>
//               <Text style={styles.buttonText}>OTHER</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Background>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//       paddingHorizontal: 20,
//     },
//     titleContainer: {
//       marginBottom: 10,
//     },
//     title: {
//       textAlign: 'center',
//       marginBottom: 50,
//       fontSize: 26,
//       fontWeight: 'bold',
//       color: '#06523E',
//     },
//     buttonRow: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       width: '100%',
//       paddingHorizontal: 20,
//       marginBottom: 50,
//     },
//     button: {
//       backgroundColor: '#1ED8A6',
//       height: 200,
//       width: '45%', 
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: 8,
//       borderRadius: 5,
//     },
//     buttonText: {
//       color: '#ffffff',
//       fontSize: 20,
//       fontWeight: 'bold',
//     },
//   });
  
//   export default HomeScreen;


import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Background from './Background2';

const HomeScreen = ({navigation}) => {
    return (
      <Background>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>TRASH MASTER</Text>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => navigation.navigate('BinStatus')} style={[styles.button]}>
              <Image source={require('../Images/Wastebin.png')} style={styles.buttonImage} />
              <Text style={styles.buttonText}>STATUS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Details')} style={[styles.button]}>
              <Image source={require('../Images/LocationH.png')} style={styles.buttonImage} />
              <Text style={styles.buttonText}>LOCATION</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => navigation.navigate('Emergency')} style={[styles.button]}>
              <Image source={require('../Images/Emergency.png')} style={styles.buttonImage} />
              <Text style={styles.buttonText}>EMERGENCY</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('BinStatus')} style={[styles.button]}>
              <Image source={require('../Images/Other.png')} style={styles.buttonImage} />
              <Text style={styles.buttonText}>OTHER</Text>
            </TouchableOpacity>
          </View>
          <Text 
            style={{
              fontSize: 15,
              textAlign: 'center',
              color: '#4e947d',
              position: 'absolute',
              bottom: 50,
              }}>
                  Welcome to Trash Master! Your ultimate solution for efficient waste management. Monitor, manage, and optimize waste collection with ease.
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
      paddingHorizontal: 20,
    },
    titleContainer: {
      marginBottom: 10,
    },
    title: {
      textAlign: 'center',
      marginBottom: 40,
      fontSize: 40,
      fontWeight: 'bold',
      color: '#06523E',
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 20,
      marginBottom: 50,
    },
    button: {
      backgroundColor: '#1ED8A6',
      height: 200,
      width: '45%', 
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
      borderRadius: 5,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    buttonImage: {
      width: 100,
      height: 100,
      marginBottom: 10,
    },
  });
  
  export default HomeScreen;

