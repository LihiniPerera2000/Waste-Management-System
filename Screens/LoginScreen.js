import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Alert, 
    StyleSheet,
    Image
} from 'react-native';
//import Background2 from './Background2';
import Toast from 'react-native-toast-message';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (username === 'Admin' && password === '123') {
      Toast.show({
        type: 'success',
        text1: 'Login successful!',
      });
      setUsername(''); 
      setPassword(''); 
      setTimeout(() => {
        navigation.navigate('Main');
      }, 1000);
    } else {
      Alert.alert('Invalid credentials', 'Please enter valid username and password.');
    }
  };

  return (
    //<Background2>
        <View style={styles.container}> 
            <Image 
              source={require('../Images/Logo.png')} 
              style={styles.logo}
            />
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Username"
                value={username}
                onChangeText={text => setUsername(text)}
                style={styles.input}
              />
              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={text => setPassword(text)}
                  secureTextEntry={!showPassword}
                  style={styles.passwordInput}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="#06523E" backgroundColor="#ffffff" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={handleLogin} style={styles.button}>
                  <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
            <Toast ref={(ref) => Toast.setRef(ref)} />
         </View>        
    //</Background2>   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  logo: {
    position: 'absolute',
    top: '30%',
    width: 200, 
    height: 200, 
    transform: [{ translateY: -200 }], 
  },
  inputContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -150 }, { translateY: -150 }],
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 300,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  input: {
    width: '100%',
    height: 50,
    fontSize: 16,
    margin: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#06523E',
    backgroundColor: '#ffffff',    
  },
  passwordContainer: {
    width: '100%',
    height: 50,
    margin: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#06523E',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center', 
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    height: 45,
    width: 150,
    marginTop: 30,
    padding: 10,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: '#06523E',
    alignItems: 'center', 
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;