// Stack Navigater code (Correct one 2024/08/11)

// import 'react-native-gesture-handler';
// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from './Screens/SplashScreen'; 
// import HomeScreen from './Screens/HomeScreen'; 
// import DetailsScreen from './Screens/DetailsScreen'; 
// import LoginScreen from './Screens/LoginScreen'; 
// import BinStatus from './Screens/BinStatus';
// import EmergencyScreen from './Screens/EmergencyScreen';
// import CustomHeader from './Screens/CustomHeader'; 

// const Stack = createStackNavigator();

// const Auth = () => {
//   return (
//     <Stack.Navigator initialRouteName="LoginScreen">
//       <Stack.Screen 
//         name="LoginScreen" 
//         component={LoginScreen} 
//         options={{ headerShown: false }} 
//       />
//     </Stack.Navigator>
//   );
// };

// const App = () => {
//     const [loading, setLoading] = useState(true);
  
//     useEffect(() => {
//       setTimeout(() => {
//         setLoading(false); // Set loading to false after a delay 
//       }, 2000); // Adjust the delay duration as needed
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
//                 //options={{ headerShown: false }}
//               />
//               <Stack.Screen 
//                 name="BinStatus" 
//                 component={BinStatus} 
//                 options={{
//                   header: ({ navigation }) => (
//                     <CustomHeader
//                       navigation={navigation}
//                       title="Bin Status"
//                       backgroundColor="#10a386"
//                       textColor="#ffffff"
//                     />
//                   ),
//                 }}
//               />
//               <Stack.Screen 
//                 name="Details" 
//                 component={DetailsScreen} 
//                 options={{
//                   header: ({ navigation }) => (
//                     <CustomHeader
//                       navigation={navigation}
//                       title="Location Details"
//                       backgroundColor="#10a386"
//                       textColor="#ffffff"
//                     />
//                   ),
//                 }}
//               />
//               <Stack.Screen 
//                 name="Emergency" 
//                 component={EmergencyScreen} 
//                 options={{
//                   header: ({ navigation }) => (
//                     <CustomHeader
//                       navigation={navigation}
//                       title="Emergency Services "
//                       backgroundColor="#10a386"
//                       textColor="#ffffff"
//                     />
//                   ),
//                 }}
//               />
//               <Stack.Screen
//                 name="Auth"
//                 component={Auth}
//                 options={{ headerShown: false }}
//               />
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomHeader from './Screens/CustomHeader';

// Import Screens
import SplashScreen from './Screens/SplashScreen'; 
import HomeScreen from './Screens/HomeScreen'; 
import DetailsScreen from './Screens/LocationScreen'; 
import LoginScreen from './Screens/LoginScreen'; 
import BinStatus from './Screens/BinStatus';
import EmergencyScreen from './Screens/EmergencyScreen';
import Other from './Screens/Logout';
//import EmergencyContactList from './Screens/EmergencyContacts'; 
//import EmergencyContacts from './Screens/EmergencyContacts';


// Create Stack Navigator
const Stack = createStackNavigator();
// Create Tab Navigator
const Tab = createBottomTabNavigator();

// Create Auth Stack
const AuthStack = () => {
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

// Create Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        // Set icon based on route name
        if (route.name === 'Home') {
          iconName = 'home-outline';
        } else if (route.name === 'BinStatus') {
          iconName = 'trash-outline';
        } else if (route.name === 'Location') {
          iconName = 'location-outline';
        } else if (route.name === 'Emergency') {
          iconName = 'alert-circle-outline';
        } else if (route.name === 'Logout') {
          iconName = 'log-out-outline';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#46bb2e',
      tabBarInactiveTintColor: '#06523E',
      tabBarStyle: { 
        backgroundColor: '#ffffff',
        height: 60,
        paddingBottom: 5,
      },
      tabBarLabelStyle: { 
        fontSize: 11,
        marginTop: -5,
      },
      //tabBarShowLabel: false,
    })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="BinStatus" 
        component={BinStatus} 
        options={{
          header: ({ navigation }) => (
            <CustomHeader
              navigation={navigation}
              title="Bin Status"
              backgroundColor="#ffffff"
              textColor="#06523E"
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Location" 
        component={DetailsScreen} 
        options={{
          header: ({ navigation }) => (
            <CustomHeader
              navigation={navigation}
              title="Location"
              backgroundColor="#ffffff"
              textColor="#06523E"
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Emergency" 
        component={EmergencyScreen} 
        options={{
          header: ({ navigation }) => (
            <CustomHeader
              navigation={navigation}
              title="Emergency"
              backgroundColor="#ffffff"
              textColor="#06523E"
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Logout" 
        component={Other} 
        options={{
          header: ({ navigation }) => (
            <CustomHeader
              navigation={navigation}
              title="Logout"
              backgroundColor="#ffffff"
              textColor="#06523E"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Main App Component
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after a delay 
    }, 2000); // Delay duration 
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
              name="Auth" 
              component={AuthStack} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="Main" 
              component={TabNavigator} 
              options={{ headerShown: false }} 
            />
            {/* <Stack.Screen 
              name="EmergencyContacts" 
              component={EmergencyContacts} 
              options={{ title: 'Emergency Contact List' }} 
            /> */}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;






