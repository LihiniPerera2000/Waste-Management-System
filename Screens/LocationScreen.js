// Correct one uncomment this..........................................(2024/08/11)
// import React, { useState, useEffect } from 'react';
// import { 
//   SafeAreaView, 
//   Text, 
//   View,
//   Image,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
//   PermissionsAndroid,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import MapView, { Marker } from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';
// import Background from './Background2';

// const DetailsScreen = () => {
//   const [currentLatitude, setCurrentLatitude] = useState(null);
//   const [currentLongitude, setCurrentLongitude] = useState(null);
//   const [destinationLatitude, setDestinationLatitude] = useState(null);
//   const [destinationLongitude, setDestinationLongitude] = useState(null);
//   const [locationStatus, setLocationStatus] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [journeyStarted, setJourneyStarted] = useState(false);
//   const navigation = useNavigation();

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://172.20.10.5/WasteManagement/getdata.php');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();

//       if (data.Latitude && data.Longitude) {
//         const latitude = parseFloat(data.Latitude); // Convert latitude data to float
//         const longitude = parseFloat(data.Longitude); // Convert longitude data to float
//         setCurrentLatitude(latitude);
//         setCurrentLongitude(longitude);
//         setLocationStatus('LOCATION FETCHED');
//         console.log('Location Fetched:', latitude, longitude); // Log fetched location
//       } else {
//         throw new Error('Latitude or longitude missing in fetched data');
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setLocationStatus('Error fetching location data');
//     } finally {
//       setLoading(false); // Set loading to false regardless of success or error
//     }
//   };

//   const requestLocationPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, // Get permisiion from device
//         {
//           title: 'Location Permission',
//           message: 'App needs access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('Location permission granted');
//         fetchData(); // Fetch data if permission is granted
//       } else {
//         console.log('Location permission denied');
//         setLocationStatus('Location permission denied');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   useEffect(() => {
//     requestLocationPermission();
//   }, []);

//   const handleStartJourney = () => {
//     setJourneyStarted(true);
//   };

//   return (
//     <Background>
//       <SafeAreaView style={{ flex: 1 }}>  
//       <View style={styles.container}>
//         {/* <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.ImageButton1]}>
//           <Image
//             source={require('../Images/Back.png')} 
//             style={{ width: 50, height: 50, }} 
//           />
//         </TouchableOpacity> */}
        
//         <Text style={styles.title}>TRASH MASTER {locationStatus}</Text>

//         {/* <TouchableOpacity onPress={fetchData} style={[styles.ImageButton2]}>
//           <Image
//             source={require('../Images/Refresh1.png')} 
//             style={{ width: 50, height: 50, }} 
//           />
//         </TouchableOpacity> */}

//         {loading ? (
//           <Text>Loading...</Text>
//         ) : (
//           <MapView
//             style={styles.map}
//             initialRegion={{
//               latitude: currentLatitude || 0,
//               longitude: currentLongitude || 0,
//               latitudeDelta: 0.01,
//               longitudeDelta: 0.01,
//             }}
//           >
//             {currentLatitude && currentLongitude && (
//               <Marker
//                 coordinate={{
//                   latitude: currentLatitude,
//                   longitude: currentLongitude,
//                 }}
//                 title="Your Location"
//                 description="You are here"
//               />
//             )}
//             {currentLatitude && currentLongitude && destinationLatitude && destinationLongitude && journeyStarted && (
//               <MapViewDirections
//                 origin={{ latitude: currentLatitude, longitude: currentLongitude }}
//                 destination={{ latitude: destinationLatitude, longitude: destinationLongitude }}
//                 apikey="AIzaSyCbXS6u_a8NLXPuviiapfYjy4_jEIcuJMQ"
//                 strokeWidth={3}
//                 strokeColor="hotpink"
//               />
//             )}
//           </MapView>
//         )}
//         <View style={{ marginTop: 20 }}>
//           {!journeyStarted && (      
//             <TouchableOpacity onPress={fetchData} style={[styles.button]}>
//               <Text style={styles.buttonText}>REFRESH</Text>
//             </TouchableOpacity>
//           )}
//             <TouchableOpacity onPress={handleStartJourney} style={[styles.button]}>
//               <Text style={styles.buttonText}>START</Text>
//             </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//     </Background>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //backgroundColor: 'white',
//     padding: 10,
//   },
//   boldText: {
//     fontSize: 25,
//     color: 'red',
//     marginVertical: 16,
//     textAlign: 'center',
//   },
//   title: {
//     textAlign: 'center',
//     marginTop: 10,
//     marginBottom: 10,
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#06523E',
//   },
//   map: {
//     flex: 1,
//     height: 400,
//   },
//   button: {
//     backgroundColor: '#1ED8A6',
//     height: 35,
//     width: 390,
//     alignItems: 'center',
//     marginBottom: 8,
//     padding: 8,
//     borderRadius: 2,
//   },
//   ImageButton1: {
//     borderRadius: 35 / 2,
//     marginBottom: 5,
//     position:'absolute',
//     bottom: 720,  
//     left: 20, 
//     zIndex: 10,
//   },  
//   ImageButton2: {
//     borderRadius: 35 / 2,
//     marginBottom: 5,
//     position: 'absolute',
//     bottom: 100,  
//     left: 340, 
//     zIndex: 10,
//   },  
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
// });

// export default DetailsScreen;




//  // original===========================================================================================================             
// import React, { useState, useEffect } from 'react';
// import { 
//   SafeAreaView, 
//   Text, 
//   View,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
//   PermissionsAndroid,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import MapView, { Marker } from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Background from './Background2';

// // DetailsScreen component
// const DetailsScreen = () => {
//   const [currentLatitude, setCurrentLatitude] = useState(null);
//   const [currentLongitude, setCurrentLongitude] = useState(null);

//   // Set Fort Railway Station as the example destination for get directions
//   //const [destinationLatitude, setDestinationLatitude] = useState(6.9337); 
//   //const [destinationLongitude, setDestinationLongitude] = useState(79.8500);

//    // Set Fort Railway Station as the example destination for get directions
//   const [destinationLatitude, setDestinationLatitude] = useState(7.2008); 
//   const [destinationLongitude, setDestinationLongitude] = useState(79.8737);

//   const [locationStatus, setLocationStatus] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [journeyStarted, setJourneyStarted] = useState(false);
//   const [distance, setDistance] = useState(null);
//   const [duration, setDuration] = useState(null);
//   const navigation = useNavigation();

//   // Fetch location data from the server
//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://172.20.10.5/WasteManagement/getdata.php');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();

//       if (data.Latitude && data.Longitude) {
//         // Convert latitude and longitude data to float
//         const latitude = parseFloat(data.Latitude); 
//         const longitude = parseFloat(data.Longitude); 

//         setCurrentLatitude(latitude);
//         setCurrentLongitude(longitude);
//         setLocationStatus('LOCATION FETCHED');
//         console.log('Location Fetched:', latitude, longitude); // Log fetched location
//       } else {
//         throw new Error('Latitude or longitude missing in fetched data');
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setLocationStatus('Error fetching location data');
//     } finally {
//       setLoading(false); 
//     }
//   };

//   const requestLocationPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, // Get permisiion from device
//         {
//           title: 'Location Permission',
//           message: 'App needs access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('Location permission granted');
//         fetchData(); // Fetch data if permission is granted
//       } else {
//         console.log('Location permission denied');
//         setLocationStatus('Location permission denied');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   useEffect(() => {
//     requestLocationPermission();
//   }, []);

//   const handleStartJourney = () => {
//     setJourneyStarted(true);
//   };

//   return (
//     <Background>
//       <SafeAreaView style={{ flex: 1 }}>  
//       <View style={styles.container}>
//         <Text style={styles.title}>TRASH MASTER {locationStatus} </Text>

//         {loading ? (
//           <Text>Loading...</Text>
//         ) : (
//           <MapView
//             style={styles.map}
//             initialRegion={{
//               latitude: currentLatitude || 0,
//               longitude: currentLongitude || 0,
//               latitudeDelta: 0.01,
//               longitudeDelta: 0.01,
//             }}
//           >
//             {currentLatitude && currentLongitude && (
//               <Marker
//                 coordinate={{
//                   latitude: currentLatitude,
//                   longitude: currentLongitude,
//                 }}
//                 title="Your Location"
//                 description="You are here"
//               />
//             )}
//             {currentLatitude && currentLongitude && destinationLatitude && destinationLongitude && journeyStarted && (
//               <MapViewDirections
//                 origin={{ latitude: currentLatitude, longitude: currentLongitude }}
//                 destination={{ latitude: destinationLatitude, longitude: destinationLongitude }}
//                 apikey="AIzaSyCbXS6u_a8NLXPuviiapfYjy4_jEIcuJMQ"
//                 strokeWidth={3}
//                 strokeColor="hotpink"
//                 onReady={result => {
//                   setDistance(result.distance);
//                   setDuration(result.duration);
//                 }}
//               />
//             )}
//           </MapView>
//         )}

//         {journeyStarted && distance && duration && (
//           <View style={styles.infoContainer}>
//             <Text>Distance: {distance.toFixed(2)} km</Text>
//             <Text>Duration: {Math.ceil(duration)} mins</Text>
//           </View>
//         )}

//         <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
//           {!journeyStarted && (      
//             <TouchableOpacity onPress={fetchData} style={[styles.iconbutton]}>
//               <Icon name="refresh-outline" size={20} color="black" />
//             </TouchableOpacity>
//           )}
//             <TouchableOpacity onPress={handleStartJourney} style={[styles.button]}>
//               <Text style={styles.buttonText}>START</Text>
//             </TouchableOpacity>
//         </View>
        
//       </View>
//     </SafeAreaView>
//     </Background>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   boldText: {
//     fontSize: 25,
//     color: 'red',
//     marginVertical: 16,
//     textAlign: 'center',
//   },
//   title: {
//     textAlign: 'center',
//     marginTop: 10,
//     marginBottom: 10,
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#06523E',
//   },
//   map: {
//     flex: 1,
//     height: 400,
//   },
//   button: {
//     backgroundColor: '#1ED8A6',
//     height: 35,
//     width: 390,
//     alignItems: 'center',
//     marginBottom: 8,
//     padding: 8,
//     borderRadius: 2,
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   iconButton: {
//     backgroundColor: '#1ED8A6',
//     height: 35,
//     width: 35,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 8,
//     borderRadius: 2,
//   },
//   infoContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
// });

// export default DetailsScreen;



// import React, { useState, useEffect } from 'react';
// import { 
//   SafeAreaView, 
//   Text, 
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   PermissionsAndroid,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import MapView, { Marker } from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Background from './Background2';

// // DetailsScreen component
// const DetailsScreen = () => {
//   const [currentLatitude, setCurrentLatitude] = useState(null);
//   const [currentLongitude, setCurrentLongitude] = useState(null);

//   // Set Fort Railway Station as the example destination for get directions
//   const [destinationLatitude, setDestinationLatitude] = useState(7.2008); 
//   const [destinationLongitude, setDestinationLongitude] = useState(79.8737);

//   const [locationStatus, setLocationStatus] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [journeyStarted, setJourneyStarted] = useState(false);
//   const [distance, setDistance] = useState(null);
//   const [duration, setDuration] = useState(null);
//   const navigation = useNavigation();

//   // Fetch location data from the server
//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://172.20.10.5/WasteManagement/getdata.php');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();

//       if (data.Latitude && data.Longitude) {
//         // Convert latitude and longitude data to float
//         const latitude = parseFloat(data.Latitude); 
//         const longitude = parseFloat(data.Longitude); 

//         setCurrentLatitude(latitude);
//         setCurrentLongitude(longitude);
//         setLocationStatus('Location Fetched');
//         console.log('Location Fetched:', latitude, longitude); // Log fetched location
//       } else {
//         throw new Error('Latitude or longitude missing in fetched data');
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setLocationStatus('Error fetching location data');
//     } finally {
//       setLoading(false); 
//     }
//   };

//   const requestLocationPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, // Get permission from device
//         {
//           title: 'Location Permission',
//           message: 'App needs access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('Location permission granted');
//         fetchData(); // Fetch data if permission is granted
//         watchPosition(); // Start watching position
//       } else {
//         console.log('Location permission denied');
//         setLocationStatus('Location permission denied');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   // Watch position changes
//   const watchPosition = () => {
//     navigator.geolocation.watchPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLatitude(latitude);
//         setCurrentLongitude(longitude);
//       },
//       error => console.log(error),
//       { enableHighAccuracy: true, distanceFilter: 10 }
//     );
//   };

//   useEffect(() => {
//     requestLocationPermission();
//   }, []);

//   const handleStartJourney = () => {
//     setJourneyStarted(true);
//   };

//   return (
//     <Background>
//       <SafeAreaView style={{ flex: 1 }}>  
//         <View style={styles.container}>
//           <Text style={styles.title}>Trash Master {locationStatus} </Text>

//           {loading ? (
//             <Text>Loading...</Text>
//           ) : (
//             <MapView
//               style={styles.map}
//               initialRegion={{
//                 latitude: currentLatitude || 0,
//                 longitude: currentLongitude || 0,
//                 latitudeDelta: 0.01,
//                 longitudeDelta: 0.01,
//               }}
//               region={{
//                 latitude: currentLatitude || 0,
//                 longitude: currentLongitude || 0,
//                 latitudeDelta: 0.01,
//                 longitudeDelta: 0.01,
//               }}
//             >
//               {currentLatitude && currentLongitude && (
//                 <Marker
//                   coordinate={{
//                     latitude: currentLatitude,
//                     longitude: currentLongitude,
//                   }}
//                   title="Your Location"
//                   description="You are here"
//                 />
//               )}
//               {currentLatitude && currentLongitude && destinationLatitude && destinationLongitude && journeyStarted && (
//                 <MapViewDirections
//                   origin={{ latitude: currentLatitude, longitude: currentLongitude }}
//                   destination={{ latitude: destinationLatitude, longitude: destinationLongitude }}
//                   apikey="AIzaSyCbXS6u_a8NLXPuviiapfYjy4_jEIcuJMQ"
//                   strokeWidth={5}
//                   strokeColor="#FF0000"
//                   onReady={result => {
//                     setDistance(result.distance);
//                     setDuration(result.duration);
//                   }}
//                 />
//               )}
//             </MapView>
//           )}

//           {journeyStarted && distance && duration && (
//             <View style={styles.infoContainer}>            
//                 <Text style={styles.title}>Distance: </Text>
//                 <Text style={styles.infoText}>{distance.toFixed(2)} km</Text>    
//                 <Text style={styles.title}>Duration: </Text>
//                 <Text style={styles.infoText}>{Math.ceil(duration)} mins</Text>
//               </View>
           
//           )}

//           {/* Fix buttons to the bottom of the screen */}
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity onPress={fetchData} style={[styles.iconButton]}>
//               <Icon name="refresh-outline" size={20} color="#ffffff" />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={handleStartJourney} style={[styles.button]}>
//               <Text style={styles.buttonText}>START</Text>
//             </TouchableOpacity>
//           </View>
          
//         </View>
//       </SafeAreaView>
//     </Background>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   boldText: {
//     fontSize: 25,
//     color: 'red',
//     marginVertical: 16,
//     textAlign: 'center',
//   },
//   title: {
//     textAlign: 'center',
//     marginTop: 10,
//     marginBottom: 5,
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#06523E',
//   },
//   map: {
//     flex: 0,
//     height: 550, 
//     width: 400, 
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//   },
//   button: {
//     backgroundColor: '#1ED8A6',
//     height: 35,
//     width: 150,
//     alignItems: 'center',
//     padding: 8,
//     borderRadius: 2,
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   iconButton: {
//     backgroundColor: '#1ED8A6',
//     height: 35,
//     width: 150,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 2,
//   },
//   infoContainer: {
//     flexDirection: 'row', // Display duration and distance in the same row
//     justifyContent: 'space-around',
//   },
//   infoText: {
//     textAlign: 'center',
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'red',
//     marginTop: 10,
//     marginBottom: 5,
//     marginLeft: -60,
   
//   },
// });

// export default DetailsScreen;

// // original code
// import React, { useState, useEffect } from 'react';
// import { 
//   SafeAreaView, 
//   Text, 
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   PermissionsAndroid,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import MapView, { Marker } from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// // DetailsScreen component
// const LocationScreen = () => {
//   const [currentLatitude, setCurrentLatitude] = useState(null);
//   const [currentLongitude, setCurrentLongitude] = useState(null);

//   // Set Fort Railway Station as the example destination for get directions
//   const [destinationLatitude, setDestinationLatitude] = useState(7.2008); 
//   const [destinationLongitude, setDestinationLongitude] = useState(79.8737);

//   const [locationStatus, setLocationStatus] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [journeyStarted, setJourneyStarted] = useState(false);
//   const [distance, setDistance] = useState(null);
//   const [duration, setDuration] = useState(null);
//   const navigation = useNavigation();

//   // Fetch location data from the server
//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://172.20.10.5/WasteManagement/getdata.php');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();

//       if (data.Latitude && data.Longitude) {
//         // Convert latitude and longitude data to float
//         const latitude = parseFloat(data.Latitude); 
//         const longitude = parseFloat(data.Longitude); 

//         setCurrentLatitude(latitude);
//         setCurrentLongitude(longitude);
//         setLocationStatus('Location Fetched');
//         console.log('Location Fetched:', latitude, longitude); // Log fetched location
//       } else {
//         throw new Error('Latitude or longitude missing in fetched data');
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setLocationStatus('Error fetching location data');
//     } finally {
//       setLoading(false); 
//     }
//   };

//   const requestLocationPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, // Get permission from device
//         {
//           title: 'Location Permission',
//           message: 'App needs access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('Location permission granted');
//         fetchData(); // Fetch data if permission is granted
//         watchPosition(); // Start watching position
//       } else {
//         console.log('Location permission denied');
//         setLocationStatus('Location permission denied');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   // Watch position changes
//   const watchPosition = () => {
//     navigator.geolocation.watchPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLatitude(latitude);
//         setCurrentLongitude(longitude);
//       },
//       error => console.log(error),
//       { enableHighAccuracy: true, distanceFilter: 10 }
//     );
//   };

//   useEffect(() => {
//     requestLocationPermission();
//   }, []);

//   const handleStartJourney = () => {
//     setJourneyStarted(true);
//   };

//   return (
//       <SafeAreaView style={{ flex: 1 }}>  
//         <View style={styles.container}>
          
//           <View style={styles.infoContainer}>
//             <Text style={styles.title}>Distance | </Text>
//             <Text style={styles.infoText}>{distance ? `${distance.toFixed(2)} km` : ''}</Text>    
//             <Text style={styles.title}>Duration | </Text>
//             <Text style={styles.infoText}>{duration ? `${Math.ceil(duration)} mins` : ''}</Text>

//             <TouchableOpacity onPress={fetchData} style={styles.refreshButton}>
//               <Icon name="refresh" size={20} color="#ffffff" />
//             </TouchableOpacity>           
//           </View>

//           <View style={styles.mapContainer}>
//             {loading ? (
//               <Text>Loading...</Text>
//             ) : (
//               <MapView
//                 style={styles.map}
//                 initialRegion={{
//                   latitude: currentLatitude || 0,
//                   longitude: currentLongitude || 0,
//                   latitudeDelta: 0.01,
//                   longitudeDelta: 0.01,
//                 }}
//                 region={{
//                   latitude: currentLatitude || 0,
//                   longitude: currentLongitude || 0,
//                   latitudeDelta: 0.01,
//                   longitudeDelta: 0.01,
//                 }}
//               >
//                 {currentLatitude && currentLongitude && (
//                   <Marker
//                     coordinate={{
//                       latitude: currentLatitude,
//                       longitude: currentLongitude,
//                     }}
//                     title="Your Location"
//                     description="You are here"
//                   />
//                 )}
//                 {currentLatitude && currentLongitude && destinationLatitude && destinationLongitude && journeyStarted && (
//                   <MapViewDirections
//                     origin={{ latitude: currentLatitude, longitude: currentLongitude }}
//                     destination={{ latitude: destinationLatitude, longitude: destinationLongitude }}
//                     apikey="AIzaSyCbXS6u_a8NLXPuviiapfYjy4_jEIcuJMQ"
//                     strokeWidth={5}
//                     strokeColor="#FF0000"
//                     onReady={result => {
//                       setDistance(result.distance);
//                       setDuration(result.duration); 
//                     }}
//                   />
//                 )}
//               </MapView>
//             )}
//           </View>

//           <View style={styles.buttonContainer}>
//             <TouchableOpacity onPress={handleStartJourney} style={styles.startButton}>
//               <Text style={styles.buttonText}>START</Text>
//             </TouchableOpacity>
//           </View> 
          
//         </View>
//       </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#ffffff', 
//     flex: 1,
//     //padding: 10,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#06523E',
//   },
//   infoContainer: {
//     height: 60,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 5,
//     backgroundColor: '#ffffff',
//     width: '100%',
//   },
//   infoText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'red',
//   },
//   refreshButton: {
//     right: 10,
//     backgroundColor: '#46bb2e',
//     padding: 10,
//     borderRadius: 15,
//   },
//   mapContainer: {
//     flex: 1,
//     width: '100%',
//   },
//   map: {
//     flex: 1,
//   },
//   buttonContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 10,
//     width: '100%',
//   },
//   startButton: {
//     backgroundColor: '#46bb2e',
//     height: 35,
//     width: 400,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default LocationScreen;

import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, 
  Text, 
  View,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LocationScreen = () => {
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [currentLongitude, setCurrentLongitude] = useState(null);

  const [destinationLatitude, setDestinationLatitude] = useState(7.2008); 
  const [destinationLongitude, setDestinationLongitude] = useState(79.8737);

  const [locationStatus, setLocationStatus] = useState('');
  const [loading, setLoading] = useState(true);
  const [journeyStarted, setJourneyStarted] = useState(false);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const navigation = useNavigation();

  const fetchData = async () => {
    try {
      const response = await fetch('http://172.20.10.5/WasteManagement/getdata.php');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      if (data.Latitude && data.Longitude) {
        const latitude = parseFloat(data.Latitude); 
        const longitude = parseFloat(data.Longitude); 

        setCurrentLatitude(latitude);
        setCurrentLongitude(longitude);
        setLocationStatus('Location Fetched');
        console.log('Location Fetched:', latitude, longitude);
      } else {
        throw new Error('Latitude or longitude missing in fetched data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLocationStatus('Error fetching location data');
    } finally {
      setLoading(false); 
    }
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
        fetchData();
        watchPosition();
      } else {
        console.log('Location permission denied');
        setLocationStatus('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const watchPosition = () => {
    navigator.geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentLatitude(latitude);
        setCurrentLongitude(longitude);
      },
      error => console.log(error),
      { enableHighAccuracy: true, distanceFilter: 10 }
    );
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const handleStartJourney = () => {
    setJourneyStarted(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>  
      <View style={styles.container}>
        
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Distance | </Text>
          <Text style={styles.infoText}>{distance ? `${distance.toFixed(2)} km` : ''}</Text>    
          <Text style={styles.title}>Duration | </Text>
          <Text style={styles.infoText}>{duration ? `${Math.ceil(duration)} mins` : ''}</Text>

          <TouchableOpacity onPress={fetchData} style={styles.refreshButton}>
            <Icon name="refresh" size={20} color="#ffffff" />
          </TouchableOpacity>           
        </View>

        <View style={styles.mapContainer}>
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: currentLatitude || 0,
                longitude: currentLongitude || 0,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
              region={{
                latitude: currentLatitude || 0,
                longitude: currentLongitude || 0,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              {currentLatitude && currentLongitude && (
                <Marker
                  coordinate={{
                    latitude: currentLatitude,
                    longitude: currentLongitude,
                  }}
                  title="Your Location"
                  description="You are here"
                />
              )}
              {currentLatitude && currentLongitude && destinationLatitude && destinationLongitude && journeyStarted && (
                <MapViewDirections
                  origin={{ latitude: currentLatitude, longitude: currentLongitude }}
                  destination={{ latitude: destinationLatitude, longitude: destinationLongitude }}
                  apikey="AIzaSyCbXS6u_a8NLXPuviiapfYjy4_jEIcuJMQ"
                  strokeWidth={5}
                  strokeColor="#FF0000"
                  onReady={result => {
                    setDistance(result.distance);
                    setDuration(result.duration); 
                  }}
                />
              )}
            </MapView>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleStartJourney} style={styles.startButton}>
            <Text style={styles.buttonText}>START</Text>
          </TouchableOpacity>
        </View>         
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff', 
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#06523E',
  },
  infoContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#ffffff',
    width: '100%',
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  refreshButton: {
    right: 10,
    backgroundColor: '#46bb2e',
    padding: 10,
    borderRadius: 15,
  },
  mapContainer: {
    flex: 1,
    width: '100%',
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
  },
  startButton: {
    backgroundColor: '#46bb2e',
    height: 35,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LocationScreen;