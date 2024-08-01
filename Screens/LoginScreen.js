// Import React and Component
import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Alert, 
    StyleSheet 
} from 'react-native';
import Background from './Background';
//import Navigation from './Navigation';

//Set username and password for admin 
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState(''); //Admin
  const [password, setPassword] = useState(''); //Admin@123

  //check weather is username and password correct
  const handleLogin = () => {
    if (username === '' && password === '') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Invalid credentials', 'Please enter valid username and password.');
    }
  };

  return (
    <Background>
        <View style={[styles.container]}> 
            <Text style={styles.title}>TRASH MASTER</Text>
            <TextInput
            placeholder="Username"
            value={username}
            onChangeText={text => setUsername(text)}
            style={[styles.input]}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
                style={[styles.input]}
            />
            <TouchableOpacity onPress={handleLogin} style={[styles.button]}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
         </View>

    </Background>
    
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { 
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center', 
    marginBottom: 20,
    color: 'white',
  },
  input: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    borderColor: '#1ED8A6',
    backgroundColor: '#B8F4E4',
    margin: 10,
    width: 300,
    height: 50,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 0,
    height: 45,
    width: 150,
    alignItems: 'center',
    marginTop: 30,
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#06523E',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
