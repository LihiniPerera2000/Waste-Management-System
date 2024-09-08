//github copy paste
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

// const LocationScreen = () => {
//   const [currentLatitude, setCurrentLatitude] = useState(null);
//   const [currentLongitude, setCurrentLongitude] = useState(null);

//   const [destinationLatitude, setDestinationLatitude] = useState(7.2008); 
//   const [destinationLongitude, setDestinationLongitude] = useState(79.8737);

//   const [locationStatus, setLocationStatus] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [journeyStarted, setJourneyStarted] = useState(false);
//   const [distance, setDistance] = useState(null);
//   const [duration, setDuration] = useState(null);
//   const navigation = useNavigation();

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://172.20.10.5/WasteManagement/getdata.php');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();

//       if (data.Latitude && data.Longitude) {
//         const latitude = parseFloat(data.Latitude); 
//         const longitude = parseFloat(data.Longitude); 

//         setCurrentLatitude(latitude);
//         setCurrentLongitude(longitude);
//         setLocationStatus('Location Fetched');
//         console.log('Location Fetched:', latitude, longitude);
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
//         fetchData();
//         watchPosition();
//       } else {
//         console.log('Location permission denied');
//         setLocationStatus('Location permission denied');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

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
//     <SafeAreaView style={{ flex: 1 }}>  
//       <View style={styles.container}>
        
//         <View style={styles.infoContainer}>
//           <Text style={styles.title}>Distance | </Text>
//           <Text style={styles.infoText}>{distance ? `${distance.toFixed(2)} km` : ''}</Text>    
//           <Text style={styles.title}>Duration | </Text>
//           <Text style={styles.infoText}>{duration ? `${Math.ceil(duration)} mins` : ''}</Text>

//           <TouchableOpacity onPress={fetchData} style={styles.refreshButton}>
//             <Icon name="refresh" size={20} color="#ffffff" />
//           </TouchableOpacity>           
//         </View>

//         <View style={styles.mapContainer}>
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
//         </View>

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity onPress={handleStartJourney} style={styles.startButton}>
//             <Text style={styles.buttonText}>START</Text>
//           </TouchableOpacity>
//         </View>         
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#ffffff', 
//     flex: 1,
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
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Geolocation from '@react-native-community/geolocation';

const LocationScreen = () => {
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  // Set Fort Negombo bus stand as the example destination for get directions
  const [destinationLatitude, setDestinationLatitude] = useState(7.2049); 
  const [destinationLongitude, setDestinationLongitude] = useState(79.8413);

  // Set initial location status to loading
  const [locationStatus, setLocationStatus] = useState('');
  const [loading, setLoading] = useState(true);
  const [journeyStarted, setJourneyStarted] = useState(false);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const navigation = useNavigation();

  const fetchData = async () => {
    try {
      const response = await fetch('http://172.20.10.5/WasteManagement/getdata.php'); // Fetch data from the server
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
      // Check if latitude and longitude data is available
      if (data.Latitude && data.Longitude) {
        const latitude = parseFloat(data.Latitude); 
        const longitude = parseFloat(data.Longitude); 

        setCurrentLatitude(latitude);
        setCurrentLongitude(longitude);
        setRegion({
          ...region,
          latitude,
          longitude,
        });
        setLocationStatus('Location Fetched');
        console.log('Location Fetched:', latitude, longitude);
      } else {
        throw new Error('Latitude or longitude missing in fetched data'); // Throw error if latitude or longitude is missing
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLocationStatus('Error fetching location data');

      // Fallback to last known coordinates if available
      if (currentLatitude && currentLongitude) {
        setRegion({
          ...region,
          latitude: currentLatitude,
          longitude: currentLongitude,
        });
        console.log('Using last known coordinates:', currentLatitude, currentLongitude);
      }
    } finally {
      setLoading(false); 
    }
  };

  // Request location permission from the device
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

  // Watch position changes
  const watchPosition = () => {
    Geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentLatitude(latitude);
        setCurrentLongitude(longitude);
        setRegion({
          ...region,
          latitude,
          longitude,
        });
        console.log('Updated Position:', latitude, longitude);
      },
      error => console.log(error), 
      { enableHighAccuracy: true, distanceFilter: 10 }
    );
  };

  // Request location permission on component mount
  useEffect(() => {
    requestLocationPermission();
  }, []);

  // Start journey
  const handleStartJourney = () => {
    setJourneyStarted(true);
  };

  // Finish journey
  const handleFinishJourney = () => {
    setJourneyStarted(false);
    Alert.alert('Journey Finished', 'You have reached your destination.');
    setRegion({
      ...region,
      latitude: currentLatitude,
      longitude: currentLongitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  // Zoom in on the map
  const zoomIn = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    });
  };

  // Zoom out on the map
  const zoomOut = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>  
      <View style={styles.container}>
        
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Distance:</Text>
          <Text style={styles.infoText}>{distance ? `${distance.toFixed(2)} km` : ''}</Text>    
          <Text style={styles.title}>Duration:</Text>
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
              region={region}
            >
              {currentLatitude && currentLongitude && (
                <Marker
                  coordinate={{
                    latitude: currentLatitude,
                    longitude: currentLongitude,
                  }}
                  // title="Your Location"
                  // description="You are here"
                />
              )}
              {currentLatitude && currentLongitude && destinationLatitude && destinationLongitude && journeyStarted && (
                <MapViewDirections
                  origin={{ latitude: currentLatitude, longitude: currentLongitude }}
                  destination={{ latitude: destinationLatitude, longitude: destinationLongitude }}
                  apikey="AIzaSyCbXS6u_a8NLXPuviiapfYjy4_jEIcuJMQ"
                  strokeWidth={3}
                  strokeColor="#FF0000"
                  onReady={result => {
                    setDistance(result.distance);
                    setDuration(result.duration); 
                    if (result.distance === 0) {
                      handleFinishJourney();
                    }
                  }}
                />
              )}
            </MapView>
          )}
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={handleStartJourney} style={styles.startButton}>
            <Text style={styles.buttonText}>START</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFinishJourney} style={styles.finishButton}>
            <Text style={styles.buttonText}>FINISH</Text>
          </TouchableOpacity>
        </View> 

        <View style={styles.zoomContainer}>
          <TouchableOpacity onPress={zoomIn} style={styles.zoomButton}>
            <Icon name="zoom-in" size={30} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={zoomOut} style={styles.zoomButton}>
            <Icon name="zoom-out" size={30} color="#ffffff" />
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
    borderRadius: 5,
  },
  mapContainer: {
    flex: 1,
    width: '100%',
  },
  map: {
    flex: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
  },
  startButton: {
    backgroundColor: '#46bb2e',
    height: 35,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  finishButton: {
    backgroundColor: '#ff0000',
    height: 35,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  zoomContainer: {
    position: 'absolute',
    bottom: 50,
    right: 10,
    flexDirection: 'column',
  },
  zoomButton: {
    backgroundColor: '#46bb2e',
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default LocationScreen;