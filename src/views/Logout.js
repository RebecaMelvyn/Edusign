import React from 'react';
import { View, Button } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

 

export default function SignOutScreen() {
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // L'utilisateur est déconnecté avec succès
        console.log('Utilisateur déconnecté');
      })
      .catch((error) => {
        // Gérer les erreurs de déconnexion ici
        console.error('Erreur de déconnexion :', error);
      });
  };

 

  return (
<View>
<Button title="Se déconnecter" onPress={handleSignOut} />
</View>
  );
}