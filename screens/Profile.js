import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const onEditProfile = () => {
    alert('Edit Profile pressed');
  };

  const onLogout = () => {
    alert('Logout pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Ionicons name="person-circle" size={120} color="#FF1493" />
      </View>

      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>johndoe@example.com</Text>
      <Text style={styles.bio}>
        Fitness enthusiast and coder. Working towards my six-pack in 30 days!
      </Text>

      <TouchableOpacity style={styles.editBtn} onPress={onEditProfile}>
        <Text style={styles.editBtnText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
        <Text style={styles.logoutBtnText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#777',
    marginVertical: 6,
  },
  bio: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  editBtn: {
    backgroundColor: '#FF1493',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 20,
    elevation: 4,
  },
  editBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutBtn: {
    backgroundColor: '#444',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 4,
  },
  logoutBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
