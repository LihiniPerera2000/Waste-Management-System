// import React from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';

// const contacts = [
//   { id: '1', name: 'Fire Department', phone: '0112229110' },
//   { id: '2', name: 'Police Department', phone: '0112233444' },
//   { id: '3', name: 'Ambulance Service', phone: '0112244556' },
//   // Add more contacts as needed
// ];

// const EmergencyContactList = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Emergency Contact List</Text>
//       <FlatList
//         data={contacts}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.contactItem}>
//             <Text style={styles.contactName}>{item.name}</Text>
//             <Text style={styles.contactPhone}>{item.phone}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#06523E',
//   },
//   contactItem: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   contactName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   contactPhone: {
//     fontSize: 16,
//     color: '#555',
//   },
// });

// export default EmergencyContactList;



// const emergencyContacts = [
//   { name: 'Contact 1', phone: '0712345678' },
//   { name: 'Contact 2', phone: '0712345679' },
//   { name: 'Contact 3', phone: '0712345680' },
//   // Add more contacts as needed
// ];

// export default emergencyContacts;