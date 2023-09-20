import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { firebaseConfig } from './src/firebase/firebaseConfig'; // Importez la configuration Firebase
import SignInScreen from './src/views/Login'; // Importez l'écran de connexion
import SignUpScreen from './src/views/Register'; // Importez l'écran d'inscription
import firebase from 'firebase/app';
import 'firebase/auth';

 

const Stack = createNativeStackNavigator();

 

// Initialisez Firebase avec la configuration
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

 

export default function App() {
  return (
<NavigationContainer>
<Stack.Navigator>
        {/* Écran de connexion */}
<Stack.Screen name="SignIn" component={SignInScreen} />

        {/* Écran d'inscription */}
<Stack.Screen name="SignUp" component={SignUpScreen} />

        {/* Le reste de votre navigation... */}
</Stack.Navigator>
</NavigationContainer>
  );
}

 

const styles = StyleSheet.create({
  // Vos styles ici...
});