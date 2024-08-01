// Correct one uncomment this..........................................
// Import React and Component
// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import Background from './Background2';

// const BinStatus = ({navigation}) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       //get data 
//       const response = await fetch('http://192.168.4.229/WasteManagement/getdata.php');
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const json = await response.json();
//       setData(json);
//     } catch (error) {
//       console.error('Error fetching data:', error.message);
//     }
//   };

//   const getBinStatus = () => {
//     if (!data) return 'No Data';
//     const distance = data.Distance;

//     //Check bin status is Empty, Full or Half
//     if (distance > 24) {
//       return '___ Empty ___';
//     } else if (distance < 5) {
//       return '___ Full ___';
//     }
//     return '___ Half ___';
    
//   };

//   const getImageForBinStatus = () => {
//     const binStatus = getBinStatus();
    
//     //According to bin status display image
//     switch (binStatus) {
//       case '___ Full ___':
//         return require('../Images/WastebinR.png');
//       case '___ Half ___':
//         return require('../Images/WastebinY.png');
//       case '___ Empty ___':
//         return require('../Images/WastebinG.png');
//       default:
//         return require('../Images/WastebinR.png'); 
//     }
//   };

//   return (
//     <Background>
//       <View style={styles.container}>
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>BIN STATUS</Text>
//         </View>
//           {data ? (
//             <>
//               {/* <Text style={styles.dataText}>Latitude: {data.Latitude}</Text>
//               <Text style={styles.dataText}>Longitude: {data.Longitude}</Text> */}
//               {/* <Button title="Bin Status" onPress={() => alert(`Bin Status: ${getBinStatus()}`)} /> */}
//               {/* <Text style={styles.dataText}>Distance: {data.Distance}</Text> */}
//               <Image source={getImageForBinStatus()} style={styles.binImage} />
//               <Text style={styles.statusText}>{getBinStatus()}</Text>
//               <TouchableOpacity onPress={() => navigation.navigate('Details')} style={[styles.button]}>
//                 <Text style={styles.buttonText}>Show Direction</Text>
//               </TouchableOpacity>
//               <Text style={{
//                 fontSize: 15,
//                 textAlign: 'center',
//                 color: '#4e947d',
//                 position: 'absolute',
//                 bottom: 50,
//               }}>
//                   Stay informed about waste levels in real-time to optimize collection
//                    schedules and ensure efficient waste management operations. 
//               </Text>
//             </>
//           ) : (
//             <Text>Loading...</Text>
//           )}
//       </View>
//     </Background>
    
//   );

// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   titleContainer: {
//     marginBottom: 10,
//   },
//   title: {
//     flex: 0,
//     textAlign: 'center',
//     marginBottom: 50,
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#06523E',
//   },
//   // dataContainer: {
//   //   marginTop: 20,
//   //},
//   statusText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#06523E',
//     marginBottom: 10,
//   },
//   binImage: {
//     width: 250,
//     height: 250,
//     resizeMode: 'contain',
//     borderRadius: 100,
//     borderWidth: 2, 
//   },
//   button: {
//     backgroundColor: '#1ED8A6',
//     height: 45,
//     width: 200,
//     alignItems: 'center',
//     marginTop: 15,
//     padding: 8,
//     borderRadius: 5,
//   },
//   ImageButton: {
//     borderRadius: 35 / 2,
//     marginBottom: 5,
//     position: 'absolute',
//     bottom: 200,  
//     // left: 10, 
//     zIndex: 1000,


    
    
//     right: 300,
//     //zIndex: 10,
//   }, 
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

// export default BinStatus;


// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import Background from './Background2';
// import PushNotification from 'react-native-push-notification'; // Import the notification library

// const BinStatus = ({ navigation }) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       //get data 
//       const response = await fetch('http://192.168.4.229/WasteManagement/getdata.php');
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const json = await response.json();
//       setData(json);
//     } catch (error) {
//       console.error('Error fetching data:', error.message);
//     }
//   };

//   const getBinStatus = () => {
//     if (!data) return 'No Data';
//     const distance = data.Distance;

//     //Check bin status is Empty, Full or Half
//     if (distance > 24) {
//       return '___ Empty ___';
//     } else if (distance < 5) {
//       // Send notification when bin is full
//       sendNotification();
//       return '___ Full ___';
//     }
//     return '___ Half ___';
//   };

//   const sendNotification = () => {
//     PushNotification.localNotification({
//       title: 'Dustbin Full!',
//       message: 'Please empty the dustbin to avoid overflow.',
//     });
//   };

//   const getImageForBinStatus = () => {
//         const binStatus = getBinStatus();
        
//         //According to bin status display image
//         switch (binStatus) {
//           case '___ Full ___':
//             return require('../Images/WastebinR.png');
//           case '___ Half ___':
//             return require('../Images/WastebinY.png');
//           case '___ Empty ___':
//             return require('../Images/WastebinG.png');
//           default:
//             return require('../Images/WastebinR.png'); 
//         }
//       };
    
//       return (
//         <Background>
//           <View style={styles.container}>
//             <View style={styles.titleContainer}>
//               <Text style={styles.title}>BIN STATUS</Text>
//             </View>
//               {data ? (
//                 <>
//                   {/* <Text style={styles.dataText}>Latitude: {data.Latitude}</Text>
//                   <Text style={styles.dataText}>Longitude: {data.Longitude}</Text> */}
//                   {/* <Button title="Bin Status" onPress={() => alert(`Bin Status: ${getBinStatus()}`)} /> */}
//                   {/* <Text style={styles.dataText}>Distance: {data.Distance}</Text> */}
//                   <Image source={getImageForBinStatus()} style={styles.binImage} />
//                   <Text style={styles.statusText}>{getBinStatus()}</Text>
//                   <TouchableOpacity onPress={() => navigation.navigate('BinStatus')} style={[styles.button]}>
//                     <Text style={styles.buttonText}>Refresh</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity onPress={() => navigation.navigate('Details')} style={[styles.button]}>
//                     <Text style={styles.buttonText}>Show Direction</Text>
//                   </TouchableOpacity>
                  
//                   <Text style={{
//                     fontSize: 15,
//                     textAlign: 'center',
//                     color: '#4e947d',
//                     position: 'absolute',
//                     bottom: 50,
//                   }}>
//                       Stay informed about waste levels in real-time to optimize collection
//                        schedules and ensure efficient waste management operations. 
//                   </Text>
//                 </>
//               ) : (
//                 <Text>Loading...</Text>
//               )}
//           </View>
//         </Background>
        
//       );
    
//     };
    
//     const styles = StyleSheet.create({
//       container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingHorizontal: 20,
//       },
//       titleContainer: {
//         marginBottom: 10,
//       },
//       title: {
//         flex: 0,
//         textAlign: 'center',
//         marginBottom: 50,
//         fontSize: 26,
//         fontWeight: 'bold',
//         color: '#06523E',
//       },
//       // dataContainer: {
//       //   marginTop: 20,
//       //},
//       statusText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         color: '#06523E',
//         marginBottom: 10,
//       },
//       binImage: {
//         width: 250,
//         height: 250,
//         resizeMode: 'contain',
//         borderRadius: 100,
//         borderWidth: 2, 
//       },
//       button: {
//         backgroundColor: '#1ED8A6',
//         height: 45,
//         width: 200,
//         alignItems: 'center',
//         marginTop: 15,
//         padding: 8,
//         borderRadius: 5,
//       },
//       ImageButton: {
//         borderRadius: 35 / 2,
//         marginBottom: 5,
//         position: 'absolute',
//         bottom: 200,  
//         // left: 10, 
//         zIndex: 1000, 
//         right: 300,
//         //zIndex: 10,
//       }, 
//       buttonText: {
//         color: '#ffffff',
//         fontSize: 20,
//         fontWeight: 'bold',
//       },
//     });
    
//     export default BinStatus;



import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Background from './Background2';
import PushNotification from 'react-native-push-notification'; // Import the notification library

const BinStatus = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [showBlinkingText, setShowBlinkingText] = useState(true);

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      setShowBlinkingText((prev) => !prev);
    }, 1000); // Toggle text visibility every 1000 milliseconds (1 second)
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const fetchData = async () => {
    try {
      //get data 
      const response = await fetch('http://192.168.4.229/WasteManagement/getdata.php');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const getBinStatus = () => {
    if (!data) return 'No Data';
    const distance = data.Distance;

    //Check bin status is Empty, Full or Half
    if (distance > 24) {
      return '___ Empty ___';
    } else if (distance < 5) {
      sendNotification();    // Send notification when bin is full
      return '___ Full ___';
    }
    return '___ Half ___';
  };

  const sendNotification = () => {
    PushNotification.localNotification({
      title: 'Dustbin Full!',
      message: 'Please empty the dustbin to avoid overflow.',
    });
  };

  const blinkingTextStyle = {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FF0000', 
    marginBottom: -60,
    opacity: showBlinkingText ? 1 : 0, // Toggle opacity to hide/show text
  };

  const getImageForBinStatus = () => {
    const binStatus = getBinStatus();
            
            //According to bin status display image
      switch (binStatus) {
        case '___ Full ___':
          return require('../Images/WastebinR.png');
        case '___ Half ___':
          return require('../Images/WastebinY.png');
        case '___ Empty ___':
          return require('../Images/WastebinG.png');
        default:
          return require('../Images/WastebinR.png'); 
      }
    };

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>BIN STATUS</Text>
          <Text style={blinkingTextStyle}>Dustbin Full! Please empty the dustbin to avoid overflow.</Text>
        </View>
        {data ? (
          <>
            <Image source={getImageForBinStatus()} style={styles.binImage} />
            <Text style={styles.statusText}>{getBinStatus()}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('BinStatus')} style={[styles.button]}>
              <Text style={styles.buttonText}>Refresh</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Details')} style={[styles.button]}>
              <Text style={styles.buttonText}>Show Direction</Text>
            </TouchableOpacity>
            <Text style={styles.description}>
              Stay informed about waste levels in real-time to optimize collection
              schedules and ensure efficient waste management operations.
            </Text>
          </>
        ) : (
          <Text>Loading...</Text>
        )}
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
    marginBottom: 20,
    marginTop: -120,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#06523E',
  },
  statusText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#06523E',
    marginBottom: 10,
  },
  binImage: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    borderRadius: 100,
    borderWidth: 2,
  },
  button: {
    backgroundColor: '#1ED8A6',
    height: 45,
    width: 200,
    alignItems: 'center',
    marginTop: 15,
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    color: '#4e947d',
    position: 'absolute',
    bottom: 50,
    marginTop:30,
  },
});

export default BinStatus;


