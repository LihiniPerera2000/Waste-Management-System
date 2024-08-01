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
// import MapView, { Marker, Polyline } from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';

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
//       const response = await fetch('http://192.168.111.229/WasteManagement/getdata.php');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();

//       if (data.Latitude && data.Longitude) {
//         const latitude = parseFloat(data.Latitude); // Convert latitude data to float
//         const longitude = parseFloat(data.Longitude); // Convert longitude data to float
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
//       setLoading(false); // Set loading to false regardless of success or error
//     }
//   };

//   const requestLocationPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
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
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <Text style={styles.boldText}>{locationStatus}</Text>
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
//                 apikey="YOUR_GOOGLE_MAPS_API_KEY"
//                 strokeWidth={3}
//                 strokeColor="hotpink"
//               />
//             )}
//           </MapView>
//         )}
//         <View style={{ marginTop: 20 }}>
//           {!journeyStarted && (
//             <TouchableOpacity onPress={handleStartJourney} style={[styles.button]}>
//               <Text style={styles.buttonText}>START</Text>
//             </TouchableOpacity>
//           )}
//           <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.button]}>
//             <Text style={styles.buttonText}>BACK</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//   },
//   boldText: {
//     fontSize: 25,
//     color: 'red',
//     marginVertical: 16,
//     textAlign: 'center',
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
// });

// export default DetailsScreen;


// Correct one uncomment this..........................................
import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, 
  Text, 
  View,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Background from './Background2';

const DetailsScreen = () => {
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [destinationLatitude, setDestinationLatitude] = useState(null);
  const [destinationLongitude, setDestinationLongitude] = useState(null);
  const [locationStatus, setLocationStatus] = useState('');
  const [loading, setLoading] = useState(true);
  const [journeyStarted, setJourneyStarted] = useState(false);
  const navigation = useNavigation();

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.4.229/WasteManagement/getdata.php');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      if (data.Latitude && data.Longitude) {
        const latitude = parseFloat(data.Latitude); // Convert latitude data to float
        const longitude = parseFloat(data.Longitude); // Convert longitude data to float
        setCurrentLatitude(latitude);
        setCurrentLongitude(longitude);
        setLocationStatus('LOCATION FETCHED');
        console.log('Location Fetched:', latitude, longitude); // Log fetched location
      } else {
        throw new Error('Latitude or longitude missing in fetched data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLocationStatus('Error fetching location data');
    } finally {
      setLoading(false); // Set loading to false regardless of success or error
    }
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, // Get permisiion from device
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
        fetchData(); // Fetch data if permission is granted
      } else {
        console.log('Location permission denied');
        setLocationStatus('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const handleStartJourney = () => {
    setJourneyStarted(true);
  };

  return (
    <Background>
      <SafeAreaView style={{ flex: 1 }}>  
      <View style={styles.container}>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.ImageButton1]}>
          <Image
            source={require('../Images/Back.png')} 
            style={{ width: 50, height: 50, }} 
          />
        </TouchableOpacity> */}
        
        <Text style={styles.title}>TRASH MASTER {locationStatus}</Text>

        {/* <TouchableOpacity onPress={fetchData} style={[styles.ImageButton2]}>
          <Image
            source={require('../Images/Refresh1.png')} 
            style={{ width: 50, height: 50, }} 
          />
        </TouchableOpacity> */}

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
                strokeWidth={3}
                strokeColor="hotpink"
              />
            )}
          </MapView>
        )}
        <View style={{ marginTop: 20 }}>
          {!journeyStarted && (      
            <TouchableOpacity onPress={fetchData} style={[styles.button]}>
              <Text style={styles.buttonText}>REFRESH</Text>
            </TouchableOpacity>
          )}
            <TouchableOpacity onPress={handleStartJourney} style={[styles.button]}>
              <Text style={styles.buttonText}>START</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'white',
    padding: 10,
  },
  boldText: {
    fontSize: 25,
    color: 'red',
    marginVertical: 16,
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#06523E',
  },
  map: {
    flex: 1,
    height: 400,
  },
  button: {
    backgroundColor: '#1ED8A6',
    height: 35,
    width: 390,
    alignItems: 'center',
    marginBottom: 8,
    padding: 8,
    borderRadius: 2,
  },
  ImageButton1: {
    borderRadius: 35 / 2,
    marginBottom: 5,
    position:'absolute',
    bottom: 720,  
    left: 20, 
    zIndex: 10,
  },  
  ImageButton2: {
    borderRadius: 35 / 2,
    marginBottom: 5,
    position: 'absolute',
    bottom: 100,  
    left: 340, 
    zIndex: 10,
  },  
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;




              







