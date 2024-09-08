import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PushNotification from 'react-native-push-notification'; 
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BinStatus = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [showBlinkingText, setShowBlinkingText] = useState(true);
  const [isBinFull, setIsBinFull] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    // Create notification channel
    PushNotification.createChannel(
      {
        channelId: "bin-status-channel", 
        channelName: "Bin Status Notifications", 
        channelDescription: "Notifications for bin status updates", 
        importance: 4, 
        vibrate: true, 
      },
      (created) => console.log(`createChannel returned '${created}'`) 
    );

    fetchData();
    const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds
    const blinkInterval = setInterval(() => {
      setShowBlinkingText((prev) => !prev);
    }, 1000); // Toggle text visibility every 1000 milliseconds (1 second)
    
    // Reset notification count every 24 hours
    const resetNotificationCount = setInterval(() => {
      setNotificationCount(0);
    }, 24 * 60 * 60 * 1000); 

    return () => {
      clearInterval(interval); 
      clearInterval(blinkInterval); 
      clearInterval(resetNotificationCount);
    };
  }, []);

  //Fetch data from server
  const fetchData = async () => {
    try {
      const response = await fetch('http://172.20.10.5/WasteManagement/getdata.php');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      setData(json);
      checkBinStatus(json);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  //Check bin status and schedule notifications if full
  const checkBinStatus = (data) => {
    const distance = data.Distance;
    if (distance < 5) {
      if (!isBinFull) {
        setIsBinFull(true);
        setNotificationCount(0); // Reset notification count when bin becomes full
        sendNotification(); // Send initial notification
        showToast(); // Show toast notification
        scheduleNotifications(); // Schedule repeated notifications
      }
    } else {
      setIsBinFull(false);
      setNotificationCount(0); // Reset notification count when bin is not full
    }
  };

  //Send notification when bin is full
  const sendNotification = () => {
    if (notificationCount < 2) {
      PushNotification.localNotification({
        channelId: "bin-status-channel", // Ensure this is set
        title: 'Dustbin Full!',
        message: 'Please empty the dustbin to avoid overflow.',
      });
      setNotificationCount((prevCount) => prevCount + 1);
    }
  };

  //Show toast notification when bin is full
  const showToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Dustbin Full',
      text2: 'The dustbin is full. Please empty it.',
    });
  };

  //Schedule notifications every 12 hours
  const scheduleNotifications = () => {
    const twelveHours = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
    setTimeout(() => {
      if (isBinFull && notificationCount < 2) {
        sendNotification();
        showToast();
      }
    }, twelveHours);
  };

  //Get bin status
  const getBinStatus = () => {
    if (!data) return 'No Data';
    const distance = data.Distance;

    //Check bin status is Empty, Full or Half
    if (distance > 24) {
      return 'Empty';
    } else if (distance < 5) {
      return 'Full';
    }
    return 'Partially Full';
  };

  //Blinking text style
  const blinkingTextStyle = {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FF0000', 
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    opacity: showBlinkingText ? 1 : 0, 
  };

  //Get image for bin status
  const getImageForBinStatus = () => {
    const binStatus = getBinStatus();
            
    //According to bin status display bin image
    switch (binStatus) {
      case 'Full':
        return require('../Images/WastebinR.png');
      case 'Partially Full':
        return require('../Images/WastebinY.png');
      case 'Empty':
        return require('../Images/WastebinG.png');
      default:
        return require('../Images/WastebinR.png'); 
    }
  };

  //Bin status indicator
  const BinStatusIndicator = ({ color, status }) => (
    <View style={styles.binStatusContainer}>
      <View style={[styles.binStatusIndicator, { backgroundColor: color }]} />
      <Text style={styles.binStatusText}>{status}</Text>
    </View>
  );

  return (
      <View style={styles.container}>      
        {data ? (
          <>
            <TouchableOpacity onPress={fetchData} style={styles.refreshButton}>
              <Icon name="refresh" size={20} color="#ffffff" />
            </TouchableOpacity>
            
            <View style={styles.binContainer}>
              <TouchableOpacity onPress={fetchData}>
                <Image source={getImageForBinStatus()} style={styles.binImage} />
              </TouchableOpacity>
            </View>

            <Text style={styles.statusText}>{getBinStatus()}</Text>


            <View style={styles.statusIndicatorsContainer}>
              <View style={styles.statusRow}>
                <BinStatusIndicator color="#FF0000" status="Full" />
                <BinStatusIndicator color="#FFFF00" status="Partially Full" />
                <BinStatusIndicator color="#00FF00" status="Empty" />
              </View>
            </View>

            {/* {getBinStatus() === '___ Full ___' && (
              <Text style={blinkingTextStyle}>Dustbin Full!</Text>
            )} */}
          </>

        ) : (
          <Text>Loading...</Text>
        )}
        <Text style={styles.description}>
              Stay informed about waste levels in real-time to optimize collection
              schedules and ensure efficient waste management operations.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Location')} style={styles.LocationButton}>
          <Text style={styles.buttonText}>Location</Text>
        </TouchableOpacity>
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  binContainer: {
    position: 'relative',
    width: 300,
    height: 300,
    marginTop: 10,
  },
  binImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 100,
    borderWidth: 2,
  },
  refreshButton: {
    position: 'absolute',
    backgroundColor: '#46bb2e',
    padding: 10,
    top: 10,
    right: 10,
    borderRadius: 5,
  },
  statusIndicatorsContainer: {
    width: '80%',
    marginTop: 30, 
    marginBottom: 10,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: -10,
  },
  binStatusContainer: {
    alignItems: 'center',
  },
  binStatusIndicator: {
    width: 30,
    height: 30,
    margin: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  binStatusText: {
    color: '#06523E',
  },
  statusText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#06523E',
  },
  LocationButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#46bb2e',
    height: 35,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    color: '#4e947d',
    marginTop: 40, 
  },
});

export default BinStatus;