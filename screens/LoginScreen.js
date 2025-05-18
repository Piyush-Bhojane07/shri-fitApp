import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';



export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');




  const HARD_CODED_EMAIL = 'test@example.com';
  const HARD_CODED_PASSWORD = '123456';



 const validateLogin = () => {
  if (!email || !password) {
    setError('Please fill in both fields');
    return false;
  }
  setError('');
  return true;
};

const handleLogin = () => {
  if (validateLogin()) {
    navigation.navigate('Home'); // go to dashboard if fields are filled
  }
};


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={!showPass}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPass(!showPass)}
          style={styles.showPassBtn}
        >
          <Text style={{ color: '#ff1493', fontWeight: 'bold' }}>
            {showPass ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>

      {!!error && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginBtnText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('ForgotPassword')}
        style={{ marginTop: 20 }}
      >
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // black background
    padding: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#39FF14', // neon green
    marginBottom: 40,
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  input: {
    backgroundColor: '#1a1a1a', // dark gray
    borderColor: '#FF00FF', // magenta neon border
    borderWidth: 2,
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    color: '#fff',
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showPassBtn: {
    paddingHorizontal: 10,
  },
  loginBtn: {
    backgroundColor: '#FF1493', // hot pink neon
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#FF1493',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  loginBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
  },
  forgotText: {
    color: '#FF00FF', // magenta neon
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  error: {
    color: '#FF2400', // bright red for errors
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
});

