import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

 

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 

  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // L'utilisateur est connecté avec succès
        const user = userCredential.user;
        console.log('Utilisateur connecté :', user);
      })
      .catch((error) => {
        // Gérer les erreurs de connexion ici
        const errorMessage = error.message;
        console.error('Erreur de connexion :', errorMessage);
      });
  };

 

  return (
<View>
<TextInput
        placeholder="Adresse e-mail"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
<TextInput
        placeholder="Mot de passe"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
<Button title="Se connecter" onPress={handleSignIn} />
</View>
  );
}