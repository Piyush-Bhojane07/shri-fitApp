// ForgotPasswordScreen.js
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

export function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }
    // simulate email sending
    setMessage(`If ${email} exists in our system, a reset link has been sent!`);
    setEmail('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.loginBtn} onPress={handleReset}>
        <Text style={styles.loginBtnText}>Reset Password</Text>
      </TouchableOpacity>

      {!!message && <Text style={styles.successMsg}>{message}</Text>}

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginTop: 20 }}
      >
        <Text style={styles.forgotText}>Back to Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// Shared styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 25,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#39FF14',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  input: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    borderColor: '#ff1493',
    borderWidth: 2,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showPassBtn: {
    paddingHorizontal: 15,
  },
  loginBtn: {
    backgroundColor: '#ff1493',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  loginBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotText: {
    color: '#39FF14',
    textAlign: 'center',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  error: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
  successMsg: {
    color: '#39FF14',
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});