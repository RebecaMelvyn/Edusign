import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

 

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // L'utilisateur est inscrit avec succès
        const user = userCredential.user;
        console.log('Utilisateur inscrit :', user);
      })
      .catch((error) => {
        // Gérer les erreurs d'inscription ici
        const errorMessage = error.message;
        console.log(errorMessage);
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
<Button title="S'inscrire" onPress={handleSignUp} />
</View>
  );
}