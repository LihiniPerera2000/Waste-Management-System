// import 'react-native-gesture-handler';

// // Import React and Component
// import React, { useState, useEffect } from 'react';

// // Import Navigators from React Navigation
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// //import { createDrawerNavigator } from '@react-navigation/drawer';
// //import DrawerNavigation from './Screens/Navigation';

// //Import Screens
// import SplashScreen from './Screens/SplashScreen'; 
// import HomeScreen from './Screens/HomeScreen'; 
// import DetailsScreen from './Screens/DetailsScreen'; 
// import LoginScreen from './Screens/LoginScreen'; 
// //import Navigation from './Screens/Navigation';

// //import AboutUs from './DrawerScreens/AboutUs';

// const Stack = createStackNavigator();

// const App = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false); // Set loading to false after a delay 
//     }, 2000); // Adjust the delay duration as 2 seconds
//   }, []);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {loading ? (
//           <Stack.Screen 
//             name="Splash" 
//             component={SplashScreen} 
//             options={{ headerShown: false }} 
//           />
//         ) : (
//           <>
//             <Stack.Screen 
//               name="Login" 
//               component={LoginScreen} 
//               // options={{headerShown: false}}
//             />
//             <Stack.Screen 
//               name="Home" 
//               component={HomeScreen} 
//               //options={{headerShown: false}}
//             />
//             <Stack.Screen 
//               name="Details" 
//               component={DetailsScreen} 
//               options={{headerShown: false}}
//             />
//             {/* <Stack.Screen 
//               name="Navigation" 
//               component={Navigation} 
//               // options={{headerShown: false}}
//             /> */}
//             {/* <Stack.Screen
//               name="Auth"
//               component={Auth}
//               // Hiding header for Navigation Drawer as we will use our custom header
//               options={{headerShown: false}}
//         /> */}

//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


//////////////////////////////////////////////////////////////////////////////



// // corect edited 
// // Correct one uncomment this..........................................
// import 'react-native-gesture-handler';

// // Import React and Component
// //import React from 'react';
// import React, { useState, useEffect } from 'react';

// // Import Navigators from React Navigation
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// //Import Screens
// import SplashScreen from './Screens/SplashScreen'; 
// import HomeScreen from './Screens/HomeScreen'; 
// import DetailsScreen from './Screens/DetailsScreen'; 
// import LoginScreen from './Screens/LoginScreen'; 
// import BinStatus from './Screens/BinStatus';
// import EmergencyScreen from './Screens/EmergencyScreen';

// //import Navigation from './Screens/Navigation';


// const Stack = createStackNavigator();

// const Auth = () => {
//   return (
//     <Stack.Navigator initialRouteName="LoginScreen">
//       <Stack.Screen 
//         name="LoginScree" 
//         component={LoginScreen} 
//         //options={{ headerShown: false }} 
//       />
//     </Stack.Navigator>
//   );
// };

// const App = () => {
//     const [loading, setLoading] = useState(true);
  
//     useEffect(() => {
//       setTimeout(() => {
//         setLoading(false); // Set loading to false after a delay 
//       }, 2000); // Adjust the delay duration as 2 seconds
//     }, []);
  
//     return (
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Splash">
//           {loading ? (
//             <Stack.Screen 
//               name="Splash" 
//               component={SplashScreen} 
//               options={{ headerShown: false }} 
//             />
//           ) : (
//             <>
//               <Stack.Screen 
//                 name="LoginScreen" 
//                 component={LoginScreen} 
//                 options={{ headerShown: false }} 
//               />
//               <Stack.Screen 
//                 name="Home" 
//                 component={HomeScreen} 
//                 //options={{headerShown: false}}
//               />
//               <Stack.Screen 
//                 name="BinStatus" 
//                 component={BinStatus} 
//                 //options={{headerShown: false}}
//               />
//               <Stack.Screen 
//                 name="Details" 
//                 component={DetailsScreen} 
//                 options={{headerShown: false}}
//               />
//               <Stack.Screen 
//                 name="Emergency" 
//                 component={EmergencyScreen} 
//                 //options={{headerShown: false}}
//               />
//               <Stack.Screen
//                 name="Auth"
//                 component={Auth}
//                 options={{headerShown: false}}
//               />
//               {/* <Stack.Screen 
//                 name="Navigation" 
//                 component={Navigation} 
//                 options={{headerShown: false}}
//               /> */}
//             </>
//           )}
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   };

// export default App;

import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screens/SplashScreen'; 
import HomeScreen from './Screens/HomeScreen'; 
import DetailsScreen from './Screens/DetailsScreen'; 
import LoginScreen from './Screens/LoginScreen'; 
import BinStatus from './Screens/BinStatus';
import EmergencyScreen from './Screens/EmergencyScreen';
import CustomHeader from './Screens/CustomHeader'; 

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen 
        name="LoginScreen" 
        component={LoginScreen} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

const App = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setLoading(false); // Set loading to false after a delay 
      }, 2000); // Adjust the delay duration as needed
    }, []);
  
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          {loading ? (
            <Stack.Screen 
              name="Splash" 
              component={SplashScreen} 
              options={{ headerShown: false }} 
            />
          ) : (
            <>
              <Stack.Screen 
                name="LoginScreen" 
                component={LoginScreen} 
                options={{ headerShown: false }} 
              />
              <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                //options={{ headerShown: false }}
              />
              <Stack.Screen 
                name="BinStatus" 
                component={BinStatus} 
                options={{
                  header: ({ navigation }) => (
                    <CustomHeader
                      navigation={navigation}
                      title="Bin Status"
                      backgroundColor="#10a386"
                      textColor="#ffffff"
                    />
                  ),
                }}
              />
              <Stack.Screen 
                name="Details" 
                component={DetailsScreen} 
                options={{
                  header: ({ navigation }) => (
                    <CustomHeader
                      navigation={navigation}
                      title="Location Details"
                      backgroundColor="#10a386"
                      textColor="#ffffff"
                    />
                  ),
                }}
              />
              <Stack.Screen 
                name="Emergency" 
                component={EmergencyScreen} 
                options={{
                  header: ({ navigation }) => (
                    <CustomHeader
                      navigation={navigation}
                      title="Emergency Services "
                      backgroundColor="#10a386"
                      textColor="#ffffff"
                    />
                  ),
                }}
              />
              <Stack.Screen
                name="Auth"
                component={Auth}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

export default App;


