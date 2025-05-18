import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen() {
  const navigation = useNavigation(); // ✅ Correct: inside component function

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
  });

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    const { firstName, lastName, email, password, dob, gender } = form;
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!firstName || !lastName || !email || !password || !dob || !gender) {
      Alert.alert('🛑 Whoops!', 'All fields are required!');
      return false;
    }
    if (!emailRegex.test(email)) {
      Alert.alert('📧 Email Error', 'Enter a valid email address.');
      return false;
    }
    if (password.length < 6) {
      Alert.alert('🔐 Weak Password', 'Password must be at least 6 characters.');
      return false;
    }
    return true;
  };

  const handleSignup = () => {
    if (validateForm()) {
      Alert.alert('🎉 Woohoo!', 'Signup Successful!');
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        dob: '',
        gender: '',
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🌈 Join The Neon Fit Club 💪</Text>

      {['First Name', 'Last Name', 'Email', 'Password', 'Date of Birth', 'Gender'].map((label, index) => {
        const field = label.toLowerCase().replace(/ /g, '');
        return (
          <TextInput
            key={index}
            style={styles.input}
            placeholder={label}
            placeholderTextColor="#ffb6c1"
            secureTextEntry={label === 'Password'}
            value={form[field]}
            onChangeText={(text) => handleChange(field, text)}
          />
        );
      })}

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>🔥 SIGN ME UP 🔥</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Log In')}
      >
        <Text style={styles.loginButtonText}>⚡ LOG IN ⚡</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#39FF14', // neon green
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FF00FF', // magenta
    backgroundColor: '#1a1a1a',
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FF1493', // hot pink
    padding: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  loginButton: {
    backgroundColor: '#FF00FF', // magenta neon
    padding: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#FF00FF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.9,
    shadowRadius: 15,
    elevation: 15,
  },
  loginButtonText: {
    color: '#39FF14', // neon green text
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
});
