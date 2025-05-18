import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native';
import FitnessCards from '../components/FitnessCards';
import { Ionicons } from '@expo/vector-icons';
import { useContext, useState } from 'react';
import { FitnessItems } from '../Context';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
    const navigation = useNavigation(); 

  const [darkMode, setDarkMode] = useState(false);
  const [showWorkoutDetails, setShowWorkoutDetails] = useState(true);
  const { calories, minutes, workout, setCalories, setMinutes, setWorkout } = useContext(FitnessItems);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const toggleWorkoutDetails = () => setShowWorkoutDetails(!showWorkoutDetails);

  const refreshStats = () => {
    setCalories(500);
    setWorkout(5);
    setMinutes(45);
  };

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false}
      style={[styles.container, { backgroundColor: darkMode ? '#121212' : '#f2f2f2' }]}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
       <View style={styles.header}>
        <Text style={[styles.title, { color: darkMode ? 'white' : '#333' }]}>SIX PACK IN 30 DAYS</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={toggleDarkMode} style={{ marginRight: 20 }}>
            <Ionicons name={darkMode ? "sunny" : "moon"} size={28} color={darkMode ? "yellow" : "#333"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={refreshStats} style={styles.iconButton}>
            <Ionicons name="refresh" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={[styles.iconButton, { marginLeft: 12 }]}>
            <Ionicons name="person-circle" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cardsRow}>
        <View style={[styles.card, darkMode && styles.cardDark]}>
          <Text style={[styles.cardValue, darkMode && { color: '#0f0' }]}>{calories.toFixed(2)}</Text>
          <Text style={[styles.cardLabel, darkMode && { color: '#ccc' }]}>KCAL</Text>
        </View>

        <View style={[styles.card, darkMode && styles.cardDark]}>
          <Text style={[styles.cardValue, darkMode && { color: '#0f0' }]}>{workout}</Text>
          <Text style={[styles.cardLabel, darkMode && { color: '#ccc' }]}>WORKOUTS</Text>
        </View>

        <View style={[styles.card, darkMode && styles.cardDark]}>
          <Text style={[styles.cardValue, darkMode && { color: '#0f0' }]}>{minutes}</Text>
          <Text style={[styles.cardLabel, darkMode && { color: '#ccc' }]}>MINUTES</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={toggleWorkoutDetails}
        style={[styles.toggleDetailsBtn, darkMode && { backgroundColor: '#333' }]}
      >
        <Text style={{ color: darkMode ? '#fff' : '#000', fontWeight: 'bold' }}>
          {showWorkoutDetails ? 'Hide' : 'Show'} Workout Details
        </Text>
      </TouchableOpacity>

      {showWorkoutDetails && (
        <View style={[styles.workoutDetails, darkMode && { backgroundColor: '#222' }]}>
          <Text style={[styles.detailsText, darkMode && { color: '#ccc' }]}>
            Workout Plan: {workout} sessions planned
          </Text>
          <Text style={[styles.detailsText, darkMode && { color: '#ccc' }]}>
            Total time: {minutes} minutes
          </Text>
          <Text style={[styles.detailsText, darkMode && { color: '#ccc' }]}>
            Calories to burn: {calories.toFixed(2)} kcal
          </Text>
        </View>
      )}

      {/* Your existing FitnessCards component */}
      <FitnessCards />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    width: "30%",
    height: 90,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },
  cardDark: {
    backgroundColor: "#1e1e1e",
  },
  cardValue: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#333",
  },
  cardLabel: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  toggleDetailsBtn: {
    alignSelf: "center",
    backgroundColor: "#FF1493",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginBottom: 20,
    shadowColor: '#FF1493',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 10,
  },
  workoutDetails: {
    backgroundColor: "#f1f1f1",
    borderRadius: 12,
    padding: 15,
    marginBottom: 25,
  },
  detailsText: {
    fontSize: 16,
    marginVertical: 2,
    color: "#333",
  },
  refreshBtn: {
    backgroundColor: '#FF1493',
    padding: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
