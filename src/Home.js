import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Home() {
  return (

    <View style={styles.container}>
      <View style={styles.topBar}>
      </View>

      <View style={styles.contain}>
        <Text style={styles.text}>Connectec</Text>
      </View>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
  topBar: {
    marginBottom: '5%',
    width: '100%',
    height: 20,
    backgroundColor: "black",
  },
  contain: {
    padding: '1%',
    marginBottom: '5%',
  },
  text: {
    paddingRight: '5%',
    paddingLeft: '5%',
    color: '#fff',
    backgroundColor: '#ffc107',
  },
  input: {
    width: 200,
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: "black",
    borderWidth: 1,
  }
});