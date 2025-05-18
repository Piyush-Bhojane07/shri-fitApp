import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import FitScreen from "./screens/FitScreen";
import RestScreen from "./screens/RestScreen";
import SignupScreen from "./screens/SignIn";
import { ForgotPasswordScreen}  from "./screens/ForgotPasswordScreen";
import ProfileScreen from "./screens/Profile";
import LoginScreen from "./screens/LoginScreen";
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Sign In"
          component={SignupScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Log In"
          component={LoginScreen}
        />


<Stack.Screen
          options={{ headerShown: false }}
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Forget Password"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Workout"
          component={WorkoutScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Fit"
          component={FitScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Rest"
          component={RestScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
